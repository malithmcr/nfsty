import Head from "next/head";
import { ethers } from "ethers";
import { useEffect, useState } from "react";
import Web3Modal from "web3modal"
import axios from "axios";
import {nftaddress, nftmarketaddress } from '../../config'

import NFT from '../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
export default function Home() {
  const [nfts, setNfts] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')
  useEffect(() => {
    loadNFTs()
  }, [])
  return (
    <div>
      <Head>
        <title>nfsty</title>
        <meta
          name="description"
          content="Simple NFT Marketplace on Ethereum

"
        />
      </Head>

      <main>Welcome home</main>

      <footer>Built with Love</footer>
    </div>
  );
}
