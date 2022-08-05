import styled from "styled-components";
import { MintBackground } from "../../images";

export const ThanksContainer = styled.div`
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
    flex-direction: column;
    align-items: center;
    z-index: auto;
    padding: 0;
    margin: 0 ;

    @media screen and (max-width: 960px) {
        width: 100%;
        height: 100vh;
        justify-content: space-around ;

    }

`


export const Title = styled.h1`
    font-size: 40px ;
    padding-top: 4rem ;
    text-align: center ;
    color: whitesmoke ;
`


export const Blurb = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: center ;
`

export const P = styled.p`
    font-size: 24px ;
    text-align: center ;
    color: whitesmoke ;
`
export const SocialLink = styled.a`
    height: 80px;
    width: 70px;
    margin: 0 ;
    position: relative ;
    color: whitesmoke ;
    align-items: center;
    align-content: center;
    justify-items: center ;
    justify-self: center ;
    align-self: center ;
    text-align: center ;
    justify-content: center;
    display: block;

    &:hover {
        cursor: pointer;
        color: black;
    }
`