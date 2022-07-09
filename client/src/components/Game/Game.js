import React from 'react';
import { CancelImage } from '../../images';
import { CancelButton, GameContainer, SharkGame } from './gameElements.js';

function Game(props) {
  return (
    <>
    <GameContainer>
        <CancelButton src={CancelImage} onClick={props.handleClick}/>
        <SharkGame>
            <iframe width="900" height="400" src="https://flowlab.io/game/embed/2076483" frameborder="0" allowfullscreen></iframe>
        </SharkGame>
    </GameContainer>
    </>
  )
}

export default Game