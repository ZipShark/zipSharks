import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
* {
    scroll-behavior: smooth;
    box-sizing: border-box;
    margin: 0;
    margin-top: 0 ;
    padding: 0;
    font-family: 'Permanent Marker', cursive;
    }
`

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 991px) {
        padding-left: 30px;
        padding-right: 30px;
    }
`

export const Button = styled(Link)`
     
     color: #8789C0;
     padding: 2rem 3rem;
     text-align: center;
     justify-content: center;
     width: 100px;
     height: max-content;
     position: absolute;

     &:hover {
         color : #7CC6FE;
     }
`


export default GlobalStyle
