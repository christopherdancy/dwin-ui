import { BigNumber } from 'ethers';

export enum TokenEventType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAW = 'WITHDRAW',
}

export enum ProposalEventType {
  CREATED = 'CREATED',
}

export interface TokenEvent {
  transactionHash: string;
  blockNumber: number;
  eventType: TokenEventType;
}

export interface ProposalEvent {
  transactionHash: string;
  blockNumber: number;
  eventType: ProposalEventType;
}

export interface TokenDepositEvent extends TokenEvent {
  address: string;
  amount: BigNumber;
}

export interface TokenWithdrawEvent extends TokenEvent {
  addresses: string[];
  amount: BigNumber;
}
export interface ERC721TokenEvent extends TokenEvent {
  contractAddresses: string[];
  tokenIds: BigNumber[];
}
export interface ERC20TokenEvent extends TokenEvent {
  contractAddresses: string[];
  amounts: BigNumber[];
}

export interface ProposalCreatedEvent extends ProposalEvent {
  id: BigNumber;
  description: string;
}

export interface TreasuryAssetFungible {
  name: string;
  symbol: string;
  decimals: number;
  contractAddress: string;
  totalAmount: BigNumber;
  formatedTotal: string;
}

export interface TreasuryAssetNonFungible {
  name: string;
  symbol: string;
  tokenId: BigNumber;
  contractAddress: string;
  tokenURI: string;
}
