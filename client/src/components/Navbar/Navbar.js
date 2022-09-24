import React, {useState} from 'react';
import {FiTwitter} from 'react-icons/fi';
import {TbBrandDiscord, TbLicense} from 'react-icons/tb'
import {SiMedium} from 'react-icons/si';
import { OpenSea } from '../../images/index.js';
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
          <SocialLink href='https://opensea.io/collection/fishingpass'>
            <TbLicense size={70}/>
          </SocialLink>
          <SocialLink href='https://medium.com/@d3fb0t/from-the-artist-d3fb0t-comes-zipsharks-an-artist-owned-and-ran-project-f1155734f4d1'>
            <SiMedium size={70}/>
          </SocialLink>
        </Links>
    </NavContainer>
    </>
  )
}

export default Navbar