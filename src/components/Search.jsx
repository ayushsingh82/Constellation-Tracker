import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { FaCopy } from 'react-icons/fa';

function Search(props) {
  const [copied, setCopied] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [domains, setDomains] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Hardcoded data for vitalik.eth
  const hardcodedDomains = {
    "vitalik.eth": {
      resolvedAddress: {
        id: "0xd8da6bf26964af9d7eed9e03e53415d37aa96045",
      }
    }
  };

  const getDomains = () => {
    const lowerCaseInput = inputValue.toLowerCase();

    if (hardcodedDomains[lowerCaseInput]) {
      setDomains([hardcodedDomains[lowerCaseInput]]);
      props.callback(hardcodedDomains[lowerCaseInput].resolvedAddress.id);
      setErrorMessage('');
    } else {
      setDomains([]);
      setErrorMessage('No results found for the given name.');
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim() === "") {
      setErrorMessage('Please enter a valid name.');
      return;
    }
    getDomains();
  };

  const handleCopy = (text) => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <>
      <h1 className="text-center text-2xl font-medium mt-[20px] text-black">Enter name.eth to track portfolio</h1>
      
      <div className='mt-[15px] flex justify-between rounded-xl border-solid border-2 border-transparent h-[60px] p-[10px] w-[400px] mx-auto bg-slate-300 shadow-2xl
        bg-gradient-to-l from-purple-300 via-purple-300 to-purple-400'>
        
        <div className='w-[400px] border border-transparent hover:border-slate-800 mr-[10px] rounded-xl h-[40px] flex hover:border-solid hover:border-2 font-medium text-lg px-[10px] '>

          <input
            className='h-[40px] w-[300px] overflow-hidden focus:outline-none bg-transparent'
            type='text'
            id='myInput'
            value={inputValue}
            placeholder='Type- name.eth'
            onChange={handleInputChange}
          />
          <div className='flex items-center mr-[5px] text-slate-800'>
            <button onClick={handleSearch}>
              <FaSearch size={30} />
            </button>
          </div>
        </div>
      </div>

      {errorMessage && (
        <div className='text-red-500 text-center mt-4'>{errorMessage}</div>
      )}

      <div className='border border-transparent mt-[40px] flex flex-col justify-center shadow-sm '>
        <div className=' mt-[40px] text-2xl font-medium text-slate-800 items-center justify-center flex'><span className='shadow-xl'>Account</span></div>
        <div className='text-slate-800 text-lg font-semibold mt-[5px] mx-auto items-center h-[40px] w-[900px] bg-purple-300 border rounded-xl border-transparent
         hover:scale-110 transition-all duration-500 ease-in-out
      bg-gradient-to-l from-purple-300 via-purple-300 to-purple-400'>
          {domains.length > 0 && domains.map((domain, index) => (
            <div key={index}>{domain.resolvedAddress.id}
              <CopyToClipboard onCopy={() => handleCopy(domain.resolvedAddress.id)} text={domain.resolvedAddress.id}>
                <button className='ml-[50px] '><FaCopy /></button>
              </CopyToClipboard>
              {copied ? <span className=''>Copied</span> : null}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Search;
