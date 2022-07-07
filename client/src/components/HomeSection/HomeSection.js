import React, {useState} from 'react';
import {Alert} from '../../components';
import { Background, FeedButton, HomeTitle } from '../../images/index.js';
import {HomeContainer, HomeBanner, HomeButton, ButtonImage} from './homeSectionElements.js';
import {AudioTrack} from '../../audio';
import ReactAudioPlayer from 'react-audio-player';

function HomeSection() {

    const [click, setClick] = useState(false);
  
    const handleClick = () => {
      setClick(!click);
    }
  return (
    <>
    {click && <Alert handleClick={handleClick}/>}
    <HomeContainer>
        <HomeBanner src={HomeTitle}/>
        <HomeButton onClick={handleClick}>
            <ButtonImage src={FeedButton} style={{aspectRatio : `initial`}}/>
        </HomeButton>
        <ReactAudioPlayer
            src={AudioTrack}
            autoPlay={true}
            controls={false}
            loop={true}
            />
    </HomeContainer>
    </>
  )
}

export default HomeSection