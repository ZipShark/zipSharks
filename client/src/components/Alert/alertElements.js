import styled from "styled-components";

export const AlertContainer = styled.div`
    background-color: black ;
    z-index: 1000;
    position: fixed ;
    top: 15%;
    width: 0 ;
    display: flex ;
    align-self: center;
    justify-content: space-evenly ;
    align-items: center;;
    height: 73vh ;
    width: 70vw ;
    flex-direction: column ;
    border-radius: 5rem;
    padding-bottom: 30px ;
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
`

export const AlertBlurb = styled.div`
    display: flex ;
    flex-direction: row ;
    align-items: center ;
    justify-content: space-evenly ;
    align-self: center;
    justify-items: center ;
    text-align: center ;
` 

export const AlertP = styled.p`
    color: whitesmoke ;
    font-size: 1.5rem ;
    text-decoration: none ;
    text-align: center ;
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
    }
` 


export const AlertImage = styled.img`
    position: relative ;
    align-self: center;
    align-content: center ;
    height: 230px ;
    width: 230px ;
`