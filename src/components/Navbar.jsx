import React from 'react';
import { useConnect, useAccount } from 'wagmi';
import { stargazerWalletWagmiConnector } from '@stardust-collective/web3-react-stargazer-connector';

function Navbar() {
  const { connect, connectors } = useConnect();
  const { address, isConnected } = useAccount();

  const doConnect = () => {
    const stargazerConnector = connectors.find(
      (connector) => connector.id === 'stargazerWallet'
    );
    if (stargazerConnector) {
      connect({ connector: stargazerConnector });
    } else {
      console.error('Stargazer connector not found');
    }
  };

  return (
    <nav className=''>
      <div className='flex flex-row mx-auto px-[40px] py-[25px] justify-between items-center mt-[0px] bg-black'>
        <div className='font-medium text-2xl text-purple-400'>
          <a href='/'>Constellation-Tracker</a>
        </div>
        <div className='flex justify-center flex-1 space-x-8 text-center'>

          <h1 className='font-semibold text-xxl text-white justify-end'>
            <a href='/explore'>Explore</a>
          </h1>
        </div>
        <div className='text-white'>
          {isConnected ? (
            `Connected: ${address}`
          ) : (
            <button
              className='bg-purple-500 px-4 py-2 rounded'
              onClick={doConnect}
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>
      <hr className='border-t-4 border-purple-600' />
    </nav>
  );
}

export default Navbar;
