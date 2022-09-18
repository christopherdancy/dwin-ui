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
} from "../../common";

export interface TimelockInterface extends utils.Interface {
  functions: {
    "accessControl()": FunctionFragment;
    "cancel(bytes32)": FunctionFragment;
    "dao()": FunctionFragment;
    "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
    "getMinDelay()": FunctionFragment;
    "getTimestamp(bytes32)": FunctionFragment;
    "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
    "initialize(address,address,uint256)": FunctionFragment;
    "isOperation(bytes32)": FunctionFragment;
    "isOperationDone(bytes32)": FunctionFragment;
    "isOperationPending(bytes32)": FunctionFragment;
    "isOperationReady(bytes32)": FunctionFragment;
    "minDelay()": FunctionFragment;
    "moduleFactory()": FunctionFragment;
    "name()": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)": FunctionFragment;
    "supportsInterface(bytes4)": FunctionFragment;
    "updateDelay(uint256)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "accessControl"
      | "cancel"
      | "dao"
      | "executeBatch"
      | "getMinDelay"
      | "getTimestamp"
      | "hashOperationBatch"
      | "initialize"
      | "isOperation"
      | "isOperationDone"
      | "isOperationPending"
      | "isOperationReady"
      | "minDelay"
      | "moduleFactory"
      | "name"
      | "proxiableUUID"
      | "scheduleBatch"
      | "supportsInterface"
      | "updateDelay"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "accessControl",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "dao", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [string[], BigNumberish[], BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "getMinDelay",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTimestamp",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "hashOperationBatch",
    values: [string[], BigNumberish[], BytesLike[], BytesLike, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperation",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationDone",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationPending",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "isOperationReady",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "minDelay", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "moduleFactory",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "scheduleBatch",
    values: [
      string[],
      BigNumberish[],
      BytesLike[],
      BytesLike,
      BytesLike,
      BigNumberish
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "supportsInterface",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "updateDelay",
    values: [BigNumberish]
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
  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dao", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getMinDelay",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTimestamp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashOperationBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isOperation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationDone",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationPending",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isOperationReady",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minDelay", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "moduleFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "scheduleBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "supportsInterface",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDelay",
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
    "CallExecuted(bytes32,uint256,address,uint256,bytes)": EventFragment;
    "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": EventFragment;
    "Cancelled(bytes32)": EventFragment;
    "MinDelayChange(uint256,uint256)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallScheduled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Cancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinDelayChange"): EventFragment;
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

export interface CallExecutedEventObject {
  id: string;
  index: BigNumber;
  target: string;
  value: BigNumber;
  data: string;
}
export type CallExecutedEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string],
  CallExecutedEventObject
>;

export type CallExecutedEventFilter = TypedEventFilter<CallExecutedEvent>;

export interface CallScheduledEventObject {
  id: string;
  index: BigNumber;
  target: string;
  value: BigNumber;
  data: string;
  predecessor: string;
  delay: BigNumber;
}
export type CallScheduledEvent = TypedEvent<
  [string, BigNumber, string, BigNumber, string, string, BigNumber],
  CallScheduledEventObject
>;

export type CallScheduledEventFilter = TypedEventFilter<CallScheduledEvent>;

export interface CancelledEventObject {
  id: string;
}
export type CancelledEvent = TypedEvent<[string], CancelledEventObject>;

export type CancelledEventFilter = TypedEventFilter<CancelledEvent>;

export interface MinDelayChangeEventObject {
  oldDuration: BigNumber;
  newDuration: BigNumber;
}
export type MinDelayChangeEvent = TypedEvent<
  [BigNumber, BigNumber],
  MinDelayChangeEventObject
>;

export type MinDelayChangeEventFilter = TypedEventFilter<MinDelayChangeEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface Timelock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TimelockInterface;

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

    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    dao(overrides?: CallOverrides): Promise<[string]>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getMinDelay(
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { duration: BigNumber }>;

    getTimestamp(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { timestamp: BigNumber }>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string] & { hash: string }>;

    initialize(
      _accessControl: string,
      _dao: string,
      _minDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isOperation(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { pending: boolean }>;

    isOperationDone(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { done: boolean }>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { pending: boolean }>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean] & { ready: boolean }>;

    minDelay(overrides?: CallOverrides): Promise<[BigNumber]>;

    moduleFactory(overrides?: CallOverrides): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

  cancel(
    id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  dao(overrides?: CallOverrides): Promise<string>;

  executeBatch(
    targets: string[],
    values: BigNumberish[],
    datas: BytesLike[],
    predecessor: BytesLike,
    salt: BytesLike,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;

  getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

  hashOperationBatch(
    targets: string[],
    values: BigNumberish[],
    datas: BytesLike[],
    predecessor: BytesLike,
    salt: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  initialize(
    _accessControl: string,
    _dao: string,
    _minDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isOperation(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isOperationPending(
    id: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  isOperationReady(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  minDelay(overrides?: CallOverrides): Promise<BigNumber>;

  moduleFactory(overrides?: CallOverrides): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  scheduleBatch(
    targets: string[],
    values: BigNumberish[],
    datas: BytesLike[],
    predecessor: BytesLike,
    salt: BytesLike,
    delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  updateDelay(
    newDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

    cancel(id: BytesLike, overrides?: CallOverrides): Promise<void>;

    dao(overrides?: CallOverrides): Promise<string>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    initialize(
      _accessControl: string,
      _dao: string,
      _minDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isOperation(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isOperationDone(id: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    minDelay(overrides?: CallOverrides): Promise<BigNumber>;

    moduleFactory(overrides?: CallOverrides): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

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

    "CallExecuted(bytes32,uint256,address,uint256,bytes)"(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null
    ): CallExecutedEventFilter;
    CallExecuted(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null
    ): CallExecutedEventFilter;

    "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)"(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null,
      predecessor?: null,
      delay?: null
    ): CallScheduledEventFilter;
    CallScheduled(
      id?: BytesLike | null,
      index?: BigNumberish | null,
      target?: null,
      value?: null,
      data?: null,
      predecessor?: null,
      delay?: null
    ): CallScheduledEventFilter;

    "Cancelled(bytes32)"(id?: BytesLike | null): CancelledEventFilter;
    Cancelled(id?: BytesLike | null): CancelledEventFilter;

    "MinDelayChange(uint256,uint256)"(
      oldDuration?: null,
      newDuration?: null
    ): MinDelayChangeEventFilter;
    MinDelayChange(
      oldDuration?: null,
      newDuration?: null
    ): MinDelayChangeEventFilter;

    "Upgraded(address)"(implementation?: string | null): UpgradedEventFilter;
    Upgraded(implementation?: string | null): UpgradedEventFilter;
  };

  estimateGas: {
    accessControl(overrides?: CallOverrides): Promise<BigNumber>;

    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    dao(overrides?: CallOverrides): Promise<BigNumber>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getMinDelay(overrides?: CallOverrides): Promise<BigNumber>;

    getTimestamp(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _accessControl: string,
      _dao: string,
      _minDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isOperation(id: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    isOperationDone(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minDelay(overrides?: CallOverrides): Promise<BigNumber>;

    moduleFactory(overrides?: CallOverrides): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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

    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    dao(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    executeBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getMinDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTimestamp(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hashOperationBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _accessControl: string,
      _dao: string,
      _minDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isOperation(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperationDone(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperationPending(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isOperationReady(
      id: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minDelay(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    moduleFactory(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
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
