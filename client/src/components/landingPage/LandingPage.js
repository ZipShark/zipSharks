import React from 'react';
import ZipLogo from '../zipPage/ZipLogo';
import { Link } from 'react-router-dom';
import "./LandingPage.css";




function LandingPage() {
    return (
        <>
        <div className='land-page'>
        <Link to='/'>
        <ZipLogo />
        </Link>
        </div>
        <div className='shark-background'>
        <h1>Zip Sharks</h1>
            </div>

        </>
        )
}


export default LandingPage;