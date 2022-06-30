import React from 'react'
import { FiTwitter } from 'react-icons/fi';
import { TbBrandDiscord } from 'react-icons/tb';
import { MintInfo } from '../../images'
import {AlertContainer, AlertBlurb, AlertP, AlertLink, AlertImage} from './alertElements.js';

function Alert() {
  return (
    <>
    <AlertContainer>
        <AlertBlurb>
            <AlertP>
            Come swim with Sharks, Spread the <br/> Word of the Pack on Twitter!
            </AlertP>
            <AlertLink> 
                <FiTwitter size={60}/>
            </AlertLink>
        </AlertBlurb>
        <AlertImage src={MintInfo}/>
        <AlertBlurb>
            <AlertP>
            Join Us in the Deep On Discord. <br/> Limited Allowlist Available Now...
            </AlertP>
            <AlertLink>
                <TbBrandDiscord size={60}/>
            </AlertLink>
        </AlertBlurb>
    </AlertContainer>
    </>
  )
}

export default Alert