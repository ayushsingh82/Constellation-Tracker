import React from 'react';
import { motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
// import { TracingBeam } from "./ui/tracing-beam";
import { TypewriterEffectSmooth } from './ui/typewriter-effect';
import { Spotlight } from "./ui/Spotlight";
import { SparklesCore } from "./ui/sparkles";


 const SparklesPreview=()=> {
    return (
      <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">

        <SpotlightPreview/>
        <div className="w-[40rem] h-40 relative mt-[-152px]">
          {/* Gradients */}
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
          <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
          <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
   
          {/* Core component */}
          <SparklesCore
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={1200}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
    

          {/* Radial Gradient to prevent sharp edges */}
          <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
        </div>
        
      </div>
    );
  }
  

const SpotlightPreview =()=> {
    return (
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
     
      <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <TypewriterEffectSmoothDemo/>
          </h1>
          <button className='mt-[5px] ml-[200px] border-2 border-purple-500 text-white px-[10px] py-[10px] font-medium text-xl bg-gradient-to-r from-purple-900 via-black to-black rounded-lg mx-auto'>
          Join the community
      </button>
      <button className='mt-[5px] ml-[30px] border-2 border-purple-500 text-white px-[10px] py-[10px] font-medium text-xl bg-gradient-to-r from-purple-900 via-black to-black rounded-lg mx-auto'>
      <a href='/explore'>Explore</a>
  </button>
        </div>
      </div>
    );
  }

const TypewriterEffectSmoothDemo = () => {
    const words = [
        {
            text: "Track your",
        },
        {
            text: "portfolio",
        },
        {
            text: "with",
        },
        {
            text: "Constellation-Tracker.",
            className: "text-purple-500 dark:text-purple-500",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[5rem] mt-[40px]">
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
            </div>
        </div>
    );
}

function Home() {
    return (
        <div className='flex flex-col items-center bg-black scroller min-h-screen'>
            <div className='text-4xl'>
                <SparklesPreview/>
            </div>
         
        </div>
    )
}

export default Home



