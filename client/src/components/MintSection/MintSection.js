import React from 'react'
import {MetaMaskLogo , BaitImage, SharkTankVideo, MintButtonImage, ConnectedMetaMask, WalletConnectRemix, PlusImage, MinusImage} from '../../images';
import {CounterButton, CounterButtonImage, MintContainer, Image, WalletButtonContainer, Column, HomeLink, Title, SubHeading, Step, StepP, PurchaseButton, PurchaseButtonImage, WalletButton , ConnectWalletImage, ZIPSLogo , ErrorP, Video} from './mintSectionElements';

function MintSection(props) {

  
  return (
    <>
    <MintContainer>
      <HomeLink to="/home">
        <ZIPSLogo src={BaitImage}/>
      </HomeLink>
      <Column style={{justifyContent : "flex-start"}}>
        <Title>Mint Now! </Title>
        <Video src={SharkTankVideo} autoPlay={true} loop={true}/>
        <SubHeading>
        Zipsharks is an art focused community with shark mentality, Never looking down and always looking up and forward.  We use outlets in web3 and web2 to showcase our community and what they are creating and building. And support the pack
        </SubHeading>
      </Column>
      <Column style={{alignItems : "center"}}>
        <Step>
        <StepP>
            {props.isConnected ? props.address : "1. Connect Wallet" }
          </StepP>
          <WalletButtonContainer>
            <WalletButton onClick={props.connectWallet}>
            {props.isConnected? 
            <ConnectWalletImage src={ConnectedMetaMask} /> : 
            <ConnectWalletImage src={MetaMaskLogo}/>}
            </WalletButton>
            <WalletButton onClick={props.walletConnectClicked}>
              {props.isConnected ? <ConnectWalletImage src={WalletConnectRemix}/> :
              <ConnectWalletImage 
              src="https://raw.githubusercontent.com/WalletConnect/walletconnect-assets/master/Logo/Blue%20(Default)/Logo.svg"/> }
            </WalletButton>
          </WalletButtonContainer>
        </Step>
        <ErrorP> {props.errorMessage} </ErrorP>
        <Step style={{flexDirection : "row" , alignContent : 'center'}}>
        <CounterButton onClick={props.minusSetAmount}>
            <CounterButtonImage src={MinusImage}/>
        </CounterButton>
        <br/>
        <StepP style={{textAlign : "center" , padding : "20px"}}>x{props.amount}</StepP>
        <br/>
        <CounterButton onClick={props.plusSetAmount}>
            <CounterButtonImage src={PlusImage}/>
        </CounterButton>
        </Step>
        <Step>
          {props.isConnected ? 
          <PurchaseButton onClick={props.purchase}>
            <PurchaseButtonImage src={MintButtonImage}/>
          </PurchaseButton> 
          : <br/>}

          <StepP>
            2. Mint ZIPShark
          </StepP>
        </Step>
      </Column>
    </MintContainer>
    </>
  )
}

export default MintSection