const contractABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_candidateAddress",
				"type": "address"
			}
		],
		"name": "addCandidate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_new",
				"type": "address"
			}
		],
		"name": "addOwner",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address[]",
				"name": "newVoters",
				"type": "address[]"
			}
		],
		"name": "addVoters",
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
		"name": "candidateAddresses",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "candidateAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "endVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_candidateAddress",
				"type": "address"
			}
		],
		"name": "getCandidateDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "voteCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getCandidates",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "string[]",
				"name": "",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_voterAddress",
				"type": "address"
			}
		],
		"name": "getVoterDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "votedFor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getWinners",
		"outputs": [
			{
				"internalType": "string[]",
				"name": "winners",
				"type": "string[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_ownerName",
				"type": "string"
			},
			{
				"internalType": "address",
				"name": "_ownerAddress",
				"type": "address"
			}
		],
		"name": "startVoting",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_candidateAddress",
				"type": "address"
			}
		],
		"name": "vote",
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
		"name": "voterList",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "voters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "isEligible",
				"type": "bool"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "bool",
				"name": "hasVoted",
				"type": "bool"
			},
			{
				"internalType": "address",
				"name": "votedFor",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingEnded",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "votingStarted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

let provider;
let signer;
let contract;
const contractAddress = "0x22cD181AD8ACCa1E11DEE7926bb4d28143a1c91B"; // Replace with your contract address

async function connectToMetaMask() {
  if (typeof window.ethereum !== "undefined") {
    try {
      provider = new ethers.BrowserProvider(window.ethereum);
      await window.ethereum.request({ method: "eth_requestAccounts" });
      signer = await provider.getSigner();
      contract = new ethers.Contract(contractAddress, contractABI, signer);
      address =await signer.getAddress()
      console.log(`connected account: ${address}`);
      document.getElementById('walltConnect').innerText=address;
    } catch (err) {
      console.error("User denied MetaMask connection", err);
    }
  } else {
    alert("MetaMask not found. Please install MetaMask.");
  }
}

connectToMetaMask();

// Start Voting function
async function startVoting() {
  const voterName = document.getElementById("voterName").value;
  const voterAddress = document.getElementById("voterAddress").value;

  try {
    const tx = await contract.startVoting(voterName, voterAddress);
    await tx.wait();
    alert("Voting started successfully!");
  } catch (err) {
    console.error(err);
    alert("Error starting voting.");
  }
}

// Add Candidate function
async function addCandidate() {
  const candidateName = document.getElementById("candidateName").value;
  const candidateAddress = document.getElementById("candidateAddress").value;

  try {
    const tx = await contract.addCandidate(candidateName, candidateAddress);
    await tx.wait();
    alert("Candidate added successfully!");
    console.log("Candidate added successfully!");
  } catch (err) {
    console.error(err);
    alert("Error adding candidate.");
    console.log("Error adding candidate.");
  }
}

// Add Voters function
async function addVoters() {
  const votersAddresses = document
    .getElementById("votersAddresses")
    .value.split(",");
  try {
    const tx = await contract.addVoters(votersAddresses);
    await tx.wait();
    alert("Voters added successfully!");
    console.log("Voters added successfully!");
  } catch (err) {
    console.error(err);
    alert("Error adding voters.");
    console.log("Error adding voters.");
  }
}

// Vote function
async function vote() {
  const voteFor = document.getElementById("voteFor").value;

  try {
    const tx = await contract.vote(voteFor);
    await tx.wait();
    alert("Voted successfully!");
    console.log("Voted successfully!");
  } catch (err) {
    console.error(err);
    alert("Error voting.");
    console.log("Error voting.");
  }
}

// End Voting function
async function endVoting() {
  try {
    const tx = await contract.endVoting();
    await tx.wait();
    alert("Voting ended successfully!");
    console.log("Voting ended successfully!");
  } catch (err) {
    console.error(err);
    alert("Error ending voting.");
    console.log("Error ending voting.");
  }
}

// Add Owner function
async function addOwner() {
  const newOwner = document.getElementById("newOwner").value;

  try {
    const tx = await contract.addOwner(newOwner);
    await tx.wait();
    alert("Owner added successfully!");
    console.log("Owner added successfully!");
  } catch (err) {
    console.error(err);
    alert("Error adding owner.");
    console.log("Error adding owner.");
  }
}

// Get Candidates function
async function getCandidates() {
    const candidatesData = await contract.getCandidates();

    const candidateAddresses = candidatesData[0]; // array of addresses
    const candidateNames = candidatesData[1];     // array of names

    const candidateListElement = document.getElementById('candidate-list');
    candidateListElement.innerHTML = ''; // Clear any existing content

    // Loop through candidates and display their details
    for (let i = 0; i < candidateAddresses.length; i++) {
        const candidateAddress = candidateAddresses[i];
        const candidateName = candidateNames[i];

        // Create an HTML element for each candidate
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${candidateName}, Address: ${candidateAddress}`;
        candidateListElement.appendChild(listItem);
    }
}

// Get Candidate Details function
async function getCandidateDetails() {
  const candidateAddress = document.getElementById(
    "candidateDetailsAddress"
  ).value;

  try {
    const details = await contract.getCandidateDetails(candidateAddress);
    document.getElementById(
      "output"
    ).innerText = `Candidate Details - Name: ${details[0]}, Votes: ${details[1]}`;
  } catch (err) {
    console.error(err);
    alert("Error fetching candidate details.");
    console.log("Error fetching candidate details.");
  }
}

// Get Winners function
async function getWinners() {
  try {
    const winners = await contract.getWinners();
    document.getElementById("output").innerText =
      "Winner(s): " + winners.join(", ");
  } catch (err) {
    console.error(err);
    alert("Error fetching winners.");
    console.log("Error fetching winners.");
  }
}

// Reset Voting function
async function resetVoting() {
  try {
    const tx = await contract.resetVoting();
    await tx.wait();
    alert("Voting reset successfully!");
    console.log("Voting reset successfully!");
  } catch (err) {
    console.error(err);
    alert("Error resetting voting.");
    console.log("Error resetting voting.");
  }
}

// window.onload = connectToMetaMask;
