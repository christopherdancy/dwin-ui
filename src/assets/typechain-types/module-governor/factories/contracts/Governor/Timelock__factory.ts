/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  Timelock,
  TimelockInterface,
} from "../../../contracts/Governor/Timelock";

const _abi = [
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "CallExecuted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "CallScheduled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "Cancelled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "oldDuration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "newDuration",
        type: "uint256",
      },
    ],
    name: "MinDelayChange",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "accessControl",
    outputs: [
      {
        internalType: "contract IDAOAccessControl",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "cancel",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "dao",
    outputs: [
      {
        internalType: "contract IDAO",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "getTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
    ],
    name: "hashOperationBatch",
    outputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_accessControl",
        type: "address",
      },
      {
        internalType: "address",
        name: "_dao",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_minDelay",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperation",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationDone",
    outputs: [
      {
        internalType: "bool",
        name: "done",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationPending",
    outputs: [
      {
        internalType: "bool",
        name: "pending",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "id",
        type: "bytes32",
      },
    ],
    name: "isOperationReady",
    outputs: [
      {
        internalType: "bool",
        name: "ready",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "minDelay",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "moduleFactory",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes[]",
        name: "datas",
        type: "bytes[]",
      },
      {
        internalType: "bytes32",
        name: "predecessor",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "delay",
        type: "uint256",
      },
    ],
    name: "scheduleBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newDelay",
        type: "uint256",
      },
    ],
    name: "updateDelay",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051611fb861004c60003960008181610678015281816106b80152818161075701528181610797015261082a0152611fb86000f3fe60806040526004361061012e5760003560e01c806352d1902d116100ab578063b1c5f4271161006f578063b1c5f42714610351578063c4d252f514610371578063c63c4e9b14610391578063d45c4435146103a7578063e38335e5146103d4578063f27a0c92146103e757600080fd5b806352d1902d146102ae578063584b153e146102d157806364d62353146102f15780638991255b146103115780638f2a0bb01461033157600080fd5b80632ab0f529116100f25780632ab0f5291461020b57806331d507501461023b5780633659cfe61461025b5780634162169f1461027b5780634f1ef2861461029b57600080fd5b806301ffc9a71461013a57806306fdde031461016f57806313007d551461019157806313bc9f20146101c95780631794bb3c146101e957600080fd5b3661013557005b600080fd5b34801561014657600080fd5b5061015a6101553660046116c7565b6103fc565b60405190151581526020015b60405180910390f35b34801561017b57600080fd5b5061018461043c565b604051610166919061171d565b34801561019d57600080fd5b506066546101b1906001600160a01b031681565b6040516001600160a01b039091168152602001610166565b3480156101d557600080fd5b5061015a6101e4366004611750565b6104ce565b3480156101f557600080fd5b50610209610204366004611785565b6104f4565b005b34801561021757600080fd5b5061015a610226366004611750565b60009081526069602052604090205460011490565b34801561024757600080fd5b5061015a610256366004611750565b610655565b34801561026757600080fd5b506102096102763660046117c1565b61066e565b34801561028757600080fd5b50606b546101b1906001600160a01b031681565b6102096102a93660046117f2565b61074d565b3480156102ba57600080fd5b506102c361081d565b604051908152602001610166565b3480156102dd57600080fd5b5061015a6102ec366004611750565b6108d0565b3480156102fd57600080fd5b5061020961030c366004611750565b6108e7565b34801561031d57600080fd5b506067546101b1906001600160a01b031681565b34801561033d57600080fd5b5061020961034c366004611900565b610a2c565b34801561035d57600080fd5b506102c361036c3660046119b2565b610bf4565b34801561037d57600080fd5b5061020961038c366004611750565b610c39565b34801561039d57600080fd5b506102c3606a5481565b3480156103b357600080fd5b506102c36103c2366004611750565b60009081526069602052604090205490565b6102096103e23660046119b2565b610d84565b3480156103f357600080fd5b50606a546102c3565b60006301ffc9a760e01b6001600160e01b03198316148061043657506001600160e01b0319821660009081526065602052604090205460ff165b92915050565b60606068805461044b90611a5b565b80601f016020809104026020016040519081016040528092919081815260200182805461047790611a5b565b80156104c45780601f10610499576101008083540402835291602001916104c4565b820191906000526020600020905b8154815290600101906020018083116104a757829003601f168201915b5050505050905090565b6000818152606960205260408120546001811180156104ed5750428111155b9392505050565b600054610100900460ff1661050f5760005460ff1615610513565b303b155b61057b5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084015b60405180910390fd5b600054610100900460ff1615801561059d576000805461ffff19166101011790555b6105cf84336040518060400160405280600f81526020016e54696d656c6f636b204d6f64756c6560881b815250610f01565b606b80546001600160a01b0319166001600160a01b038516179055606a8290556105ff630389060560e31b610f89565b606a54604080516000815260208101929092527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1801561064f576000805461ff00191690555b50505050565b60008181526069602052604081205481905b1192915050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036106b65760405162461bcd60e51b815260040161057290611a95565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166106ff600080516020611f3c833981519152546001600160a01b031690565b6001600160a01b0316146107255760405162461bcd60e51b815260040161057290611ae1565b61072e81611008565b6040805160008082526020820190925261074a918391906110a9565b50565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036107955760405162461bcd60e51b815260040161057290611a95565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166107de600080516020611f3c833981519152546001600160a01b031690565b6001600160a01b0316146108045760405162461bcd60e51b815260040161057290611ae1565b61080d82611008565b610819828260016110a9565b5050565b6000306001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016146108bd5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152608401610572565b50600080516020611f3c83398151915290565b600081815260696020526040812054600190610667565b6066546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd49061092a90339030906001600160e01b03196000351690600401611b2d565b602060405180830381865afa158015610947573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061096b9190611b5a565b6109885760405163ea8e4eb560e01b815260040160405180910390fd5b3330146109eb5760405162461bcd60e51b815260206004820152602b60248201527f54696d656c6f636b436f6e74726f6c6c65723a2063616c6c6572206d7573742060448201526a62652074696d656c6f636b60a81b6064820152608401610572565b606a5460408051918252602082018390527f11c24f4ead16507c69ac467fbd5e4eed5fb5c699626d2cc6d66421df253886d5910160405180910390a1606a55565b6066546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd490610a6f90339030906001600160e01b03196000351690600401611b2d565b602060405180830381865afa158015610a8c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ab09190611b5a565b610acd5760405163ea8e4eb560e01b815260040160405180910390fd5b878614610aec5760405162461bcd60e51b815260040161057290611b7c565b878414610b0b5760405162461bcd60e51b815260040161057290611b7c565b6000610b1d8a8a8a8a8a8a8a8a610bf4565b9050610b298183611214565b60005b89811015610be75780827f4cf4410cc57040e44862ef0f45f3dd5a5e02db8eb8add648d4b0e236f1d07dca8d8d85818110610b6957610b69611bbf565b9050602002016020810190610b7e91906117c1565b8c8c86818110610b9057610b90611bbf565b905060200201358b8b87818110610ba957610ba9611bbf565b9050602002810190610bbb9190611bd5565b8b8a604051610bcf96959493929190611c45565b60405180910390a3610be081611c98565b9050610b2c565b5050505050505050505050565b60008888888888888888604051602001610c15989796959493929190611dbc565b60405160208183030381529060405280519060200120905098975050505050505050565b6066546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd490610c7c90339030906001600160e01b03196000351690600401611b2d565b602060405180830381865afa158015610c99573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cbd9190611b5a565b610cda5760405163ea8e4eb560e01b815260040160405180910390fd5b610ce3816108d0565b610d495760405162461bcd60e51b815260206004820152603160248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e2063616044820152701b9b9bdd0818994818d85b98d95b1b1959607a1b6064820152608401610572565b6000818152606960205260408082208290555182917fbaa1eb22f2a492ba1a5fea61b8df4d27c6c8b5f3971e63bb58fa14ff72eedb7091a250565b6066546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd490610dc790339030906001600160e01b03196000351690600401611b2d565b602060405180830381865afa158015610de4573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610e089190611b5a565b610e255760405163ea8e4eb560e01b815260040160405180910390fd5b868514610e445760405162461bcd60e51b815260040161057290611b7c565b868314610e635760405162461bcd60e51b815260040161057290611b7c565b6000610e758989898989898989610bf4565b9050610e818184611303565b606b5460405163a516a5bf60e01b81526001600160a01b039091169063a516a5bf90610ebb908c908c908c908c908c908c90600401611e10565b600060405180830381600087803b158015610ed557600080fd5b505af1158015610ee9573d6000803e3d6000fd5b50505050610ef68161139e565b505050505050505050565b600054610100900460ff16610f285760405162461bcd60e51b815260040161057290611e59565b606680546001600160a01b038086166001600160a01b03199283161790925560678054928516929091169190911790558051610f6b90606890602084019061162e565b50610f746113d7565b610f84630afed1ab60e11b610f89565b505050565b6001600160e01b03198082169003610fe35760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e74657266616365206964000000006044820152606401610572565b6001600160e01b0319166000908152606560205260409020805460ff19166001179055565b6066546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd49061104b90339030906001600160e01b03196000351690600401611b2d565b602060405180830381865afa158015611068573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061108c9190611b5a565b61074a5760405163ea8e4eb560e01b815260040160405180910390fd5b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156110dc57610f8483611400565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa925050508015611136575060408051601f3d908101601f1916820190925261113391810190611ea4565b60015b6111995760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b6064820152608401610572565b600080516020611f3c83398151915281146112085760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b6064820152608401610572565b50610f8483838361149c565b61121d82610655565b156112825760405162461bcd60e51b815260206004820152602f60248201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e20616c60448201526e1c9958591e481cd8da19591d5b1959608a1b6064820152608401610572565b606a548110156112e35760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a20696e73756666696369656e746044820152652064656c617960d01b6064820152608401610572565b6112ed8142611ebd565b6000928352606960205260409092209190915550565b61130c826104ce565b6113285760405162461bcd60e51b815260040161057290611ed5565b80158061134357506000818152606960205260409020546001145b6108195760405162461bcd60e51b815260206004820152602660248201527f54696d656c6f636b436f6e74726f6c6c65723a206d697373696e6720646570656044820152656e64656e637960d01b6064820152608401610572565b6113a7816104ce565b6113c35760405162461bcd60e51b815260040161057290611ed5565b600090815260696020526040902060019055565b600054610100900460ff166113fe5760405162461bcd60e51b815260040161057290611e59565b565b6001600160a01b0381163b61146d5760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610572565b600080516020611f3c83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6114a5836114c1565b6000825111806114b25750805b15610f845761064f8383611501565b6114ca81611400565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b6115695760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610572565b600080846001600160a01b0316846040516115849190611f1f565b600060405180830381855af49150503d80600081146115bf576040519150601f19603f3d011682016040523d82523d6000602084013e6115c4565b606091505b50915091506115ec8282604051806060016040528060278152602001611f5c602791396115f5565b95945050505050565b606083156116045750816104ed565b8251156116145782518084602001fd5b8160405162461bcd60e51b8152600401610572919061171d565b82805461163a90611a5b565b90600052602060002090601f01602090048101928261165c57600085556116a2565b82601f1061167557805160ff19168380011785556116a2565b828001600101855582156116a2579182015b828111156116a2578251825591602001919060010190611687565b506116ae9291506116b2565b5090565b5b808211156116ae57600081556001016116b3565b6000602082840312156116d957600080fd5b81356001600160e01b0319811681146104ed57600080fd5b60005b8381101561170c5781810151838201526020016116f4565b8381111561064f5750506000910152565b602081526000825180602084015261173c8160408501602087016116f1565b601f01601f19169190910160400192915050565b60006020828403121561176257600080fd5b5035919050565b80356001600160a01b038116811461178057600080fd5b919050565b60008060006060848603121561179a57600080fd5b6117a384611769565b92506117b160208501611769565b9150604084013590509250925092565b6000602082840312156117d357600080fd5b6104ed82611769565b634e487b7160e01b600052604160045260246000fd5b6000806040838503121561180557600080fd5b61180e83611769565b9150602083013567ffffffffffffffff8082111561182b57600080fd5b818501915085601f83011261183f57600080fd5b813581811115611851576118516117dc565b604051601f8201601f19908116603f01168101908382118183101715611879576118796117dc565b8160405282815288602084870101111561189257600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008083601f8401126118c657600080fd5b50813567ffffffffffffffff8111156118de57600080fd5b6020830191508360208260051b85010111156118f957600080fd5b9250929050565b600080600080600080600080600060c08a8c03121561191e57600080fd5b893567ffffffffffffffff8082111561193657600080fd5b6119428d838e016118b4565b909b50995060208c013591508082111561195b57600080fd5b6119678d838e016118b4565b909950975060408c013591508082111561198057600080fd5b5061198d8c828d016118b4565b9a9d999c50979a969997986060880135976080810135975060a0013595509350505050565b60008060008060008060008060a0898b0312156119ce57600080fd5b883567ffffffffffffffff808211156119e657600080fd5b6119f28c838d016118b4565b909a50985060208b0135915080821115611a0b57600080fd5b611a178c838d016118b4565b909850965060408b0135915080821115611a3057600080fd5b50611a3d8b828c016118b4565b999c989b509699959896976060870135966080013595509350505050565b600181811c90821680611a6f57607f821691505b602082108103611a8f57634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b600060208284031215611b6c57600080fd5b815180151581146104ed57600080fd5b60208082526023908201527f54696d656c6f636b436f6e74726f6c6c65723a206c656e677468206d69736d616040820152620e8c6d60eb1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b6000808335601e19843603018112611bec57600080fd5b83018035915067ffffffffffffffff821115611c0757600080fd5b6020019150368190038213156118f957600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b038716815285602082015260a060408201526000611c6d60a083018688611c1c565b60608301949094525060800152949350505050565b634e487b7160e01b600052601160045260246000fd5b600060018201611caa57611caa611c82565b5060010190565b8183526000602080850194508260005b85811015611ced576001600160a01b03611cda83611769565b1687529582019590820190600101611cc1565b509495945050505050565b81835260006001600160fb1b03831115611d1157600080fd5b8260051b8083602087013760009401602001938452509192915050565b818352600060208085019450848460051b86018460005b87811015611daf5783830389528135601e19883603018112611d6657600080fd5b8701803567ffffffffffffffff811115611d7f57600080fd5b803603891315611d8e57600080fd5b611d9b8582898501611c1c565b9a87019a9450505090840190600101611d45565b5090979650505050505050565b60a081526000611dd060a083018a8c611cb1565b8281036020840152611de381898b611cf8565b90508281036040840152611df8818789611d2e565b60608401959095525050608001529695505050505050565b606081526000611e2460608301888a611cb1565b8281036020840152611e37818789611cf8565b90508281036040840152611e4c818587611d2e565b9998505050505050505050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600060208284031215611eb657600080fd5b5051919050565b60008219821115611ed057611ed0611c82565b500190565b6020808252602a908201527f54696d656c6f636b436f6e74726f6c6c65723a206f7065726174696f6e206973604082015269206e6f7420726561647960b01b606082015260800190565b60008251611f318184602087016116f1565b919091019291505056fe360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220b2aac095414e6afa92fb7089fa24a563e372d5e1732262dd2dce99a07ee0324b64736f6c634300080d0033";

type TimelockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TimelockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Timelock__factory extends ContractFactory {
  constructor(...args: TimelockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Timelock> {
    return super.deploy(overrides || {}) as Promise<Timelock>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Timelock {
    return super.attach(address) as Timelock;
  }
  override connect(signer: Signer): Timelock__factory {
    return super.connect(signer) as Timelock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TimelockInterface {
    return new utils.Interface(_abi) as TimelockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Timelock {
    return new Contract(address, _abi, signerOrProvider) as Timelock;
  }
}