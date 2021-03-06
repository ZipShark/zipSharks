import styled from "styled-components";

export const GameContainer = styled.div`

    background-color: black ;
    z-index: 1000;
    position: fixed ;
    top: 15%;
    display: flex ;
    align-self: center;
    justify-content: space-evenly ;
    align-items: center;;
    height: 73vh ;
    width: 80vw ;
    flex-direction: column ;
    border-radius: 5rem;
    padding-bottom: 30px ;

    @media screen and (max-width: 960px) {
        top: 0 ;
        border-radius: 0;
        width: 100% ;
        height: 100% ;
    }

`

export const AlertBlurb = styled.div`
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-between ;
    align-self: center;
    justify-items: center ;
    text-align: center ;

    @media screen and (max-width: 960px) {
        flex-direction: column ;
    }
` 
export const AlertP = styled.p`
    color: whitesmoke ;
    font-size: 1.5rem ;
    text-decoration: none ;
    text-align: center ;

    @media screen and (max-width: 960px) {
        font-size: 1rem ;
    }
`

export const AlertLink = styled.a`

    height: 80px;
    width: 70px;
    margin: 0 ;
    padding-left: 20px ;
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
        color: #6E90AE;
    }

    @media screen and (max-width:960px) {
        padding-left: 0px ;
    }
` 

export const SharkGame = styled.div`
    display : block;
    `

    
export const CancelButton = styled.img`

    width: 80px;
    margin: 0 ;
    margin-left: 55rem ;
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
        color: gray ;
        cursor: pointer;
    }

    @media screen and (max-width: 960px) {
        margin-left: 0 ;
    }
`