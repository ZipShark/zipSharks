import styled from "styled-components";
import { Background } from "../../images";

export const ThanksContainer = styled.div`
    top: 0;
    width: 100%;
    height: 100% ;
    justify-content: space-around;
    align-content: baseline;
    background-position: center;
    background-image: url(${Background});
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
        height: 170%;
        justify-content: space-around ;

    }

`


export const Title = styled.h1`
    font-size: 40px ;
    text-align: center ;
    color: black ;
`


export const Blurb = styled.div`
    display: flex ;
    flex-direction: column ;
    align-items: baseline ;
`

export const P = styled.p`
    font-size: 24px ;
    text-align: center ;
    color: black ;
`
export const SocialLink = styled.a`
    height: 80px;
    width: 70px;
    margin: 0 ;
    position: relative ;
    color: black ;
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
        color: whitesmoke;
    }
`