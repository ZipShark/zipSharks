import React from 'react';
import { FiTwitter } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import { CancelImage, ShirtImage  } from '../../images'
import {AlertContainer, AlertBlurb, AlertP, AlertLink, AlertImage, CancelButton, ChumImage} from './alertElements.js';

function Alert(props) {

  return (
    <>
    <AlertContainer>
        <CancelButton src={CancelImage} onClick={props.handleClick}/>   
        <AlertImage src={ShirtImage}/>
        <AlertBlurb>
            <AlertP>
            Allowlist Closted... Stay tuned <br/> on Twitter and Discord <br/>
            </AlertP>
        </AlertBlurb>
        <AlertBlurb>
            <AlertLink href="https://twitter.com/intent/tweet?text=Join the pack and swim with @zipsharks. Get a bite out of the new site 🦈 https://zipsharks.com "> 
                <FiTwitter size={70}/>
            </AlertLink>
            <AlertLink href='https://discord.gg/a4uP2TQDVe'>
                <TbBrandDiscord size={70}/>
            </AlertLink>
        </AlertBlurb>
    </AlertContainer>
    </>
  )
}

export default Alert