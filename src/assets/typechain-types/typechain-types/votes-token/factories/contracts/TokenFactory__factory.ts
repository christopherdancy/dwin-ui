/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenFactory,
  TokenFactoryInterface,
} from "../../contracts/TokenFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
    ],
    name: "TokenCreated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "semanticVersion",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "frontendURI",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    name: "VersionCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_semanticVersion",
        type: "string",
      },
      {
        internalType: "string",
        name: "_frontendURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "_impl",
        type: "address",
      },
    ],
    name: "addVersion",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
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
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
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
    name: "renounceOwnership",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "versionControl",
    outputs: [
      {
        internalType: "string",
        name: "semanticVersion",
        type: "string",
      },
      {
        internalType: "string",
        name: "frontendURI",
        type: "string",
      },
      {
        internalType: "address",
        name: "impl",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001a3361001f565b61006f565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6142a68061007e6000396000f3fe60806040523480156200001157600080fd5b5060043610620000935760003560e01c80638129fc1c11620000625780638129fc1c146200010d5780638da5cb5b1462000117578063d7bef6ce1462000133578063f2fde38b146200015b57600080fd5b806301ffc9a714620000985780634d4a76f514620000c45780636d81fc7214620000dd578063715018a61462000103575b600080fd5b620000af620000a936600462000bee565b62000172565b60405190151581526020015b60405180910390f35b620000db620000d536600462000c8a565b620001b3565b005b620000f4620000ee36600462000d14565b6200032a565b604051620000bb919062000de7565b620000db620004af565b620000db620004ea565b6000546040516001600160a01b039091168152602001620000bb565b6200014a6200014436600462000dfc565b620005c6565b604051620000bb9392919062000e77565b620000db6200016c36600462000eb9565b6200072a565b60006301ffc9a760e01b6001600160e01b031983161480620001ad57506001600160e01b0319821660009081526001602052604090205460ff165b92915050565b6000546001600160a01b03163314620001e95760405162461bcd60e51b8152600401620001e09062000ed7565b60405180910390fd5b6040805160806020601f88018190040282018101909252606081018681526002928291908990899081908501838280828437600092019190915250505090825250604080516020601f88018190048102820181019092528681529181019190879087908190840183828082843760009201829052509385525050506001600160a01b0385166020928301528354600181018555938152819020825180519394600302909101926200029e928492019062000b3a565b506020828101518051620002b9926001850192019062000b3a565b5060409182015160029190910180546001600160a01b0319166001600160a01b03909216919091179055517f55333c8005b89ec35427ce0dee089bf2afe5d50fd45f9afd62478d8c299f9999906200031b908790879087908790879062000f35565b60405180910390a15050505050565b60408051600180825281830190925260609160009190602080830190803683370190505090506200047885858560048181106200036b576200036b62000f91565b90506020028101906200037f919062000fa7565b8101906200038e919062000dfc565b86866000818110620003a457620003a462000f91565b9050602002810190620003b8919062000fa7565b810190620003c7919062001025565b87876001818110620003dd57620003dd62000f91565b9050602002810190620003f1919062000fa7565b81019062000400919062001025565b8888600281811062000416576200041662000f91565b90506020028101906200042a919062000fa7565b810190620004399190620010ea565b898960038181106200044f576200044f62000f91565b905060200281019062000463919062000fa7565b81019062000472919062001193565b620007c9565b816000815181106200048e576200048e62000f91565b6001600160a01b039092166020928302919091019091015290509392505050565b6000546001600160a01b03163314620004dc5760405162461bcd60e51b8152600401620001e09062000ed7565b620004e86000620008d2565b565b600054600160a81b900460ff166200051057600054600160a01b900460ff161562000514565b303b155b620005795760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b6064820152608401620001e0565b600054600160a81b900460ff16158015620005a4576000805461ffff60a01b191661010160a01b1790555b620005ae62000922565b8015620005c3576000805460ff60a81b191690555b50565b60028181548110620005d757600080fd5b9060005260206000209060030201600091509050806000018054620005fc9062001222565b80601f01602080910402602001604051908101604052809291908181526020018280546200062a9062001222565b80156200067b5780601f106200064f576101008083540402835291602001916200067b565b820191906000526020600020905b8154815290600101906020018083116200065d57829003601f168201915b505050505090806001018054620006929062001222565b80601f0160208091040260200160405190810160405280929190818152602001828054620006c09062001222565b8015620007115780601f10620006e55761010080835404028352916020019162000711565b820191906000526020600020905b815481529060010190602001808311620006f357829003601f168201915b505050600290930154919250506001600160a01b031683565b6000546001600160a01b03163314620007575760405162461bcd60e51b8152600401620001e09062000ed7565b6001600160a01b038116620007be5760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401620001e0565b620005c381620008d2565b6040516bffffffffffffffffffffffff19606088811b8216602084015233901b16603482015246604882015260688101869052600090620008919082906088016040516020818303038152906040528051906020012060405180602001620008319062000bc9565b601f1982820381018352601f9091011660408190526200085c908a908a908a908a906020016200125e565b60408051601f19818403018152908290526200087c9291602001620012e4565b604051602081830303815290604052620009a3565b6040519091506001600160a01b038216907f2e2b3f61b70d2d131b2a807371103cc98d51adcaa5e9a8f9c32658ad8426e74e90600090a29695505050505050565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b600054600160a81b900460ff16620009915760405162461bcd60e51b815260206004820152602b60248201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960448201526a6e697469616c697a696e6760a81b6064820152608401620001e0565b620004e86320cb8a8760e01b62000ab6565b60008084471015620009f85760405162461bcd60e51b815260206004820152601d60248201527f437265617465323a20696e73756666696369656e742062616c616e63650000006044820152606401620001e0565b825160000362000a4b5760405162461bcd60e51b815260206004820181905260248201527f437265617465323a2062797465636f6465206c656e677468206973207a65726f6044820152606401620001e0565b8383516020850187f590506001600160a01b03811662000aae5760405162461bcd60e51b815260206004820152601960248201527f437265617465323a204661696c6564206f6e206465706c6f79000000000000006044820152606401620001e0565b949350505050565b6001600160e01b0319808216900362000b125760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e74657266616365206964000000006044820152606401620001e0565b6001600160e01b0319166000908152600160208190526040909120805460ff19169091179055565b82805462000b489062001222565b90600052602060002090601f01602090048101928262000b6c576000855562000bb7565b82601f1062000b8757805160ff191683800117855562000bb7565b8280016001018555821562000bb7579182015b8281111562000bb757825182559160200191906001019062000b9a565b5062000bc592915062000bd7565b5090565b612f59806200131883390190565b5b8082111562000bc5576000815560010162000bd8565b60006020828403121562000c0157600080fd5b81356001600160e01b03198116811462000c1a57600080fd5b9392505050565b60008083601f84011262000c3457600080fd5b50813567ffffffffffffffff81111562000c4d57600080fd5b60208301915083602082850101111562000c6657600080fd5b9250929050565b80356001600160a01b038116811462000c8557600080fd5b919050565b60008060008060006060868803121562000ca357600080fd5b853567ffffffffffffffff8082111562000cbc57600080fd5b62000cca89838a0162000c21565b9097509550602088013591508082111562000ce457600080fd5b5062000cf38882890162000c21565b909450925062000d0890506040870162000c6d565b90509295509295909350565b60008060006040848603121562000d2a57600080fd5b62000d358462000c6d565b9250602084013567ffffffffffffffff8082111562000d5357600080fd5b818601915086601f83011262000d6857600080fd5b81358181111562000d7857600080fd5b8760208260051b850101111562000d8e57600080fd5b6020830194508093505050509250925092565b600081518084526020808501945080840160005b8381101562000ddc5781516001600160a01b03168752958201959082019060010162000db5565b509495945050505050565b60208152600062000c1a602083018462000da1565b60006020828403121562000e0f57600080fd5b5035919050565b60005b8381101562000e3357818101518382015260200162000e19565b8381111562000e43576000848401525b50505050565b6000815180845262000e6381602086016020860162000e16565b601f01601f19169290920160200192915050565b60608152600062000e8c606083018662000e49565b828103602084015262000ea0818662000e49565b91505060018060a01b0383166040830152949350505050565b60006020828403121562000ecc57600080fd5b62000c1a8262000c6d565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60608152600062000f4b60608301878962000f0c565b828103602084015262000f6081868862000f0c565b91505060018060a01b03831660408301529695505050505050565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b6000808335601e1984360301811262000fbf57600080fd5b83018035915067ffffffffffffffff82111562000fdb57600080fd5b60200191503681900382131562000c6657600080fd5b604051601f8201601f1916810167ffffffffffffffff811182821017156200101d576200101d62000f7b565b604052919050565b600060208083850312156200103957600080fd5b823567ffffffffffffffff808211156200105257600080fd5b818501915085601f8301126200106757600080fd5b8135818111156200107c576200107c62000f7b565b62001090601f8201601f1916850162000ff1565b91508082528684828501011115620010a757600080fd5b8084840185840137600090820190930192909252509392505050565b600067ffffffffffffffff821115620010e057620010e062000f7b565b5060051b60200190565b60006020808385031215620010fe57600080fd5b823567ffffffffffffffff8111156200111657600080fd5b8301601f810185136200112857600080fd5b80356200113f6200113982620010c3565b62000ff1565b81815260059190911b820183019083810190878311156200115f57600080fd5b928401925b828410156200118857620011788462000c6d565b8252928401929084019062001164565b979650505050505050565b60006020808385031215620011a757600080fd5b823567ffffffffffffffff811115620011bf57600080fd5b8301601f81018513620011d157600080fd5b8035620011e26200113982620010c3565b81815260059190911b820183019083810190878311156200120257600080fd5b928401925b82841015620011885783358252928401929084019062001207565b600181811c908216806200123757607f821691505b6020821081036200125857634e487b7160e01b600052602260045260246000fd5b50919050565b60808152600062001273608083018762000e49565b60208382038185015262001288828862000e49565b915083820360408501526200129e828762000da1565b8481036060860152855180825282870193509082019060005b81811015620012d557845183529383019391830191600101620012b7565b50909998505050505050505050565b60008351620012f881846020880162000e16565b8351908301906200130e81836020880162000e16565b0194935050505056fe6101606040527f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c9610140523480156200003757600080fd5b5060405162002f5938038062002f598339810160408190526200005a9162000c05565b8380604051806040016040528060018152602001603160f81b8152508686816003908051906020019062000090929190620009f2565b508051620000a6906004906020840190620009f2565b5050825160209384012082519284019290922060e08390526101008190524660a0818152604080517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818901819052818301979097526060810194909452608080850193909352308483018190528151808603909301835260c09485019091528151919096012090529290925261012052506200014c90506336372b0760e01b620001c3565b60005b8251811015620001b857620001a383828151811062000172576200017262000d2e565b60200260200101518383815181106200018f576200018f62000d2e565b60200260200101516200024860201b60201c565b80620001af8162000d5a565b9150506200014f565b505050505062000de7565b6001600160e01b03198082169003620002235760405162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e746572666163652069640000000060448201526064015b60405180910390fd5b6001600160e01b0319166000908152600d60205260409020805460ff19166001179055565b6200025f82826200026360201b62000b861760201c565b5050565b6200027a82826200031660201b62000c161760201c565b6001600160e01b036200028e620004138216565b1115620002f75760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016200021a565b62000310600c62000d0d6200041960201b17836200042e565b50505050565b6001600160a01b0382166200036e5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016200021a565b6200037c60008383620005e0565b806002600082825462000390919062000d76565b90915550506001600160a01b03821660009081526020819052604081208054839290620003bf90849062000d76565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a36200025f60008383620005fd565b60025490565b600062000427828462000d76565b9392505050565b8254600090819080156200048057856200044a60018362000d91565b815481106200045d576200045d62000d2e565b60009182526020909120015464010000000090046001600160e01b031662000483565b60005b6001600160e01b031692506200049a83858760201c565b9150600081118015620004de57504386620004b760018462000d91565b81548110620004ca57620004ca62000d2e565b60009182526020909120015463ffffffff16145b156200055257620004fa826200061560201b62000d191760201c565b866200050860018462000d91565b815481106200051b576200051b62000d2e565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b03160217905550620005d7565b85604051806040016040528062000574436200068460201b62000d861760201c565b63ffffffff16815260200162000595856200061560201b62000d191760201c565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b620005f8838383620006eb60201b62000deb1760201c565b505050565b620005f88383836200075760201b62000e381760201c565b60006001600160e01b03821115620006805760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016200021a565b5090565b600063ffffffff821115620006805760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016200021a565b62000703838383620005f860201b62000e0a1760201c565b6001600160a01b03831662000727576200071d82620007a3565b620005f8620007db565b6001600160a01b03821662000741576200071d83620007a3565b6200074c83620007a3565b620005f882620007a3565b6200076f838383620005f860201b62000e0a1760201c565b6001600160a01b038381166000908152600a6020526040808220548584168352912054620005f892918216911683620007ed565b6001600160a01b03811660009081526005602090815260408083209183905290912054620007d8919062000928565b62000928565b50565b620007eb6006620007d260025490565b565b816001600160a01b0316836001600160a01b031614158015620008105750600081115b15620005f8576001600160a01b038316156200089d576001600160a01b0383166000908152600b60209081526040822082916200085a919062000977901b62000e6a17856200042e565b91509150846001600160a01b031660008051602062002f39833981519152838360405162000892929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615620005f8576001600160a01b0382166000908152600b6020908152604082208291620008e1919062000419901b62000d0d17856200042e565b91509150836001600160a01b031660008051602062002f39833981519152838360405162000919929190918252602082015260400190565b60405180910390a25050505050565b60006200093462000985565b9050806200094284620009a3565b1015620005f8578254600180820185556000858152602080822090930193909355938401805494850181558252902090910155565b600062000427828462000d91565b60006200099e6008620009ee60201b62000e761760201c565b905090565b80546000908103620009b757506000919050565b81548290620009c99060019062000d91565b81548110620009dc57620009dc62000d2e565b90600052602060002001549050919050565b5490565b82805462000a009062000dab565b90600052602060002090601f01602090048101928262000a24576000855562000a6f565b82601f1062000a3f57805160ff191683800117855562000a6f565b8280016001018555821562000a6f579182015b8281111562000a6f57825182559160200191906001019062000a52565b50620006809291505b8082111562000680576000815560010162000a78565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b038111828210171562000acf5762000acf62000a8e565b604052919050565b600082601f83011262000ae957600080fd5b81516001600160401b0381111562000b055762000b0562000a8e565b602062000b1b601f8301601f1916820162000aa4565b828152858284870101111562000b3057600080fd5b60005b8381101562000b5057858101830151828201840152820162000b33565b8381111562000b625760008385840101525b5095945050505050565b60006001600160401b0382111562000b885762000b8862000a8e565b5060051b60200190565b600082601f83011262000ba457600080fd5b8151602062000bbd62000bb78362000b6c565b62000aa4565b82815260059290921b8401810191818101908684111562000bdd57600080fd5b8286015b8481101562000bfa578051835291830191830162000be1565b509695505050505050565b6000806000806080858703121562000c1c57600080fd5b84516001600160401b038082111562000c3457600080fd5b62000c428883890162000ad7565b955060209150818701518181111562000c5a57600080fd5b62000c6889828a0162000ad7565b95505060408701518181111562000c7e57600080fd5b8701601f8101891362000c9057600080fd5b805162000ca162000bb78262000b6c565b81815260059190911b8201840190848101908b83111562000cc157600080fd5b928501925b8284101562000cf85783516001600160a01b038116811462000ce85760008081fd5b8252928501929085019062000cc6565b60608b015190975094505050508082111562000d1357600080fd5b5062000d228782880162000b92565b91505092959194509250565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006001820162000d6f5762000d6f62000d44565b5060010190565b6000821982111562000d8c5762000d8c62000d44565b500190565b60008282101562000da65762000da662000d44565b500390565b600181811c9082168062000dc057607f821691505b60208210810362000de157634e487b7160e01b600052602260045260246000fd5b50919050565b60805160a05160c05160e0516101005161012051610140516120f762000e4260003960006109f201526000611293015260006112e2015260006112bd01526000611216015260006112400152600061126a01526120f76000f3fe608060405234801561001057600080fd5b506004361061018e5760003560e01c806370a08231116100de578063a457c2d711610097578063d1dc72a311610071578063d1dc72a31461038f578063d505accf14610397578063dd62ed3e146103aa578063f1127ed8146103e357600080fd5b8063a457c2d714610356578063a9059cbb14610369578063c3cda5201461037c57600080fd5b806370a08231146102d95780637ecebe00146103025780638e539e8c1461031557806395d89b4114610328578063981b24d0146103305780639ab24eb01461034357600080fd5b80633644e5151161014b5780634ee2cd7e116101255780634ee2cd7e14610245578063587cde1e146102585780635c19a95c1461029c5780636fcfff45146102b157600080fd5b80633644e51514610217578063395093511461021f5780633a46b1a81461023257600080fd5b806301ffc9a71461019357806306fdde03146101bb578063095ea7b3146101d057806318160ddd146101e357806323b872dd146101f5578063313ce56714610208575b600080fd5b6101a66101a1366004611d84565b610420565b60405190151581526020015b60405180910390f35b6101c3610460565b6040516101b29190611dae565b6101a66101de366004611e1a565b6104f2565b6002545b6040519081526020016101b2565b6101a6610203366004611e44565b61050a565b604051601281526020016101b2565b6101e761052e565b6101a661022d366004611e1a565b61053d565b6101e7610240366004611e1a565b61057c565b6101e7610253366004611e1a565b6105fb565b610284610266366004611e80565b6001600160a01b039081166000908152600a60205260409020541690565b6040516001600160a01b0390911681526020016101b2565b6102af6102aa366004611e80565b610654565b005b6102c46102bf366004611e80565b610661565b60405163ffffffff90911681526020016101b2565b6101e76102e7366004611e80565b6001600160a01b031660009081526020819052604090205490565b6101e7610310366004611e80565b610683565b6101e7610323366004611e9b565b6106a1565b6101c36106fd565b6101e761033e366004611e9b565b61070c565b6101e7610351366004611e80565b610737565b6101a6610364366004611e1a565b6107be565b6101a6610377366004611e1a565b610850565b6102af61038a366004611ec5565b61085e565b6101e7610994565b6102af6103a5366004611f1d565b61099e565b6101e76103b8366004611f87565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b6103f66103f1366004611fba565b610b02565b60408051825163ffffffff1681526020928301516001600160e01b031692810192909252016101b2565b60006301ffc9a760e01b6001600160e01b03198316148061045a57506001600160e01b031982166000908152600d602052604090205460ff165b92915050565b60606003805461046f90611ffa565b80601f016020809104026020016040519081016040528092919081815260200182805461049b90611ffa565b80156104e85780601f106104bd576101008083540402835291602001916104e8565b820191906000526020600020905b8154815290600101906020018083116104cb57829003601f168201915b5050505050905090565b600033610500818585610e7a565b5060019392505050565b600033610518858285610f9e565b61052385858561102a565b506001949350505050565b6000610538611209565b905090565b3360008181526001602090815260408083206001600160a01b03871684529091528120549091906105009082908690610577908790612044565b610e7a565b60004382106105d25760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064015b60405180910390fd5b6001600160a01b0383166000908152600b602052604090206105f49083611330565b9392505050565b6001600160a01b0382166000908152600560205260408120819081906106229085906113ed565b9150915081610649576001600160a01b03851660009081526020819052604090205461064b565b805b95945050505050565b61065e33826114e3565b50565b6001600160a01b0381166000908152600b602052604081205461045a90610d86565b6001600160a01b03811660009081526009602052604081205461045a565b60004382106106f25760405162461bcd60e51b815260206004820152601f60248201527f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e65640060448201526064016105c9565b61045a600c83611330565b60606004805461046f90611ffa565b600080600061071c8460066113ed565b915091508161072d5760025461072f565b805b949350505050565b6001600160a01b0381166000908152600b602052604081205480156107ab576001600160a01b0383166000908152600b6020526040902061077960018361205c565b8154811061078957610789612073565b60009182526020909120015464010000000090046001600160e01b03166107ae565b60005b6001600160e01b03169392505050565b3360008181526001602090815260408083206001600160a01b0387168452909152812054909190838110156108435760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b60648201526084016105c9565b6105238286868403610e7a565b60003361050081858561102a565b834211156108ae5760405162461bcd60e51b815260206004820152601d60248201527f4552433230566f7465733a207369676e6174757265206578706972656400000060448201526064016105c9565b604080517fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf60208201526001600160a01b038816918101919091526060810186905260808101859052600090610928906109209060a0016040516020818303038152906040528051906020012061155c565b8585856115aa565b9050610933816115d2565b86146109815760405162461bcd60e51b815260206004820152601960248201527f4552433230566f7465733a20696e76616c6964206e6f6e63650000000000000060448201526064016105c9565b61098b81886114e3565b50505050505050565b60006105386115fa565b834211156109ee5760405162461bcd60e51b815260206004820152601d60248201527f45524332305065726d69743a206578706972656420646561646c696e6500000060448201526064016105c9565b60007f0000000000000000000000000000000000000000000000000000000000000000888888610a1d8c6115d2565b6040805160208101969096526001600160a01b0394851690860152929091166060840152608083015260a082015260c0810186905260e0016040516020818303038152906040528051906020012090506000610a788261155c565b90506000610a88828787876115aa565b9050896001600160a01b0316816001600160a01b031614610aeb5760405162461bcd60e51b815260206004820152601e60248201527f45524332305065726d69743a20696e76616c6964207369676e6174757265000060448201526064016105c9565b610af68a8a8a610e7a565b50505050505050505050565b60408051808201909152600080825260208201526001600160a01b0383166000908152600b60205260409020805463ffffffff8416908110610b4657610b46612073565b60009182526020918290206040805180820190915291015463ffffffff8116825264010000000090046001600160e01b0316918101919091529392505050565b610b908282610c16565b6002546001600160e01b031015610c025760405162461bcd60e51b815260206004820152603060248201527f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60448201526f766572666c6f77696e6720766f74657360801b60648201526084016105c9565b610c10600c610d0d83611654565b50505050565b6001600160a01b038216610c6c5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f20616464726573730060448201526064016105c9565b610c78600083836117cd565b8060026000828254610c8a9190612044565b90915550506001600160a01b03821660009081526020819052604081208054839290610cb7908490612044565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a3610d09600083836117d8565b5050565b60006105f48284612044565b60006001600160e01b03821115610d825760405162461bcd60e51b815260206004820152602760248201527f53616665436173743a2076616c756520646f65736e27742066697420696e20326044820152663234206269747360c81b60648201526084016105c9565b5090565b600063ffffffff821115610d825760405162461bcd60e51b815260206004820152602660248201527f53616665436173743a2076616c756520646f65736e27742066697420696e203360448201526532206269747360d01b60648201526084016105c9565b6001600160a01b038316610e0f57610e02826117e3565b610e0a611815565b505050565b6001600160a01b038216610e2657610e02836117e3565b610e2f836117e3565b610e0a826117e3565b6001600160a01b038381166000908152600a6020526040808220548584168352912054610e0a92918216911683611825565b60006105f4828461205c565b5490565b6001600160a01b038316610edc5760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b60648201526084016105c9565b6001600160a01b038216610f3d5760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b60648201526084016105c9565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b038381166000908152600160209081526040808320938616835292905220546000198114610c10578181101561101d5760405162461bcd60e51b815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e636500000060448201526064016105c9565b610c108484848403610e7a565b6001600160a01b03831661108e5760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b60648201526084016105c9565b6001600160a01b0382166110f05760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b60648201526084016105c9565b6110fb8383836117cd565b6001600160a01b038316600090815260208190526040902054818110156111735760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b60648201526084016105c9565b6001600160a01b038085166000908152602081905260408082208585039055918516815290812080548492906111aa908490612044565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516111f691815260200190565b60405180910390a3610c108484846117d8565b6000306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614801561126257507f000000000000000000000000000000000000000000000000000000000000000046145b1561128c57507f000000000000000000000000000000000000000000000000000000000000000090565b50604080517f00000000000000000000000000000000000000000000000000000000000000006020808301919091527f0000000000000000000000000000000000000000000000000000000000000000828401527f000000000000000000000000000000000000000000000000000000000000000060608301524660808301523060a0808401919091528351808403909101815260c0909201909252805191012090565b8154600090815b8181101561139457600061134b8284611962565b90508486828154811061136057611360612073565b60009182526020909120015463ffffffff1611156113805780925061138e565b61138b816001612044565b91505b50611337565b81156113d857846113a660018461205c565b815481106113b6576113b6612073565b60009182526020909120015464010000000090046001600160e01b03166113db565b60005b6001600160e01b031695945050505050565b600080600084116114395760405162461bcd60e51b815260206004820152601660248201527504552433230536e617073686f743a20696420697320360541b60448201526064016105c9565b61144161197d565b8411156114905760405162461bcd60e51b815260206004820152601d60248201527f4552433230536e617073686f743a206e6f6e6578697374656e7420696400000060448201526064016105c9565b600061149c8486611988565b845490915081036114b45760008092509250506114dc565b60018460010182815481106114cb576114cb612073565b906000526020600020015492509250505b9250929050565b6001600160a01b038281166000818152600a60208181526040808420805485845282862054949093528787166001600160a01b03198416811790915590519190951694919391928592917f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f9190a4610c10828483611825565b600061045a611569611209565b8360405161190160f01b6020820152602281018390526042810182905260009060620160405160208183030381529060405280519060200120905092915050565b60008060006115bb87878787611a4d565b915091506115c881611b3a565b5095945050505050565b6001600160a01b03811660009081526009602052604090208054600181018255905b50919050565b600061160a600880546001019055565b600061161461197d565b90507f8030e83b04d87bef53480e26263266d6ca66863aa8506aca6f2559d18aa1cb678160405161164791815260200190565b60405180910390a1919050565b82546000908190801561169f578561166d60018361205c565b8154811061167d5761167d612073565b60009182526020909120015464010000000090046001600160e01b03166116a2565b60005b6001600160e01b031692506116bb83858763ffffffff16565b91506000811180156116f9575043866116d560018461205c565b815481106116e5576116e5612073565b60009182526020909120015463ffffffff16145b156117595761170782610d19565b8661171360018461205c565b8154811061172357611723612073565b9060005260206000200160000160046101000a8154816001600160e01b0302191690836001600160e01b031602179055506117c4565b85604051806040016040528061176e43610d86565b63ffffffff16815260200161178285610d19565b6001600160e01b0390811690915282546001810184556000938452602093849020835194909301519091166401000000000263ffffffff909316929092179101555b50935093915050565b610e0a838383610deb565b610e0a838383610e38565b6001600160a01b0381166000908152600560209081526040808320918390529091205461065e9190611cf0565b611cf0565b611823600661181060025490565b565b816001600160a01b0316836001600160a01b0316141580156118475750600081115b15610e0a576001600160a01b038316156118d5576001600160a01b0383166000908152600b60205260408120819061188290610e6a85611654565b91509150846001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516118ca929190918252602082015260400190565b60405180910390a250505b6001600160a01b03821615610e0a576001600160a01b0382166000908152600b60205260408120819061190b90610d0d85611654565b91509150836001600160a01b03167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a7248383604051611953929190918252602082015260400190565b60405180910390a25050505050565b60006119716002848418612089565b6105f490848416612044565b600061053860085490565b8154600090810361199b5750600061045a565b82546000905b808210156119f75760006119b58383611962565b9050848682815481106119ca576119ca612073565b906000526020600020015411156119e3578091506119f1565b6119ee816001612044565b92505b506119a1565b600082118015611a2c57508385611a0f60018561205c565b81548110611a1f57611a1f612073565b9060005260206000200154145b15611a4557611a3c60018361205c565b9250505061045a565b50905061045a565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831115611a845750600090506003611b31565b8460ff16601b14158015611a9c57508460ff16601c14155b15611aad5750600090506004611b31565b6040805160008082526020820180845289905260ff881692820192909252606081018690526080810185905260019060a0016020604051602081039080840390855afa158015611b01573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116611b2a57600060019250925050611b31565b9150600090505b94509492505050565b6000816004811115611b4e57611b4e6120ab565b03611b565750565b6001816004811115611b6a57611b6a6120ab565b03611bb75760405162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e6174757265000000000000000060448201526064016105c9565b6002816004811115611bcb57611bcb6120ab565b03611c185760405162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e6774680060448201526064016105c9565b6003816004811115611c2c57611c2c6120ab565b03611c845760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c604482015261756560f01b60648201526084016105c9565b6004816004811115611c9857611c986120ab565b0361065e5760405162461bcd60e51b815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202776272076616c604482015261756560f01b60648201526084016105c9565b6000611cfa61197d565b905080611d0684611d3a565b1015610e0a578254600180820185556000858152602080822090930193909355938401805494850181558252902090910155565b80546000908103611d4d57506000919050565b81548290611d5d9060019061205c565b81548110611d6d57611d6d612073565b90600052602060002001549050919050565b919050565b600060208284031215611d9657600080fd5b81356001600160e01b0319811681146105f457600080fd5b600060208083528351808285015260005b81811015611ddb57858101830151858201604001528201611dbf565b81811115611ded576000604083870101525b50601f01601f1916929092016040019392505050565b80356001600160a01b0381168114611d7f57600080fd5b60008060408385031215611e2d57600080fd5b611e3683611e03565b946020939093013593505050565b600080600060608486031215611e5957600080fd5b611e6284611e03565b9250611e7060208501611e03565b9150604084013590509250925092565b600060208284031215611e9257600080fd5b6105f482611e03565b600060208284031215611ead57600080fd5b5035919050565b803560ff81168114611d7f57600080fd5b60008060008060008060c08789031215611ede57600080fd5b611ee787611e03565b95506020870135945060408701359350611f0360608801611eb4565b92506080870135915060a087013590509295509295509295565b600080600080600080600060e0888a031215611f3857600080fd5b611f4188611e03565b9650611f4f60208901611e03565b95506040880135945060608801359350611f6b60808901611eb4565b925060a0880135915060c0880135905092959891949750929550565b60008060408385031215611f9a57600080fd5b611fa383611e03565b9150611fb160208401611e03565b90509250929050565b60008060408385031215611fcd57600080fd5b611fd683611e03565b9150602083013563ffffffff81168114611fef57600080fd5b809150509250929050565b600181811c9082168061200e57607f821691505b6020821081036115f457634e487b7160e01b600052602260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600082198211156120575761205761202e565b500190565b60008282101561206e5761206e61202e565b500390565b634e487b7160e01b600052603260045260246000fd5b6000826120a657634e487b7160e01b600052601260045260246000fd5b500490565b634e487b7160e01b600052602160045260246000fdfea26469706673582212205ad179064a6fbf542e1782eb05710cbc0ec019e93998d8942b64d2e6e000e67a64736f6c634300080d0033dec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724a26469706673582212208de980693b0165e0a1383bba27ff6bc076292cc6d9f2417f2dd0cad11682b40d64736f6c634300080d0033";

type TokenFactoryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TokenFactoryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TokenFactory__factory extends ContractFactory {
  constructor(...args: TokenFactoryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenFactory> {
    return super.deploy(overrides || {}) as Promise<TokenFactory>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): TokenFactory {
    return super.attach(address) as TokenFactory;
  }
  override connect(signer: Signer): TokenFactory__factory {
    return super.connect(signer) as TokenFactory__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenFactoryInterface {
    return new utils.Interface(_abi) as TokenFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenFactory {
    return new Contract(address, _abi, signerOrProvider) as TokenFactory;
  }
}