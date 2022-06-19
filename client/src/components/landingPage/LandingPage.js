import React from 'react';
import ZipLogo from '../zipPage/ZipLogo';
import { Link } from 'react-router-dom';
import About from '../about/About';
import "./LandingPage.css";
import ZipHeader from '../zipHeader/ZipHeader';
import MintDetails from '../mintDetails/MintDetails';




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
                <div className='background-shade'>
                    <h2>Sharks don't hunt in packs...but everyone notices when sharks gather.</h2>
                </div>
            </div>
            <About />
            <MintDetails />

        </>
        )
}


export default LandingPage;