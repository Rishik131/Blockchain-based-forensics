const Web3 = require("web3");
const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/uYTJc12jPlLWxZSQQz3VH9JMO4T9QwHj");

const ABI = [
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true
		,
        internalType: "address",
        name: "_address",
        type: "address",
      },
      { indexed: false, internalType: "string", name: "_name", type: "string" },
      {
        indexed: false,
        internalType: "uint256",
        name: "_age",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_gender",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "_location",
        type: "string",
      },
    ],
    name: "SubjectAdded",
    type: "event",
  },
  {
    inputs: [
      { internalType: "string", name: "_name", type: "string" },
      { internalType: "uint256", name: "_age", type: "uint256" },
      { internalType: "string", name: "_gender", type: "string" },
      { internalType: "string", name: "_location", type: "string" },
    ],
    name: "addSubject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getSubject",
    outputs: [
      { internalType: "string", name: "", type: "string" },
      { internalType: "uint256", name: "", type: "uint256" },
      { internalType: "string", name: "", type: "string" },
      { internalType: "string", name: "", type: "string" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const contractAddress = "0x23053D048291a6833a030c14cB31280D9C4b5Cb8";
const contract = new web3.eth.Contract(ABI, contractAddress);

async function getSubjectByAddress(address) {
  try {
    const result = await contract.methods.getSubject().call({ from: address });
    console.log("Name:", result[0]);
    console.log("Age:", result[1]);
    console.log("Gender:", result[2]);
    console.log("Location:", result[3]);
  } catch (error) {
    console.error(error);
  }
}

getSubjectByAddress("0xB8acB95A74DF70F7b9b8764732bE5ADbc85d4d33");