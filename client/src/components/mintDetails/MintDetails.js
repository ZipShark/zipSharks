import  React  from "react";
import "./MintDetails.css";


function MintDetails() {
    // const wallet = [walletAddress, setWalletAddre]

    function handleClick() {
        console.log("you clicked me!");
    }

    const connectWallet = async() => {
        if(window.ethereum) {
            const accounts = await window.ethereum.request({ method: 'eth_accounts'});

            const chainId = await window.ethereum.request({ method: 'eth_chainId'});

            if(chainId != '0x1') {
                alert("Please connect to Mainnet");
            } else {
                let wallet = accounts[0];
                // setWalletAddress(wallet);
            }

        } else {
            alert("Please install MetaMask");
        }
    }

    return(
        <>
            <button className="connect-button" onClick={connectWallet}>Connect Wallet</button>
            <button className="mint-button" onClick={handleClick}>Mint</button>

            <div className="mint-details">
                <h2> Date: TBA</h2>
                <h2> Supply: 5555</h2>
                <h2> Allowlist price: 0.0222 ETH</h2>
                <h2> Public Price: 0.0333 ETH</h2>
            </div>
            
        
        </>
    )

}



export default MintDetails;