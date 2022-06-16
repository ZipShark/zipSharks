import React from 'react';
// import LandingPageNav from './LandingPageNav';
import { Link } from 'react-router-dom';



// <LandingPageNav />

function LandingPage() {
    return (
        <div className='land-page'>
            <Link to='/'>
                "Landing Page"
            </Link>
        </div>
        )
}


export default LandingPage;