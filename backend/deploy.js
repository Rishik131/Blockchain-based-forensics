const Web3 = require("web3");
const web3 = new Web3("HTTP://127.0.0.1:7545");
const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_SubjectID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_CaseID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TestDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_ReportDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TestID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_TestName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Evidence",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_Conclusion",
				"type": "string"
			}
		],
		"name": "addSubjectReport",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_SubjectID",
				"type": "uint256"
			}
		],
		"name": "getSubject",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_CaseID",
				"type": "uint256"
			}
		],
		"name": "getSubjectReport",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_SubjectID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_SubjectName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_SubjectAge",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_SubjectSex",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_AdmissionID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_TestCode",
				"type": "uint256"
			}
		],
		"name": "newSubject",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "subjectReports",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "SubjectID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "CaseID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "TestID",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "TestName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Description",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Evidence",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "Conclusion",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "TestDate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "ReportDate",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "Exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "subjects",
		"outputs": [
			{
				"internalType": "string",
				"name": "SubjectName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "SubjectAge",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "SubjectSex",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "AdmissionID",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "TestCode",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "Exists",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

const contractAddress = "0xb3Ac3a5FA6144eE110f88b1d57eE149e70d9D1c7";
const contract = new web3.eth.Contract(ABI, contractAddress);
const account = "0x06534B9f6cdc10354Dd4Ac0Dc09A553d14ecdD5d";
const privateKey = "1795936374149160ba5b1a1d84f3c504282611ca426a3f4424ab313362e59359";

//newSubject
async function newSubject(id,subjectName,age,sex,admissionID,testCode){
    const transactionData = contract.methods.newSubject(id,subjectName,age,sex,admissionID,testCode).encodeABI();
    const tx = {
        from: account,
        to: contractAddress,
        gas: web3.utils.toHex(3000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
        data: transactionData
      };

      web3.eth.accounts.signTransaction(tx, privateKey, (error, signedTx) => {
        if (!error) {
          web3.eth.sendSignedTransaction(signedTx.rawTransaction, (error, txHash) => {
            if (!error) {
              console.log('Transaction hash:', txHash);
            } else {
              console.error(error);
            }
          });
        } else {
          console.error(error);
        }
      });
}

//getSubject
async function getSubject(id){
    contract.methods.getSubject(id).call((error, result) => {
        if (!error) {
          console.log('Subject Name: '+result[0]);
          console.log('Age: '+result[1]);
          console.log('Sex: '+result[2]);
          console.log('Admission ID:'+result[3]);
          console.log('Test Code: '+result[4]);
        } else {
          console.error(error);
        }
      });
}

//add report
async function addSubjectReport(SubjectID,caseID,testDate,reportDate,testID,testName,description,evidence,conclusion){
    const transactionData = contract.methods.addSubjectReport(SubjectID,caseID,testDate,reportDate,testID,testName,description,evidence,conclusion).encodeABI();
    const tx = {
        from: account,
        to: contractAddress,
        gas: web3.utils.toHex(3000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('30', 'gwei')),
        data: transactionData
      };

      web3.eth.accounts.signTransaction(tx, privateKey, (error, signedTx) => {
        if (!error) {
          web3.eth.sendSignedTransaction(signedTx.rawTransaction, (error, txHash) => {
            if (!error) {
              console.log('Transaction hash:', txHash);
            } else {
              console.error(error);
            }
          });
        } else {
          console.error(error);
        }
      });
}

//get report
async function getSubjectReport(caseID){
    contract.methods.getSubjectReport(caseID).call((error, result) => {
        if (!error) {
          console.log('Subject ID: '+result[0]+'\n');
          console.log('Case ID: '+result[1]+'\n');
          console.log('Test ID: '+result[2]+'\n');
          console.log('Test Name:'+result[3]+'\n');
          console.log('Description: '+result[4]+'\n');
          console.log('Evidence: '+result[5]+'\n');
          console.log('Conclusion: '+result[6]+'\n');
        } else {
          console.error(error);
        }
      });

}


// newSubject(1224,"Shyaam",45,"M",20,113);

// getSubject(1094);

// addSubjectReport(1224,13,6,2,445,'DNA Test',
// "The blood on the ground near the body of the subject was tested whether it was of the subject or not.",
// "The DNA Test is Negative.",
// "The Criminal was .");

getSubjectReport(11);