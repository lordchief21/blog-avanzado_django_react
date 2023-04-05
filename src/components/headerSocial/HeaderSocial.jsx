import React from "react";
import {BsLinkedin, BsGithub} from 'react-icons/bs'

export const HeaderSocial = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/cesar-augusto-villanueva-olivero/" target="_blank" rel="noreferrer"> <BsLinkedin/> </a>
            <a href="https://github.com/lordchief21" target="_blank" rel="noreferrer"> <BsGithub/> </a>
        </div>
    )
};

export default HeaderSocial;