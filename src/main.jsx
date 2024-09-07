import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider,createRoutesFromElements} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Home from './components/Home.jsx'
import Navbar from './components/Navbar.jsx'

// import '@rainbow-me/rainbowkit/styles.css';

import {stargazerWalletWagmiConnector} from '@stardust-collective/web3-react-stargazer-connector';
import {  polygon } from 'wagmi/chains'
import { createConfig, http } from 'wagmi'

const stargazerConnector = stargazerWalletWagmiConnector();

// declare module 'wagmi' {
//   interface Register {
//     config: typeof config
//   }
// }

const config = createConfig({
  chains: [ polygon],
  transports: {
  
    [polygon.id]: http('https://rpc-mainnet.matic.network'),
  },
  connectors: [
    stargazerWalletWagmiConnector({}),
    // ...other wallet connectors
  ],
})

// import {
//   getDefaultConfig,
//   RainbowKitProvider,
// } from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
// import {
//   sepolia,
//   optimismGoerli,
//   arbitrumGoerli,
//   polygonMumbai,
// } from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
    <Route path='/' element={<Home/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <WagmiProvider config={config}>
  <QueryClientProvider client={queryClient}>
   <Navbar/>
   <RouterProvider router={router}/>
   </QueryClientProvider>
   </WagmiProvider>
  </React.StrictMode>,
)


