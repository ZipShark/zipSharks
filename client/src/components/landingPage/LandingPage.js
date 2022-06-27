import React from 'react';
import ZipLogo from '../zipPage/ZipLogo';
import { Link } from 'react-router-dom';
import About from '../about/About';
import "./LandingPage.css";
import ZipHeader from '../zipHeader/ZipHeader';
import Team from '../team/Team';
import MintDetails from '../mintDetails/MintDetails';
import Footer from '../footer/Footer';




function LandingPage() {
    return (
        <>
            <div className='full-background'>
                <div className='shark-background'>
                    <div className='land-page'>
                        <Link to='/'>
                            <ZipLogo />
                        </Link>
                    </div>
                        <ZipHeader />
                
                    <About />
                    <Team />
                    <MintDetails />
                    <Footer />
                </div>
            </div>
        </>
    )
}


export default LandingPage;