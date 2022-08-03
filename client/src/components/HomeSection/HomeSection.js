import React, {useState} from 'react';
import {Game, Alert} from '../../components';
import { HomeTitle, AllowGameButton, HomeBlurbImage, MintButtonImage, FeedButton } from '../../images/index.js';
import {HomeContainer, HomeBanner, HomeButton, ButtonImage, HomeButtonContainer , HomePhrase, MintButton } from './homeSectionElements.js';
import {AudioTrack} from '../../audio';
import ReactAudioPlayer from 'react-audio-player';

function HomeSection() {

    const [alertClick, setAlertClick] = useState(false);

    const handleAlertClick = () => {
      setAlertClick(!alertClick);
    }

  return (
    <>
    {alertClick && <Alert handleClick={handleAlertClick}/>}
    <HomeContainer>
        <HomeBanner src={HomeTitle}/>
        <HomePhrase src={HomeBlurbImage}/>
        <HomeButtonContainer>
          {/* <MintButton to='/mint'>
            <ButtonImage src={MintButtonImage} />
          </MintButton> */}
          <HomeButton onClick={handleAlertClick}>
              <ButtonImage src={FeedButton} style={{aspectRatio : `initial`}}/>
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