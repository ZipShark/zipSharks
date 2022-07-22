import React from 'react';
import { CancelImage } from '../../images';
import { AlertP, AlertBlurb, AlertLink, CancelButton, GameContainer, SharkGame } from './gameElements.js';
import { FiTwitter } from 'react-icons/fi';

function Game(props) {
  return (
    <>
    <GameContainer>
        <CancelButton src={CancelImage} onClick={props.handleClick}/>
        <SharkGame>
            <iframe width="900" height="400" src="https://flowlab.io/game/embed/2076483" frameborder="0" allowfullscreen></iframe>
        </SharkGame>
        <AlertBlurb>
          <AlertP>
          Come swim with Sharks, Spread the <br/> Word of the Pack on Twitter! <br/>
          </AlertP>
          <AlertLink href="https://twitter.com/intent/tweet?text=Join the pack and swim with @zipsharks. Get a bite out of the new site 🦈 https://zipsharks.com "> 
                <FiTwitter size={70}/>
            </AlertLink>
        </AlertBlurb>
    </GameContainer>
    </>
  )
}

export default Game