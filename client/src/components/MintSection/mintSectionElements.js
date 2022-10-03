import { Link } from "react-router-dom";
import styled from "styled-components";
import { MintBackground } from "../../images";


export const CounterButton = styled.button`
    width: 60px ;
    display: flex ;
    background: none ;
    color: none ;
    border: none ;
    align-items: center ;
    &:hover {
        cursor: pointer;
        width : 70px
    }

    @media screen and (max-width: 960px) {
        width: 10vw ;
    }
`


export const CounterButtonImage = styled.img`
    display: flex ;
    width: 80px ;
    align-items: center ;

    @media screen and (max-width:960px) {
        /* width: 10%; */
    }
`
export const MintContainer = styled.div`
    top: 0;
    width: 100vw;
    height: 100vh ;
    justify-content: space-around;
    align-content: center;
    background-position: center;
    /* background-color: black ; */
    background-image: url(${MintBackground});
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: flex-start;
    align-items: center;
    z-index: auto;
    padding: 0;
    margin: 0 ;

    @media screen and (max-width: 960px) {
        width: 100vw;
        height: 250vh;
        align-items: center ;
        text-align: center ;
        justify-content: space-around ;
        flex-direction: column ;

    }

` 

export const Video = styled.video`

    width: 25vw ;
    padding: 1rem ;
    align-self: center ;
    border-radius: 3rem ;

    @media screen and (max-width: 960px) {

        width: 80vw ;
    }
`

export const HomeLink = styled(Link)`
    display: block ;
`

export const ZIPSLogo = styled.img`

    display: block ;
    position: absolute ;
    width: 88px ;
    bottom: 30px;
    left: 30px ;

    &:hover {
        width: 99px ;
    }
    @media screen and (max-width: 960px) {
        display: none ;
    }
`

export const Column = styled.div`
display: flex ;
flex-direction: column ;
justify-content: space-around ;
align-items: left ;
border-radius: 5rem ;
padding: 30px ;


@media screen and (max-width: 960px) {
    padding-top:  0;
    align-items: center ;
    justify-content: space-between ;
}
` 

export const Title = styled.h1`
    
    font-size: 60px ;
    text-shadow : 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #c8dedc, 0 0 20px #a9dbd7;
    justify-content: center ;
    align-content: center ;
    align-items: center ;
    color: black ;
    text-align: left ;
    align-items: flex-start ;
    display: flex ;
    flex-direction: column ;
    padding: 2rem ;
    top: 0;
    left: 0;

    @media screen and (max-width: 960px) {
        width: 80vw ;
        position: relative ;
        top: auto;
        left: auto;
        text-align: center ;

    }

` 

export const SubHeading = styled.h3`
    font-size: 24px ;
    text-align: flex-start ;
    width: 50vw ;
    color: aliceblue ;
    padding: 2rem ;

    @media screen and (max-width: 960px) {
    font-size:  16px;
    width: 80vw ;
}
` 

export const Step = styled.div`
    display : flex;
    flex-direction: column ;
    align-items: center ;
    justify-content: space-between ;
    
`
export const StepP = styled.p`
    font-size: large ;
    text-align: center ;
    color: aliceblue ;
    white-space: nowrap ;
    overflow: hidden ;
    text-overflow: ellipsis ;

    @media screen and (max-width: 960px) {
        max-width: 80vw;
    }

`
export const ErrorP = styled.p`
    font-size: 14px ;
    text-align: center ;
    color: black ;
    text-shadow : 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #c8dedc, 0 0 20px #a9dbd7;


`

export const WalletButtonContainer = styled.div`


    display: flex ;
    flex-direction: row ;
    justify-content: space-around ;

    @media screen and (max-width: 960px) {
        flex-direction: column ;
    }
`
export const WalletButton = styled.button`

        color: transparent ;
        border: none;
        background-color: transparent ;
        border-radius: none ;
        flex-direction: column ;
        align-items: center ;
        align-content: center ;
        align-self: center ;
        justify-content: center ;
        padding-top: 0 ;
        justify-items: center ;
        &:hover {
            cursor: pointer;
        }

        @media screen and (max-width: 960px) {
            width: 70vw;
        }
`
export const PurchaseButton = styled.button`    
        
        color: transparent ;
        border: none;
        background-color: transparent ;
        border-radius: none ;
        align-items: center ;
        align-content: center ;
        align-self: center ;
        justify-content: center ;
        padding: 1rem ;
        padding-top: 0 ;
        justify-items: center ;
        &:hover {
            cursor: pointer;
        }

        @media screen and (max-width: 960px) {
            width: 70vw;
        }

` 

export const PurchaseButtonImage = styled.img`

    display: block ;
    width: 200px;
    align-self: center ;
    justify-content: center ;
    align-content: center ;

    &:hover {
        cursor: pointer;
        width: 220px ;
    }

    @media screen and (max-width: 960px) {
            padding: 30px ;
            width: 60vw;

            &:hover {
                cursor: pointer;
                width: 60vw ;
            }
        }
` 

export const Image = styled.img`
    display: flex ;
    padding: 0 ;
    width: 20rem ;
    justify-content: center ;
    align-items: center ;
    align-self: center ;
`


export const ConnectWalletImage = styled.img`


    display: block ;
    width: 100px;
    align-self: center ;
    justify-content: center ;
    align-content: center ;

    &:hover {
        cursor: pointer;
        width: 110px ;
    }

    @media screen and (max-width: 960px) {
            padding: 30px ;
            width: 50vw;

            &:hover {
                cursor: pointer;
                width: 33vw ;
            }
        }
` 