/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  DAO,
  DAOInterface,
} from "../../../../@fractal-framework/core-contracts/contracts/DAO";

const _abi = [
  {
    inputs: [],
    name: "NotAuthorized",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unauthorized",
    type: "error",
  },
  {
    inputs: [],
    name: "UnequalArrayLengths",
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
        indexed: false,
        internalType: "address[]",
        name: "targets",
        type: "address[]",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        indexed: false,
        internalType: "bytes[]",
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "Executed",
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
        name: "calldatas",
        type: "bytes[]",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
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
        name: "_moduleFactory",
        type: "address",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
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
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b5060805161155a61004c600039600081816102ae015281816102f7015281816104a4015281816104e40152610577015261155a6000f3fe6080604052600436106100865760003560e01c80634571e3a6116100595780634571e3a61461013c5780634f1ef2861461015c57806352d1902d1461016f5780638991255b14610192578063a516a5bf146101b257600080fd5b806301ffc9a71461008b57806306fdde03146100c057806313007d55146100e25780633659cfe61461011a575b600080fd5b34801561009757600080fd5b506100ab6100a6366004610e47565b6101d2565b60405190151581526020015b60405180910390f35b3480156100cc57600080fd5b506100d5610212565b6040516100b79190610e9d565b3480156100ee57600080fd5b50606654610102906001600160a01b031681565b6040516001600160a01b0390911681526020016100b7565b34801561012657600080fd5b5061013a610135366004610eec565b6102a4565b005b34801561014857600080fd5b5061013a610157366004610f07565b61038c565b61013a61016a366004610fab565b61049a565b34801561017b57600080fd5b5061018461056a565b6040519081526020016100b7565b34801561019e57600080fd5b50606754610102906001600160a01b031681565b3480156101be57600080fd5b5061013a6101cd3660046110b9565b61061d565b60006301ffc9a760e01b6001600160e01b03198316148061020c57506001600160e01b0319821660009081526065602052604090205460ff165b92915050565b60606068805461022190611153565b80601f016020809104026020016040519081016040528092919081815260200182805461024d90611153565b801561029a5780601f1061026f5761010080835404028352916020019161029a565b820191906000526020600020905b81548152906001019060200180831161027d57829003601f168201915b5050505050905090565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036102f55760405162461bcd60e51b81526004016102ec9061118d565b60405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661033e6000805160206114de833981519152546001600160a01b031690565b6001600160a01b0316146103645760405162461bcd60e51b81526004016102ec906111d9565b61036d8161083b565b60408051600080825260208201909252610389918391906108dc565b50565b600054610100900460ff166103a75760005460ff16156103ab565b303b155b61040e5760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016102ec565b600054610100900460ff16158015610430576000805461ffff19166101011790555b610471858585858080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610a4c92505050565b61048163e067461960e01b610acb565b8015610493576000805461ff00191690555b5050505050565b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001630036104e25760405162461bcd60e51b81526004016102ec9061118d565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031661052b6000805160206114de833981519152546001600160a01b031690565b6001600160a01b0316146105515760405162461bcd60e51b81526004016102ec906111d9565b61055a8261083b565b610566828260016108dc565b5050565b6000306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461060a5760405162461bcd60e51b815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c000000000000000060648201526084016102ec565b506000805160206114de83398151915290565b6066546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd49061066090339030906001600160e01b03196000351690600401611225565b602060405180830381865afa15801561067d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106a19190611252565b6106be5760405163ea8e4eb560e01b815260040160405180910390fd5b84831415806106cd5750848114155b156106eb576040516311e86f7360e01b815260040160405180910390fd5b60006040518060600160405280602281526020016114bc6022913990508560005b818110156107ef576000808a8a8481811061072957610729611274565b905060200201602081019061073e9190610eec565b6001600160a01b031689898581811061075957610759611274565b9050602002013588888681811061077257610772611274565b9050602002810190610784919061128a565b6040516107929291906112d1565b60006040518083038185875af1925050503d80600081146107cf576040519150601f19603f3d011682016040523d82523d6000602084013e6107d4565b606091505b50915091506107e4828287610b4a565b50505060010161070c565b507f56bfe74cbe37ff0615c4d027adf14b7793c59322d51411a0f5a26eb77abac0958888888888886040516108299695949392919061139b565b60405180910390a15050505050505050565b6066546040516001623b410b60e21b031981526001600160a01b039091169063ff12fbd49061087e90339030906001600160e01b03196000351690600401611225565b602060405180830381865afa15801561089b573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108bf9190611252565b6103895760405163ea8e4eb560e01b815260040160405180910390fd5b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff16156109145761090f83610b8a565b505050565b826001600160a01b03166352d1902d6040518163ffffffff1660e01b8152600401602060405180830381865afa92505050801561096e575060408051601f3d908101601f1916820190925261096b9181019061143b565b60015b6109d15760405162461bcd60e51b815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201526d6f6e206973206e6f74205555505360901b60648201526084016102ec565b6000805160206114de8339815191528114610a405760405162461bcd60e51b815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f786044820152681a58589b195555525160ba1b60648201526084016102ec565b5061090f838383610c26565b600054610100900460ff16610a735760405162461bcd60e51b81526004016102ec90611454565b606680546001600160a01b038086166001600160a01b03199283161790925560678054928516929091169190911790558051610ab6906068906020840190610dae565b50610abf610c51565b61090f630afed1ab60e11b5b6001600160e01b03198082169003610b255760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e746572666163652069640000000060448201526064016102ec565b6001600160e01b0319166000908152606560205260409020805460ff19166001179055565b60608315610b59575081610b83565b825115610b695782518084602001fd5b8160405162461bcd60e51b81526004016102ec9190610e9d565b9392505050565b6001600160a01b0381163b610bf75760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b60648201526084016102ec565b6000805160206114de83398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b610c2f83610c7a565b600082511180610c3c5750805b1561090f57610c4b8383610cba565b50505050565b600054610100900460ff16610c785760405162461bcd60e51b81526004016102ec90611454565b565b610c8381610b8a565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60606001600160a01b0383163b610d225760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b60648201526084016102ec565b600080846001600160a01b031684604051610d3d919061149f565b600060405180830381855af49150503d8060008114610d78576040519150601f19603f3d011682016040523d82523d6000602084013e610d7d565b606091505b5091509150610da582826040518060600160405280602781526020016114fe60279139610b4a565b95945050505050565b828054610dba90611153565b90600052602060002090601f016020900481019282610ddc5760008555610e22565b82601f10610df557805160ff1916838001178555610e22565b82800160010185558215610e22579182015b82811115610e22578251825591602001919060010190610e07565b50610e2e929150610e32565b5090565b5b80821115610e2e5760008155600101610e33565b600060208284031215610e5957600080fd5b81356001600160e01b031981168114610b8357600080fd5b60005b83811015610e8c578181015183820152602001610e74565b83811115610c4b5750506000910152565b6020815260008251806020840152610ebc816040850160208701610e71565b601f01601f19169190910160400192915050565b80356001600160a01b0381168114610ee757600080fd5b919050565b600060208284031215610efe57600080fd5b610b8382610ed0565b60008060008060608587031215610f1d57600080fd5b610f2685610ed0565b9350610f3460208601610ed0565b9250604085013567ffffffffffffffff80821115610f5157600080fd5b818701915087601f830112610f6557600080fd5b813581811115610f7457600080fd5b886020828501011115610f8657600080fd5b95989497505060200194505050565b634e487b7160e01b600052604160045260246000fd5b60008060408385031215610fbe57600080fd5b610fc783610ed0565b9150602083013567ffffffffffffffff80821115610fe457600080fd5b818501915085601f830112610ff857600080fd5b81358181111561100a5761100a610f95565b604051601f8201601f19908116603f0116810190838211818310171561103257611032610f95565b8160405282815288602084870101111561104b57600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b60008083601f84011261107f57600080fd5b50813567ffffffffffffffff81111561109757600080fd5b6020830191508360208260051b85010111156110b257600080fd5b9250929050565b600080600080600080606087890312156110d257600080fd5b863567ffffffffffffffff808211156110ea57600080fd5b6110f68a838b0161106d565b9098509650602089013591508082111561110f57600080fd5b61111b8a838b0161106d565b9096509450604089013591508082111561113457600080fd5b5061114189828a0161106d565b979a9699509497509295939492505050565b600181811c9082168061116757607f821691505b60208210810361118757634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6001600160a01b0393841681529190921660208201526001600160e01b0319909116604082015260600190565b60006020828403121561126457600080fd5b81518015158114610b8357600080fd5b634e487b7160e01b600052603260045260246000fd5b6000808335601e198436030181126112a157600080fd5b83018035915067ffffffffffffffff8211156112bc57600080fd5b6020019150368190038213156110b257600080fd5b8183823760009101908152919050565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b81835260006020808501808196508560051b810191508460005b8781101561138e5782840389528135601e1988360301811261134557600080fd5b8701803567ffffffffffffffff81111561135e57600080fd5b80360389131561136d57600080fd5b61137a86828985016112e1565b9a87019a9550505090840190600101611324565b5091979650505050505050565b6060808252810186905260008760808301825b898110156113dc576001600160a01b036113c784610ed0565b168252602092830192909101906001016113ae565b5083810360208501528681526001600160fb1b038711156113fc57600080fd5b8660051b9150818860208301378181019150506020810160008152602084830301604085015261142d81868861130a565b9a9950505050505050505050565b60006020828403121561144d57600080fd5b5051919050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b600082516114b1818460208701610e71565b919091019291505056fe44414f3a2063616c6c20726576657274656420776974686f7574206d657373616765360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206dfd63717ecdcaab834689dca968935413f73ab2ec5eb84137cd3e445573932564736f6c634300080d0033";

type DAOConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DAOConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class DAO__factory extends ContractFactory {
  constructor(...args: DAOConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<DAO> {
    return super.deploy(overrides || {}) as Promise<DAO>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): DAO {
    return super.attach(address) as DAO;
  }
  override connect(signer: Signer): DAO__factory {
    return super.connect(signer) as DAO__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DAOInterface {
    return new utils.Interface(_abi) as DAOInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): DAO {
    return new Contract(address, _abi, signerOrProvider) as DAO;
  }
}