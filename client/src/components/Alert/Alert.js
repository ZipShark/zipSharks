import React, {useState} from 'react'
import { FiTwitter } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import { CancelImage, MintInfo } from '../../images'
import {AlertContainer, AlertBlurb, AlertP, AlertLink, AlertImage, CancelButton} from './alertElements.js';

function Alert(props) {

  return (
    <>
    <AlertContainer>
        <CancelButton src={CancelImage} onClick={props.handleClick}/>
            
        <AlertBlurb>
            <AlertP>
            Come swim with Sharks, Spread the <br/> Word of the Pack on Twitter!
            </AlertP>
            <AlertLink href="https://twitter.com/intent/tweet?text=Join the pack and swim with @zipsharks. Get a bite out of the new site 🦈 https://zipsharks.com "> 
                <FiTwitter size={70}/>
            </AlertLink>
        </AlertBlurb>
        <AlertImage src={MintInfo}/>
        <AlertBlurb>
            <AlertP>
            Join Us in the Deep On Discord. <br/> Limited Allowlist Available Now...
            </AlertP>
            <AlertLink href='https://discord.gg/a4uP2TQDVe'>
                <TbBrandDiscord size={70}/>
            </AlertLink>
        </AlertBlurb>
    </AlertContainer>
    </>
  )
}

export default Alert