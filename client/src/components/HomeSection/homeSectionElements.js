import styled from 'styled-components';
import {Background} from '../../images';

export const HomeContainer = styled.div`

    top: 0;
    width: 100%;
    height: 100% ;
    justify-content: space-around;
    align-content: center;
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
        height: 100%;
        justify-content: space-evenly ;

    }

`

export const HomeBanner = styled.img`
    
    display: block;
    width: 60vw;
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

export const HomeButton = styled.button`
        color: transparent ;
        border: none;
        background-color: transparent ;
        border-radius: none ;
        align-items: center ;
        align-content: center ;
        align-self: center ;
        justify-content: center ;
        justify-items: center ;
        &:hover {
            cursor: pointer;
        }

        @media screen and (max-width: 960px) {
            height: 150px ;
            width: 70vw;
        }


`

export const ButtonImage = styled.img`
        display: block ;
        height: 150px ;
        width: 300px;
        align-self: center ;
        justify-content: center ;

        &:hover {
            height: 150px ;
            width: 330px ;
        }

    @media screen and (max-width: 960px) {
            padding-right: 50px ;
            height: 150px ;
            width: 80vw;

            &:hover {
                height: 150px ;
                width: 80vw ;
            }
        }
`