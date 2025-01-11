import { NextResponse } from 'next/server';
import { ethers } from 'ethers';
import tokenABI from '@/constants/tokenAbi.json';

// Environment variables
const RPC_URL = process.env.RPC_URL!;
const PRIVATE_KEY = process.env.PRIVATE_KEY!;
const TOKEN_ADDRESS = process.env.TOKEN_ADDRESS!;

if (!RPC_URL || !PRIVATE_KEY || !TOKEN_ADDRESS) {
  throw new Error('Missing required environment variables in .env file');
}

// Create a provider and wallet
const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

// Helper function to fetch ABI from Etherscan
// async function fetchTokenABI(contractAddress: string) {
//   const url = `https://api.etherscan.io/api?module=contract&action=getabi&address=${contractAddress}&apikey=${ETHERSCAN_API_KEY}`;

//   const response = await fetch(url);
//   const data = await response.json();

//   if (data.status === '1') {
//     return JSON.parse(data.result);
//   } else {
//     throw new Error('Failed to fetch ABI from Etherscan');
//   }
// }

export async function POST(req: Request) {
  const body = await req.json();
  const { address } = body;

  if (!ethers.isAddress(address)) {
    return NextResponse.json(
      { error: 'Invalid Ethereum address' },
      { status: 400 },
    );
  }

  try {
    // Create a contract instance
    const tokenContract = new ethers.Contract(TOKEN_ADDRESS, tokenABI, wallet);

    // Amount of tokens to mint (e.g., 100 tokens, considering 18 decimals)
    const amount = ethers.parseUnits('100', 18);

    // Call the mintTo function
    const tx = await tokenContract.mintTo(address, amount);

    // Wait for the transaction to be mined
    const receipt = await tx.wait();

    return NextResponse.json({
      message: 'Tokens successfully claimed!',
      transactionHash: receipt.transactionHash,
    });
  } catch (error: unknown) {
    console.error('Error claiming tokens:', error);
    if (error instanceof Error) {
      return NextResponse.json(
        {
          error: 'Failed to claim tokens',
          details: error.message,
        },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        error: 'Failed to claim tokens',
        details: 'An unknown error occurred',
      },
      { status: 500 },
    );
  }
}
