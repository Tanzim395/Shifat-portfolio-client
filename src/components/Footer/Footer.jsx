import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span >Site Developed by Junaidul Kader Tanzim</span>
        <div className="f-icons">
          <a href="https://www.instagram.com/lw_shifat/" target="_blank" rel="noreferrer"> <Insta color="white" size={"3rem"} /></a>
          <a href="https://www.facebook.com/SRshifat52" target="_blank" rel="noreferrer"><Facebook color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
