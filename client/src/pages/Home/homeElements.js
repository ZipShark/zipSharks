import styled from 'styled-components';

export const HomeContainer = styled.div`
    top: 0;
    width: 100vw;
    height: 100vh ;
    margin-top: 0 ;
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
        width: 100%;
    }
`