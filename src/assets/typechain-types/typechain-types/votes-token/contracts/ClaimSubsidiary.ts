/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../common";

export interface ClaimSubsidiaryInterface extends utils.Interface {
  functions: {
    "accessControl()": FunctionFragment;
    "cToken()": FunctionFragment;
    "calculateClaimAmount(address)": FunctionFragment;
    "claimSnap(address)": FunctionFragment;
    "initialize(address,address,address,address,uint256)": FunctionFragment;
    "moduleFactory()": FunctionFragment;
    "name()": FunctionFragment;
    "pAllocation()": FunctionFragment;
    "pToken()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "snapId()": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accessControl"
      | "cToken"
      | "calculateClaimAmount"
      | "claimSnap"
      | "initialize"
      | "moduleFactory"
      | "name"
      | "pAllocation"
      | "pToken"
      | "proxiableUUID"
      | "snapId"
      | "supportsInterface"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accessControl",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculateClaimAmount",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "claimSnap", values: [string]): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "moduleFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pAllocation",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "pToken", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "snapId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "upgradeTo", values: [string]): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [string, BytesLike]
  ): string;

  decodeFunctionResult(
    functionFragment: "accessControl",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculateClaimAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claimSnap", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moduleFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pAllocation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "pToken", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "snapId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "SnapAdded(address,address,uint256)": EventFragment;
    "SnapClaimed(address,address,address,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SnapAdded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SnapClaimed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface SnapAddedEventObject {
  pToken: string;
  cToken: string;
  pAllocation: BigNumber;
}
export type SnapAddedEvent = TypedEvent<
  [string, string, BigNumber],
  SnapAddedEventObject
>;

export type SnapAddedEventFilter = TypedEventFilter<SnapAddedEvent>;

export interface SnapClaimedEventObject {
  pToken: string;
  cToken: string;
  claimer: string;
  amount: BigNumber;
}
export type SnapClaimedEvent = TypedEvent<
  [string, string, string, BigNumber],
  SnapClaimedEventObject
>;

export type SnapClaimedEventFilter = TypedEventFilter<SnapClaimedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface ClaimSubsidiary extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ClaimSubsidiaryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    accessControl(overrides?: CallOverrides): Promise<[string]>;

    cToken(overrides?: CallOverrides): Promise<[string]>;

    calculateClaimAmount(
      claimer: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { cTokenAllocation: BigNumber }>;

    claimSnap(
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _metaFactory: string,
      _accessControl: string,
      _pToken: string,
      _cToken: string,
      _pAllocation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    moduleFactory(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    pAllocation(overrides?: CallOverrides): Promise<[BigNumber]>;

    pToken(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    snapId(overrides?: CallOverrides): Promise<[BigNumber]>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  accessControl(overrides?: CallOverrides): Promise<string>;

  cToken(overrides?: CallOverrides): Promise<string>;

  calculateClaimAmount(
    claimer: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claimSnap(
    claimer: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _metaFactory: string,
    _accessControl: string,
    _pToken: string,
    _cToken: string,
    _pAllocation: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  moduleFactory(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  pAllocation(overrides?: CallOverrides): Promise<BigNumber>;

  pToken(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  snapId(overrides?: CallOverrides): Promise<BigNumber>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  upgradeTo(
    newImplementation: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: string,
    data: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    accessControl(overrides?: CallOverrides): Promise<string>;

    cToken(overrides?: CallOverrides): Promise<string>;

    calculateClaimAmount(
      claimer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimSnap(claimer: string, overrides?: CallOverrides): Promise<void>;

    initialize(
      _metaFactory: string,
      _accessControl: string,
      _pToken: string,
      _cToken: string,
      _pAllocation: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    moduleFactory(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    pAllocation(overrides?: CallOverrides): Promise<BigNumber>;

    pToken(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    snapId(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    upgradeTo(
      newImplementation: string,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: string | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(beacon?: string | null): BeaconUpgradedEventFilter;

    "SnapAdded(address,address,uint256)"(
      pToken?: null,
      cToken?: null,
      pAllocation?: null
    ): SnapAddedEventFilter;
    SnapAdded(
      pToken?: null,
      cToken?: null,
      pAllocation?: null
    ): SnapAddedEventFilter;

    "SnapClaimed(address,address,address,uint256)"(
      pToken?: string | null,
      cToken?: string | null,
      claimer?: string | null,
      amount?: null
    ): SnapClaimedEventFilter;
    SnapClaimed(
      pToken?: string | null,
      cToken?: string | null,
      claimer?: string | null,
      amount?: null
    ): SnapClaimedEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    accessControl(overrides?: CallOverrides): Promise<BigNumber>;

    cToken(overrides?: CallOverrides): Promise<BigNumber>;

    calculateClaimAmount(
      claimer: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claimSnap(
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    initialize(
      _metaFactory: string,
      _accessControl: string,
      _pToken: string,
      _cToken: string,
      _pAllocation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    moduleFactory(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    pAllocation(overrides?: CallOverrides): Promise<BigNumber>;

    pToken(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    snapId(overrides?: CallOverrides): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    accessControl(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    cToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculateClaimAmount(
      claimer: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claimSnap(
      claimer: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _metaFactory: string,
      _accessControl: string,
      _pToken: string,
      _cToken: string,
      _pAllocation: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    moduleFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pAllocation(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    snapId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: string,
      data: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
