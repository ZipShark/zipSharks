import styled from "styled-components";

export const NavContainer = styled.nav`
justify-content: space-around ;
flex-direction: row-reverse ;
margin: 0 ;
padding-top: 0 ;
top: 0 ;
height: 0% ;
background: transparent ;
width: 100vw;
position: sticky;
z-index : 999;


    @media screen and (max-width: 960px) {
        position: relative ;
        }

`

export const Links = styled.ul`
    padding-left: 70vw ;
    align-items: flex-start ;
    display: flex ;
    flex-direction: row-reverse ;
    justify-content: space-between ;
    padding-right: 1rem ;

    
    @media screen and (max-width: 960px) {
            flex-direction: row ;
            padding: 0.5rem ;
        }

`

export const SocialLink = styled.a`

    z-index: 666;
    height: 80px;
    width: 70px;
    padding-top: 50px;
    margin: 0 ;
    color: black ;
    align-items: center;
    align-content: center;
    justify-content: center;
    display: block;
    &:hover {
        color: whitesmoke;
        cursor: pointer;
    }


`