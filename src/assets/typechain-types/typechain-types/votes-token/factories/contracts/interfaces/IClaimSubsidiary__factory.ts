/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IClaimSubsidiary,
  IClaimSubsidiaryInterface,
} from "../../../contracts/interfaces/IClaimSubsidiary";

const _abi = [
  {
    inputs: [],
    name: "AllocationClaimed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoAllocation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "pToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "pAllocation",
        type: "uint256",
      },
    ],
    name: "SnapAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "pToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "cToken",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "SnapClaimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "claimer",
        type: "address",
      },
    ],
    name: "calculateClaimAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "cTokenAllocation",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "claimer",
        type: "address",
      },
    ],
    name: "claimSnap",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_metaFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_accessControl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_pToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_cToken",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_pAllocation",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IClaimSubsidiary__factory {
  static readonly abi = _abi;
  static createInterface(): IClaimSubsidiaryInterface {
    return new utils.Interface(_abi) as IClaimSubsidiaryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClaimSubsidiary {
    return new Contract(address, _abi, signerOrProvider) as IClaimSubsidiary;
  }
}
