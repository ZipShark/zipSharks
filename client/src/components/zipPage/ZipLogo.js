import React from "react";
import "./ZipLogo.css";
import pic from "../../images/logo-shark.png";




function ZipLogo() {
    return (
        <div className="zip-page">
        <img src={pic} className="zip-logo" />   
        </div>
    )
}


export default ZipLogo;