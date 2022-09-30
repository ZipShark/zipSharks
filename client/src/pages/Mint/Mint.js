import React , {useState} from 'react'
import {MintSection, ThanksSection} from '../../components';
import Web3 from 'web3';
import {MerkleTree} from 'merkletreejs';
import KECCAK256 from 'keccak256';
import WalletConnectProvider from "@walletconnect/web3-provider";


function Mint() {

const abi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_chosenUri","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32[]","name":"_proof","type":"bytes32[]"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintLimit","outputs":[{"internalType":"uint16","name":"","type":"uint16"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"publicSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_baseUri","type":"string"}],"name":"setBaseUri","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"switchToPublic","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]
const [address ,setAddress] = useState("");
const [errorMessage , setMessage] = useState("");
const [isConnected , handleConnect] = useState(false);
const [price , setPrice] = useState(0.03);
const [transactionCompleted, setCompleted] = useState(false);
const [ethProvider, setProvider] = useState(null);
const [amount , setAmount]  = useState(1);

const plusSetAmount = () => {
    const newAmount = amount + 1;
    if (newAmount < 20) {
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

const addresses = [
    '0x35A423Eeb7f6c09e1243ACd282D16DbcD16bD3BB',
    '0x08ea56e1C828d036C47F4a5ff6fab304151997a6',
    '0xF5A6bD45240cD607A3673492B66C2A7675b8a030',
    '0xf605C2051eAe8A1Df5269b957B8F827330376D21',
    '0x4EF360873ce51c61Ec8e84c199485ED0d98362e4',
    '0x57EFfF592A0B5BAa95DAaF834d9b83CE787BF96f',
    '0xcc15cd03341298fec6ca20247d8dcf53a48c5b4c',
    '0xB7c1D7be762De63365Bba8900a42Fdc4478c7254',
    '0x9c7Fbea8199b753b35472C6AEf645E886CD1c44B',
    '0x4D1f2BC30D59EE4F96d5503fe27c3767919E3e8b',
    '0x15434d686e9F134d7c59CC8287Fc5E205291F2dA',
    '0x3E7386cd6dA5a3c8B53d68982DB9f19D9346d214',
    '0x9743cb7141f1FeFD7F509532C63a931Fc06D26a9',
    '0xf0094581ea56c6AF6be3D37AD6833Cd5eaB93A99',
    '0x889ca9161034ECC87D51677C0D775Fbe1D3499e5',
    '0x20241979c784291EdB8da2ABdCfC0DcdaFbA0286',
    '0xd78C751e0E9a48D3FF6F7c0B49cd4cA7b1285d58',
    '0xA64c82398926C7B588137845379d27336FeC2Dec',
    '0xB6dC3D02D5e5894FEF073811926e71d3aecdaC79',
    '0xac4Bc126Ea4D2a1e2bE965f0811c3c51E1817F91',
    '0x26f6055ae9cFb0FeDb23769FBEbC8B9Cf8f9a2aA',
    '0x1377b08cACd362c91Bdb323e7E1E0e51E3662Ea1',
    '0x6aD4360A42F65716A029d8Bec681742F41eA3008',
    '0x3177E76DA1f1474e22d6EfcEea2B9D8D0DFc5aAC',
    '0x6B0aB61F4929008a4daA2455Df41edB3591B5dF4',
    '0xdA2e6688ebA05A04CbB1d419d9C0e513D4d308a8',
    '0x3FFA4E4536b5bf0860e37576397C9BE1E19b7E27',
    '0x9B578c1696b30b85e36f36F679242D25283910E4',
    '0xCf1D8Ca8d8bcF178Cb8cc82936FF7E0247617166',
    '0xC5b2A4b1B5b2330dB1BB0649826bC0a227CB3774',
    '0x8Bce2A6d0158F645F989cc3E0a53be68696cC47D',
    '0x33dC8D0Db82417E176412356644BabCa4baEb4Aa',
    '0x1e5d3fCc27fCCDD8Bad4a803DFA93f81d48Aa5d8',
    '0x5BFc2418c1d4E70b30A1b065F69512D732709F10',
    '0x84dBd0CaB0B53283c8cbBC1e2f08302C685f0c19',
    '0x8aa3d9672E1a4CA4320d92f2929688c9BE246495',
    '0xe40c8deA5EdAB02C3B778605cf7b9dD1301062d0',
    '0x6dd01F10eD673e14063f311f01f631d47F213Cfc',
    '0x70eb216dA798C1F8f6C0F744998dfa271da60859',
    '0xf874cf97A52f4Cc35E110C5F62C0595fb51Df336',
    '0xDb03fD1255744A008B6f97059Be512a020C2CF18',
    '0x16B83c6346AF6e876586683B15B9EbcE3A2032Ec',
    '0x232fe3a7c0b29a2D143fF73A5e75A2514e625cCA',
    '0x2F77555f5565B18BcFC5Ee0AB406c24717Db1152',
    '0xA745BeF759F71037dAdd3f41CE6D87467217FC72',
    '0x3F73De69aa3D0814907b445AFB1eEBb2D73f7a59',
    '0x8293fCA53e855443408810e4a31f49D5C7c410AF',
    '0x90b9556994a7fCd0e3cb85AfB49993C113181043',
    '0x431973B9593a6F273512008670979d32cE4f756D',
    '0x96F2e855585300dA48dD7B52e8D3BB89f713DD09',
    '0xe1867Adc41a088A446cc486f9276A6cC99f6Fd58',
    '0x87b2dc356091C794490Cbbf661384C7E6343eA61',
    '0x16e99fBfaB71D64f16acb312056a331f83e9115f',
    '0x02f8f757957c5bf9170E1950278eAFd41F921E7A',
    '0xf21df340812629D44264474d478be0215Ea60eb6',
    '0x19A649D1bFbf3D7E6875168b5b75c525E3DbfD10',
    '0xBC4a1Eaabc94CB098219a9200F68Cf46f966D315',
    '0x85c317025eA1aD86c2F0FB0870E82605155a8e45',
    '0x3C70C66B112F20e07d146AB576bFb42CE44dA67F',
    '0x8665881EC88DA1C2992BBf6887c1663c3aDFa65e',
    '0xCEdCa72e848102ea27c02cfEb4f87feC4A0Dc25a',
    '0x369160fdebDAa47b4aAa2F753a6801d1F2a0c2aa',
    '0x5A0CbB8c5d89f0324930c5Fc7C0b734d0Fb74f92',
    '0xC2D0C7612079D72079fe48D50A06fB15D5276DF4',
    '0x0F615319D7CeeD5801faF6b13C9034DE9223a3eC',
    '0x0700D7Aa9D15d7aebaC2A22d1b73d537e664be80',
    '0xB586720BC5AF83CAF3bc35940cc33b302EeB1403',
    '0x0a5B7dD9Cc6d90f094d67210E5aFCaF148Fe7192',
    '0x49AAD19d4f36EB41dDF3d54151D5ba0c0531A888',
    '0x04a79a95c8DdEE7f32DEe222487223bD04EC186f',
    '0xf4145746E04595EFBD9991F4Ee55CcA206431702',
    '0x627023827cc28a980eE181c1A76e2CfDEE7a30D6',
    '0x2BC72Ed0845115325e485e4CDF18d5E829d9Be2E',
    '0x7bc99b025E408779180fcBb392396Aaf94759302',
    '0x0918cA7e812AFDfD63B2136c9b3CB8bD9A1247f4',
    '0x3bFDAfE279E0ED631E2ff49088CEc4037D13ef52',
    '0x258b320A7B9660018aaf20492736E40a369057f8',
    '0x09bef8F86FE8B2D5ff00293Dda140b4E1E150D62',
    '0xceB03E25d92c9f1B94e52800595898e432985Cd0',
    '0x5f38f3785F66704B1E1511aAaa17533e58413896',
    '0xEF6A82c3B0313b0Ae12BcecD57811f04a08bDa38',
    '0xaCE26CBD8Cf215855e7b5bb5627ec96D51a03818',
    '0x8DD6483ED1B5a4b2aAfFD515D5471609142307A6',
    '0x1426C63c876e86758486E64ac6d64B9Db0a0D94b',
    '0x6B3fFa34c184ebdcb4FEADc46D959cd47b2fF59B',
    '0x56A2B6F924324ACBFF99c872f6E2C0D41407ecF0',
    '0x786824DE170d9d4A98728C1d5634543cDdd50ab6',
    '0x0548F7C9Adfb137fF424f15219a63F27aB0007Cd',
    '0xa76ecE6d5950885E0323F08421AB6DD8c1F2965A',
    '0x1a9D2e47d65176d95Acf4dE3a3060202bEC0C8Cd',
    '0x44Ca29633FfF332c57676a66c70f60DD183e9Cf2',
    '0x10c5D48B6b4B64d2f6c5e58dFf55AaFaBdE17709',
    '0xBDB4b7FB55Ace6a7A1c1Da737C64Faa576a96856',
    '0xA15207145c4d7b338F4887808ae56C997E415388',
    '0x24877757fd4c9a029E702f12Af7dFE3FbD57820E',
    '0x995D697ac37916b79a6a00E07E2Df07BdCa7c1b5',
    '0xE073C61063492b972F380d68C607FD6dDBcf80f3',
    '0xd7EA9d3D4d5b1D78B0615ACe3804233c432b6F7A',
    '0x6436839075fE1fa2022729E6B9b32C214F3E83c5',
    '0x1236E0FfE9cf70Edd7c80bdb1676BdD0Ad1df0F8',
];

  const leaves = addresses.map(x => KECCAK256(x));
  const tree = new MerkleTree(leaves, KECCAK256, { sortPairs: true });
  const buf2hex = x => '0x' + x.toString('hex');
  const leaf = buf2hex(KECCAK256(address));
  let proof = tree.getProof(leaf).map(x => buf2hex(x.data));

  const web3 = new Web3(ethProvider);
  const contractAddress = "0xE7Ad8B249eB49fEd8cf2c129abD422d7c6D4425A";
  const contract = new web3.eth.Contract(abi , contractAddress);

  try {
    await contract.methods.mint(proof).send({from: address , value : web3.utils.toWei(String(price), "ether") });
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
    </>
  )
}

export default Mint