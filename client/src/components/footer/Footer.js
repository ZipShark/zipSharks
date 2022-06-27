import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons'




function Footer() {

    return(
        <>
            <div className="footer-div">
                <h2 className="zip-footer-text">
                    ZipSharks Brought to byD3f
                </h2>
            
                <FontAwesomeIcon className="twitter-icon" icon={faTwitter} fa-xl></FontAwesomeIcon>
                <FontAwesomeIcon className="discord-icon" icon={faDiscord}></FontAwesomeIcon>
            </div>
            
        </>
    )
}

export default Footer;