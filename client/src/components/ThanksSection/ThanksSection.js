import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { TbBrandDiscord } from 'react-icons/tb'
import {ThanksContainer, Title, Blurb, P, SocialLink} from './thanksSectionElements';

function ThanksSection() {
  return (
    <>
    <ThanksContainer>
        <Title>Thank you for purchasing a Fishing License</Title>
        <Blurb>
            <SocialLink href='https://twitter.com/zipsharks?s=11&t=TNBHC2R1kVyaHIFCYgNTLg'>
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
            Verify Your Ownership on Discord for your Free Shirt and Creative Labs Access!
            </P>
        </Blurb>
    </ThanksContainer>
    </>
  )
}

export default ThanksSection