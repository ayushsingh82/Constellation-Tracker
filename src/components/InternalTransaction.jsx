import React, { useState, useEffect } from 'react';

function Internal() {
  const [txns, setTxns] = useState([]);
  const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045"; // Hardcoded address

  useEffect(() => {
    const getData2 = async () => {
      try {
        const response = await fetch(
          `https://api.etherscan.io/api?module=account&action=txlistinternal&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=XRSB1DE9127BU2S22MC5ZXEWCFZXZKWBD8`
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log('API Response:', data);
        if (data.result === 'Max rate limit reached') {
          console.log("Rate limit reached");
          return;
        }

        setTxns(data.result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    getData2();
  }, []);

  return (
    <div className='flex flex-col justify-center mt-[40px] '>
      <div>
      <h2 className='text-2xl  b mx-auto w-[300px] border rounded-lg py-[5px] border-transparent
      bg-purple-500 text-black font-semibold px-[10px]
      hover:scale-110 transition-all duration-500 ease-in-out'>
      Internal Transactions
    </h2>
      </div>

      <div className='mt-[40px]'>
        {txns.length > 0 ? (
          <table className="min-w-full text-left text-sm whitespace-nowrap">
            <thead className="uppercase tracking-wider border-b-2 bg-slate-300 border-t">
              <tr>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  Block Number
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  TimeStamp
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  Hash
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  From
                </th>
                <th scope="col" className="px-6 py-4 border-x text-black bg-gray-300">
                  To
                </th>
              </tr>
            </thead>
            <tbody>
              {txns.map((txn) => (
                <tr key={txn.hash} className="border-b border-neutral-600 bg-gradient-to-r from-gray-100 to-gray-300 text-black">
                  <td className="px-6 py-4 border-x font-medium">{txn.blockNumber}</td>
                  <td className="px-6 py-4 border-x font-medium">{txn.timeStamp}</td>
                  <td className="px-6 py-4 border-x font-medium">{txn.hash}</td>
                  <td className="px-6 py-4 border-x font-medium">{txn.from}</td>
                  <td className="px-6 py-4 border-x font-medium">{txn.to}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className='text-slate-800 mt-[30px] font-medium text-2xl flex flex-col justify-center'>
            OOPS! No transactions available.
          </p>
        )}
      </div>
    </div>
  );
}

export default Internal;
