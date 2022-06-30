import React from 'react'
import {LandingContainer, LandingLink, LandingTitle} from './landingElements.js';
import {LandingImage} from '../../images';


function LandingSection() {
  return (
    <>
    <LandingContainer>
        <LandingLink to='/home'>
            <LandingTitle src={LandingImage}/>
        </LandingLink>
    </LandingContainer>
    </>
  )
}

export default LandingSection