import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { TbBrandDiscord } from 'react-icons/tb'
import {ThanksContainer, Title, Blurb, P, SocialLink} from './thanksSectionElements';

function ThanksSection() {
  return (
    <>
    <ThanksContainer>
        <Title>Thank you for minting a Shark!</Title>
        <Blurb>
            <SocialLink 
            href='https://twitter.com/intent/tweet?url=https%3A%2F%2Fzipsharks.com&text=Just%20minted%20my%20@zipsharks%20and%20I%27m%20psyched%20to%20showcase%20the%20creativity%20this%20project%20brings%20to%20the%20Web3.0%20space.&hashtags=NFT%2CWeb3%2CWLTS%2CZIPSharks'>
                <FiTwitter size={50}/>
            </SocialLink>
            <P>
            Share your experience with the shark fam!
            </P>
        </Blurb>
        <Blurb>
            <SocialLink href='https://discord.gg/a4uP2TQDVe'>
                <TbBrandDiscord size={50}/>
            </SocialLink>
            <P>
            Verify Your Ownership on Discord for your access to our fashion, musical, and artistic outlets!
            </P>
        </Blurb>
    </ThanksContainer>
    </>
  )
}

export default ThanksSection