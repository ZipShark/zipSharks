import React from 'react';
import ZipPage from '../zipPage/ZipPage';
import { Link } from 'react-router-dom';




function LandingPage() {
    return (
        <>
        <ZipPage />
        <div className='land-page'>
            <Link to='/'>
                "Landing Page"
            </Link>
        </div>
        </>
        )
}


export default LandingPage;