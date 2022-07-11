import React, {useState} from 'react';
import {Alert, Game} from '../../components';
import { Background, FeedButton, HomeTitle, AllowGameButton, HomeBlurbImage } from '../../images/index.js';
import {HomeContainer, HomeBanner, HomeButton, ButtonImage, HomeButtonContainer , HomePhrase } from './homeSectionElements.js';
import {AudioTrack} from '../../audio';
import ReactAudioPlayer from 'react-audio-player';

function HomeSection() {

    const [feedClick, setFeedClick] = useState(false);
    const [gameClick, setGameClick] = useState(false);

    const handleFeedClick = () => {
      setFeedClick(!feedClick);
    }

    const handleGameClick = () => {
      setGameClick(!gameClick);
    }

  return (
    <>
    {gameClick && <Game handleClick={handleGameClick}/>}
    {feedClick && <Alert handleClick={handleFeedClick}/>}
    <HomeContainer>
        <HomeBanner src={HomeTitle}/>
        <HomePhrase src={HomeBlurbImage}/>
        <HomeButtonContainer>
          <HomeButton onClick={handleFeedClick}>
              <ButtonImage src={FeedButton} style={{aspectRatio : `initial`}}/>
          </HomeButton>
          <HomeButton onClick={handleGameClick}>
              <ButtonImage src={AllowGameButton} style={{aspectRatio : `initial`}}/>
          </HomeButton>
        </HomeButtonContainer>
        <ReactAudioPlayer
            src={AudioTrack}
            autoPlay={true}
            controls={false}
            loop={true}
            volume={0.2}
            />
    </HomeContainer>
    </>
  )
}

export default HomeSection