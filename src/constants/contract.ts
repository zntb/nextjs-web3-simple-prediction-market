import { client } from '@/app/client';
import { getContract } from 'thirdweb';
import { sepolia } from 'thirdweb/chains';

export const contractAddress = '0x565fBDEBa409Cdf03EeC311eB96be3FDBF3e67D8';
export const tokenAddress = '0x1Cc10F13Ea489ea3184D397196c892B148e0478C';

export const contract = getContract({
  client: client,
  chain: sepolia,
  address: contractAddress,
});

export const tokenContract = getContract({
  client: client,
  chain: sepolia,
  address: tokenAddress,
});
