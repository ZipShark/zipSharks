import { Link } from 'react-router-dom';
import styled from 'styled-components';



export const LandingContainer = styled.div`

    top: 0;
    width: 100vw;
    height: 100vh ;
    justify-content: space-around;
    align-content: center;
    background-color: black ;
    background-size: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: auto;
    padding: 0;

    @media screen and (max-width: 960px) {
        width: 100vw;
    }
`


export const LandingLink = styled(Link)`

    display: block ;

    &:hover {
        cursor: pointer;
    }
`

export const LandingTitle = styled.img`

    height: 100px ;
    width: 330px ;
    display: block ;

`