import styled from 'styled-components';

export const HomeContainer = styled.div`

    height: 100% ;
    top: 0;
    width: 100vw;
    height: 100vh ;
    justify-content: space-around;
    align-content: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: auto;
    padding: 0;

    @media screen and (max-width: 960px) {
        width: 100vw;
        height: 200vh;

    }

`

export const HomeBanner = styled.img`
    
    display: block;
    width: 60vw;
    z-index: 555;
    border: 0;
    margin: 0;
    margin-left: 100px ;
    padding: 0 ;
    padding-bottom: 0 ;
    margin-bottom: none ;
    

    @media screen and (max-width: 960px) {
        display: absolute;
        width: 100vw;
        padding: 0;
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
            height: 70px ;
            width: 70vw;
        }


`

export const ButtonImage = styled.img`
        display: block ;
        height: 150px ;
        width: 300px;

        &:hover {
            height: 175px ;
            width: 330px ;
        }

    @media screen and (max-width: 960px) {
            height: 70px ;
            width: 70vw;
        }
`