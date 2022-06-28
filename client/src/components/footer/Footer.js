import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'




function Footer() {

    return(
        <>
            <div className="footer-div">
                <h2 className="zip-footer-text">
                    ZipSharks by D3f
                </h2>
            
                <a href="https://twitter.com/zipsharks">
                    <FontAwesomeIcon className="twitter-icon" icon={faTwitter} fa-xl></FontAwesomeIcon>
                </a>
                <a href="https://discord.gg/VtXWEUSq">
                    <FontAwesomeIcon className="discord-icon" icon={faDiscord}></FontAwesomeIcon>
                </a>
            </div>
            
        </>
    )
}

export default Footer;