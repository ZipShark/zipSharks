import { Link } from "react-router-dom";
import styled from "styled-components";
import { MintBackground } from "../../images";

export const MintContainer = styled.div`
    top: 0;
    width: 100vw;
    height: 100vh ;
    justify-content: space-around;
    align-content: center;
    background-position: center;
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
        height: 100vh;
        justify-content: space-around ;
        flex-direction: column-reverse ;

    }

` 

export const HomeLink = styled(Link)`
    display: block ;
`

export const ZIPSLogo = styled.img`

    display: block ;
    position: absolute ;
    width: 88px ;
    bottom: 50px;
    left: 50px ;

    @media screen and (max-width: 960px) {
        display: none ;
    }
`

export const Column = styled.div`
padding-top: 10rem ;
display: flex ;
flex-direction: column ;
justify-content: space-around ;
align-items: flex-start ;


@media screen and (max-width: 960px) {
    padding-top:  0;
    justify-content: space-between ;
}
` 

export const Title = styled.img`
    width: 500px ;
    position: absolute;
    justify-content: center ;
    align-content: center ;
    align-items: center ;
    color: aliceblue ;
    align-items: center ;
    display: flex ;
    flex-direction: column ;
    padding-bottom: 0 ;
    top: 0;
    left: 0;

    @media screen and (max-width: 960px) {
        width: 80vw ;
        position: relative ;
        top: auto;
        left: auto;
    }

` 

export const SubHeading = styled.h3`
    font-size: 24px ;
    text-align: flex-start ;
    color: aliceblue ;

    @media screen and (max-width: 960px) {
    font-size:  16px;
}
` 

export const Step = styled.div`
    display : flex;
    flex-direction: column ;
    align-items: center ;
`
export const StepP = styled.p`
    font-size: 14px ;
    text-align: center ;
    color: whitesmoke ;
    white-space: nowrap ;
    overflow: hidden ;
    text-overflow: ellipsis ;
    width: 90vw ;

`
export const ErrorP = styled.p`
    font-size: 14px ;
    text-align: center ;
    color: black ;

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
    width: 250px;
    align-self: center ;
    justify-content: center ;
    align-content: center ;

    &:hover {
        cursor: pointer;
        width: 275px ;
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
    right: 50px;
    bottom: 50px;
    position: absolute ;
    display: flex ;
    padding: 0 ;
    width: 20rem ;
    justify-content: center ;
    align-items: flex-start ;
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
            width: 30vw;

            &:hover {
                cursor: pointer;
                width: 33vw ;
            }
        }
` 