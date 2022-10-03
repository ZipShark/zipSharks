import React , {useState} from 'react'
import {MintSection, ThanksSection} from '../../components';
import Web3 from 'web3';
import {MerkleTree} from 'merkletreejs';
import KECCAK256 from 'keccak256';
import WalletConnectProvider from "@walletconnect/web3-provider";
import abi from './abi.json';
import ReactAudioPlayer from 'react-audio-player';
import { MintTrack } from '../../audio';
import addressJSON from './addresses.json';



function Mint() {

const [address ,setAddress] = useState("");
const [errorMessage , setMessage] = useState("");
const [isConnected , handleConnect] = useState(false);
const [price , setPrice] = useState(0.03);
const [transactionCompleted, setCompleted] = useState(false);
const [ethProvider, setProvider] = useState(null);
const [amount , setAmount]  = useState(1);

const plusSetAmount = () => {
    const newAmount = amount + 1;
    if (newAmount <= 20) {
        setAmount(newAmount);
    } else {
        setMessage("Max mint is 20.");
    }
}

const minusSetAmount = () => {
    const newAmount = amount - 1;
    if (newAmount > 0) {
        setAmount(newAmount);
    } else {
        setMessage("Min mint is 1.");
    }
}



const walletConnectClicked = async () => {

//  Create WalletConnect Provider

console.log("Provider connected...");
//  Enable session (triggers QR Code modal)
const provider = new WalletConnectProvider({
  infuraId: "9c8f52fe7a634e15a284108a62c3b1ec",
});
await provider.enable();
console.log("Connected to Provider...");
const web3 = new Web3(provider);
console.log("Connected to web3...")
const accounts = await web3.eth.getAccounts();
setAddress(accounts[0]);
console.log("Successfully retrieved account!")
handleConnect(true);
setProvider(provider);

}

const purchase = async () => {

  // Generates Merkle Proof
  const leaves = addressJSON.map(x => KECCAK256(x));
  const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });
  const buf2hex = x => '0x' + x.toString('hex');
  const leaf = buf2hex(KECCAK256(address));
  let proof = tree.getProof(leaf).map(x => buf2hex(x.data));
  console.log(tree.getHexRoot());

  // Retrieves Contract
  const web3 = new Web3(ethProvider);
  const contractAddress = "0x1DE3d1e83e3E7972CCc48510B9C4B670CF86C3a0";
  const contract = new web3.eth.Contract(abi , contractAddress);

  try {
    await contract.methods
    .whitelistMint(proof)
    .send({from: address , 
      value : web3.utils.toWei(String(price*amount), 
      "ether") });
    setCompleted(true);
  } catch (error) {

    setMessage("Error occured. Please follow the steps and try again.");
  }
}

  const accountChangedHandler = (newAccount) => {
  setAddress(newAccount);
  handleConnect(true);
}

  const connectWallet = () => {

  if (typeof window.ethereum !== 'undefined') {
    
    requestAccount();
  }
}


  const requestAccount = () => {
    console.log('Requesting account...');

    if(window.ethereum) {
      console.log('detected');

      try {
        
        window.ethereum.request({method: "eth_requestAccounts"})
        .then(results => {
          accountChangedHandler(results[0]);
          setProvider(Web3.givenProvider);
        });
      } catch (error) {
        setMessage('Error connecting...');
      }

    }
    else {
      setMessage("Error.. Try installing Metamask...");
    }
  }

  return (
    <>
    {transactionCompleted ?  <ThanksSection/> : 
    <MintSection walletConnectClicked={walletConnectClicked} 
    connectWallet={connectWallet} 
    errorMessage={errorMessage} 
    purchase={purchase} 
    isConnected={isConnected} 
    address={address}
    amount={amount}
    plusSetAmount={plusSetAmount}
    minusSetAmount={minusSetAmount}
    /> }
    <ReactAudioPlayer
    src={MintTrack}
    autoPlay={true}
    controls={false}
    loop={true}
    volume={0.2}
    />
    </>
  )
}

export default Mint