import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {Background} from '../../images';

export const HomeContainer = styled.div`

    top: 0;
    width: 100%;
    height: 100% ;
    justify-content: space-around;
    align-content: center;
    background-position: center;
    image-rendering: auto;
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

    }

`

export const ApparrelButton = styled.a`

    display: flex ;
    padding: 1rem ;
    padding-top: 0 ;

`
export const HomeBanner = styled.img`
    
    display: block;
    width: 50vw;
    z-index: 555;
    border: 0;
    margin: 0;
    padding: 0 ;
    padding-left: 100px ;
    padding-bottom: 0 ;
    margin-bottom: none ;
    

    @media screen and (max-width: 960px) {
        display: block;
        width: 100%;
        padding: 0;
        padding-left: 50px ;
        padding-top: 7rem ;
        border-radius: 0;

    }

`
export const MenuButton = styled(Link)`

    display: flex ;
    border: none ;
    background: none ;
    font-size: xx-large ;
    color: black ;
    text-decoration: none ;
    text-shadow:  0 0 5px #fff, 0 0 10px #fff, 0 0 15px #c8dedc, 0 0 20px #a9dbd7 ;


    &:hover {
            cursor: pointer;
            color: aliceblue ;
        }

`
export const HomeButtonContainer = styled.div`

    display: flex ;
    position: absolute ;
    flex-direction: column ;
    justify-content: space-around ;
    align-items: center ;
    right: 2rem ;
    bottom: 4rem;

    @media screen and (max-width: 960px) {
        width: 60vw ;
        position: relative ;
        align-self: center ;
        justify-content: center ;
        right: auto;
        bottom: auto;
        padding: none ;
        padding-top: 2rem ;
        text-align: center ;
        flex-direction: column ;
        align-items: center ;
        align-content: center ;
    }
`

export const HomePhrase = styled.img`

    display: flex ;
    align-items: center ;
    justify-content: center ;
    padding: 0 ;
    margin: 0 ;
    border: none ;
    width: 850px ;

    @media screen and (max-width: 960px) {
        width: 60vw ;
    }

`

export const MintButton = styled(Link)`
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
export const HomeButton = styled.button`
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

export const ButtonImage = styled.img`
        display: block ;
        width: 300px;
        align-self: center ;
        justify-content: center ;
        align-content: center ;

        &:hover {
            cursor: pointer;
            width: 330px ;
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