import React, {useState} from 'react';
import { Background, FeedButton, HomeTitle } from '../../images/index.js';
import {HomeContainer, HomeBanner, HomeButton, ButtonImage} from './homeSectionElements.js';

function HomeSection() {

    const [click, setClick] = useState(false);
  
    const handleClick = () => {
      setClick(!click);
    }
  return (
    <>
    <HomeContainer style={{backgroundImage :`url(${Background})`}}>
        <HomeBanner src={HomeTitle}/>
        <HomeButton onClick={handleClick}>
            <ButtonImage src={FeedButton} style={{aspectRatio : `initial`}}/>
        </HomeButton>
    </HomeContainer>
    </>
  )
}

export default HomeSection