import React from "react";
import {BsInstagram} from "react-icons/bs";
import {SlSocialLinkedin} from "react-icons/sl";
import {TfiFacebook} from "react-icons/tfi";
import "./social.css";
const Social=()=>{
    return(
        <>
        <div className="social">
         <div className="content">
            <div className="insta">
            <a href="https://www.instagram.com/invictus_dtu/"> <BsInstagram size={28} color='white'/></a>
            </div>
            <div className="linkedin">
            <a href="https://www.linkedin.com/company/invictus-dtu/">
            <SlSocialLinkedin size={28} color='white'/></a>
            </div>
            <div className="fb"><a href="https://www.facebook.com/InvictusDtu?mibextid=ZbWKwL">
            <TfiFacebook size={28} color='white'/></a>
            </div>
         </div>
        </div>
        </>
    )
}
export default Social;