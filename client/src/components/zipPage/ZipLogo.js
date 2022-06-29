import React from "react";
import "./ZipLogo.css";
import pic from "../../images/big-shark-logo.PNG";




function ZipLogo() {
    return (
        <div className="zip-page">
        <img src={pic} className="zip-logo" />   
        </div>
    )
}


export default ZipLogo;