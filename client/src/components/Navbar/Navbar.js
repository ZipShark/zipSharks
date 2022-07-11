import React, {useState} from 'react';
import {FiTwitter} from 'react-icons/fi';
import {TbBrandDiscord} from 'react-icons/tb'
import { NavContainer, Links , SocialLink } from './navbarElements.js';

const Navbar = () => {
  return (
    <>
    <NavContainer>
          <Links>
          <SocialLink  href="https://twitter.com/zipsharks?s=11&t=TNBHC2R1kVyaHIFCYgNTLg">
            <FiTwitter size={70}/>
          </SocialLink>
          <SocialLink href="https://discord.gg/a4uP2TQDVe" >
            <TbBrandDiscord size={70}/>
          </SocialLink>
        </Links>
    </NavContainer>
    </>
  )
}

export default Navbar