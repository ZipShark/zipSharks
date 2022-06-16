import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css";



function Home() {
    return(
        <>
            <div className='home-page'>
                <Link to='/landing' className='home-tag'><h1>Zip Sharks</h1></Link>
            </div>
        </>
    ) 
}



export default Home;