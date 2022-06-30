import React from 'react';
import {HomeContainer} from './homeElements.js';
import {GlobalStyle, HomeSection, NavBar} from '../../components';



function Home() {    
    return (
        <>
        <HomeContainer id='home'>
            <GlobalStyle/>
            <NavBar/>
            <HomeSection/>
        </HomeContainer>
        </>
    )
}


export default Home;