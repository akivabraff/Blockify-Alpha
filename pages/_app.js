import Head from 'next/head';

import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/main.css';

import { mainnet, arbitrum } from '@wagmi/core/chains';
import { createWeb3Modal, defaultWagmiConfig, useWeb3Modal } from '@web3modal/wagmi/react'
import { WagmiConfig } from 'wagmi';

// 1. Define constants
const projectId = '10dd96df3c1b27c7c028d125071be835';


// 2. Create wagmiConfig
const metadata = {
  name: 'Web3Modal',
  description: 'Web3Modal Example',
  url: 'https://web3modal.com',
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
};

const chains = [mainnet, arbitrum];
const wagmiConfig = defaultWagmiConfig({ chains, projectId, metadata });

createWeb3Modal({ wagmiConfig, projectId, chains });

const MyApp = ({ Component, pageProps }) => (
  <WagmiConfig config={wagmiConfig}>
    <Head>
      <title>Metaversus</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
    </Head>
    <Component {...pageProps} />
  </WagmiConfig>
);

export default MyApp;
