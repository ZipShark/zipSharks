import React from 'react'
import {MetaMaskLogo , BaitImage, FishingLicense, MintButtonImage, ConnectedMetaMask, MintNowImage} from '../../images';
import {MintContainer, Image, Column, HomeLink, Title, SubHeading, Step, StepP, PurchaseButton, PurchaseButtonImage, WalletButton , ConnectWalletImage, ZIPSLogo , ErrorP} from './mintSectionElements';

function MintSection(props) {
  return (
    <>
    <MintContainer>
      <HomeLink to="/home">
        <ZIPSLogo src={BaitImage}/>
      </HomeLink>
      <Column>
        <Title src={MintNowImage}/>
        <SubHeading>
         Access to the Zipsharks Creative lab, Apparel Drops <br/> & a Pass to Mint Zipsharks for Free. 
        </SubHeading>
        <Step>
          <WalletButton onClick={props.connectWallet}>
          {props.isConnected? 
          <ConnectWalletImage src={ConnectedMetaMask} /> : 
          <ConnectWalletImage src={MetaMaskLogo}/>}
          </WalletButton>
          <StepP>
            {props.isConnected ? props.address : "1. Connect Wallet" }
          </StepP>
        </Step>
        <ErrorP> {props.errorMessage} </ErrorP>
        <Step>
          <PurchaseButton onClick={props.purchase}>
            <PurchaseButtonImage src={MintButtonImage}/>
          </PurchaseButton>
          <StepP>
            2. Purchase a Fishing License
          </StepP>
        </Step>
      </Column>
    </MintContainer>
    </>
  )
}

export default MintSection