/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IClaimFactory,
  IClaimFactoryInterface,
} from "../../../contracts/interfaces/IClaimFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "subsidiaryAddress",
        type: "address",
      },
    ],
    name: "SubsidiaryCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        internalType: "bytes[]",
        name: "data",
        type: "bytes[]",
      },
    ],
    name: "create",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class IClaimFactory__factory {
  static readonly abi = _abi;
  static createInterface(): IClaimFactoryInterface {
    return new utils.Interface(_abi) as IClaimFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IClaimFactory {
    return new Contract(address, _abi, signerOrProvider) as IClaimFactory;
  }
}
