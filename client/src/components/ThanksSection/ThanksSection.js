import React from 'react'
import { FiTwitter } from 'react-icons/fi'
import { TbBrandDiscord } from 'react-icons/tb'
import {ThanksContainer, Title, Blurb, P, SocialLink} from './thanksSectionElements';

function ThanksSection() {
  return (
    <>
    <ThanksContainer>
        <Title>Thank you for purchasing a Fishing License</Title>
    </ThanksContainer>
    <Blurb>
        <SocialLink>
            <FiTwitter size={50}/>
        </SocialLink>
        <P>
        Share your experience with the shark fam!
        </P>
    </Blurb>
    <Blurb>
        <SocialLink>
            <TbBrandDiscord size={50}/>
        </SocialLink>
        <P>
        Verify Your Ownership on Discord for your Free Shirt and Creative Labs Access!
        </P>
    </Blurb>
    </>
  )
}

export default ThanksSection