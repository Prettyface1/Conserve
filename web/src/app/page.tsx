'use client';

import { AppConfig, UserSession, showConnect } from '@stacks/connect';
import { useState, useEffect } from 'react';

export default function Home() {
  const [userSession] = useState(new UserSession({ appConfig: new AppConfig(['store_write', 'publish_data']) }));
  const [userData, setUserData] = useState<any>(null);

  useEffect(() => {
    if (userSession.isUserSignedIn()) {
      setUserData(userSession.loadUserData());
    }
  }, [userSession]);

  const handleConnect = () => {
    showConnect({
      appDetails: {
        name: 'Conserve',
        icon: 'https://placehold.co/60x60',
      },
      redirectTo: '/',
      onFinish: () => {
        window.location.reload();
      },
      userSession,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Conservation Fund
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          {userData ? (
            <button
              onClick={() => {
                userSession.signUserOut();
                setUserData(null);
              }}
              className="pointer-events-auto flex place-items-center gap-2 p-8 lg:p-0 bg-red-500 text-white rounded px-4 py-2"
            >
              Disconnect {userData.profile.stxAddress.testnet}
            </button>
          ) : (
            <button
              onClick={handleConnect}
              className="pointer-events-auto flex place-items-center gap-2 p-8 lg:p-0 bg-blue-500 text-white rounded px-4 py-2"
            >
              Connect Wallet
            </button>
          )}
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-2xl font-bold">Features</h2>
        <ul className="list-disc mt-4">
            <li>Secure Deposit via Smart Contract</li>
            <li>Transparent Fund Management</li>
            <li>Min Donation: {1} STX</li>
        </ul>
      </div>
    </main>
  );
}
