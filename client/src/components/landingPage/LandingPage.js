import React from 'react';
import ZipLogo from '../zipPage/ZipLogo';
import { Link } from 'react-router-dom';
import "./LandingPage.css";
import ZipHeader from '../zipHeader/ZipHeader';




function LandingPage() {
    return (
        <>
            <div className='land-page'>
                <Link to='/'>
                    <ZipLogo />
                </Link>
            </div>
            <ZipHeader />
            <div className='shark-background'>
                <div className='background-shade'></div>
            </div>

        </>
        )
}


export default LandingPage;