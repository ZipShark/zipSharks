import styled from 'styled-components';
import {Background} from '../../images';

export const HomeContainer = styled.div`

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

export const HomeBanner = styled.img`
    
    display: block;
    width: 55vw;
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

export const HomeButtonContainer = styled.div`

    display: flex ;
    flex-direction: row ;
    justify-content: space-around ;
    align-items: baseline ;

    @media screen and (max-width: 960px) {
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
    width: 500px ;

    @media screen and (max-width: 960px) {
        width: 60vw ;
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