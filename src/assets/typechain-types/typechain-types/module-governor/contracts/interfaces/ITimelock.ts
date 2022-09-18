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

export interface ITimelockInterface extends utils.Interface {
  functions: {
    "cancel(bytes32)": FunctionFragment;
    "executeBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
    "getMinDelay()": FunctionFragment;
    "getTimestamp(bytes32)": FunctionFragment;
    "hashOperationBatch(address[],uint256[],bytes[],bytes32,bytes32)": FunctionFragment;
    "initialize(address,address,uint256)": FunctionFragment;
    "isOperation(bytes32)": FunctionFragment;
    "isOperationDone(bytes32)": FunctionFragment;
    "isOperationPending(bytes32)": FunctionFragment;
    "isOperationReady(bytes32)": FunctionFragment;
    "scheduleBatch(address[],uint256[],bytes[],bytes32,bytes32,uint256)": FunctionFragment;
    "updateDelay(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "cancel"
      | "executeBatch"
      | "getMinDelay"
      | "getTimestamp"
      | "hashOperationBatch"
      | "initialize"
      | "isOperation"
      | "isOperationDone"
      | "isOperationPending"
      | "isOperationReady"
      | "scheduleBatch"
      | "updateDelay"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "cancel", values: [BytesLike]): string;
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
    functionFragment: "updateDelay",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "cancel", data: BytesLike): Result;
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
  decodeFunctionResult(
    functionFragment: "scheduleBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateDelay",
    data: BytesLike
  ): Result;

  events: {
    "CallExecuted(bytes32,uint256,address,uint256,bytes)": EventFragment;
    "CallScheduled(bytes32,uint256,address,uint256,bytes,bytes32,uint256)": EventFragment;
    "Cancelled(bytes32)": EventFragment;
    "MinDelayChange(uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CallExecuted"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CallScheduled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Cancelled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "MinDelayChange"): EventFragment;
}

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

export interface ITimelock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITimelockInterface;

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
    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

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

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  cancel(
    id: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

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

  scheduleBatch(
    targets: string[],
    values: BigNumberish[],
    datas: BytesLike[],
    predecessor: BytesLike,
    salt: BytesLike,
    delay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  updateDelay(
    newDelay: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    cancel(id: BytesLike, overrides?: CallOverrides): Promise<void>;

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

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
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
  };

  estimateGas: {
    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

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

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    cancel(
      id: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

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

    scheduleBatch(
      targets: string[],
      values: BigNumberish[],
      datas: BytesLike[],
      predecessor: BytesLike,
      salt: BytesLike,
      delay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    updateDelay(
      newDelay: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
