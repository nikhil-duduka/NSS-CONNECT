import { ethers } from 'ethers';

// Sample contract ABI (you'd need to deploy this on Ethereum)
const contractABI = [
    "function issueCertificate(address recipient, string memory eventName, string memory date) public",
    "function getCertificate(address recipient) public view returns (string memory, string memory)"
];

const contractAddress = "YOUR_CONTRACT_ADDRESS";

export const connectWallet = async() => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        return signer;
    } catch (error) {
        console.error("Failed to connect wallet:", error);
    }
};

export const issueCertificate = async(recipient, eventName, date) => {
    const signer = await connectWallet();
    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const tx = await contract.issueCertificate(recipient, eventName, date);
    await tx.wait();
};

export const getCertificate = async(recipient) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const contract = new ethers.Contract(contractAddress, contractABI, provider);
    return await contract.getCertificate(recipient);
};