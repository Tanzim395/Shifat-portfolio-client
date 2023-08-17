import React, { useContext } from "react";
import Typewriter from 'typewriter-effect';
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Shifat from "../../img/shefat.png";
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Youtube from "../../img/youtube.png";
import LinkedIn from "../../img/linkedin.png";
import Facebook from "../../img/Facebook.png"
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* darkmode changes */}
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Shakibur Rahman Shifat</span>
          <Typewriter
            options={{
              strings: ['Marketing Executive', 'Content Creator', 'Business Developer'],
              autoStart: true,
              loop: true,
            }}
          />
          {/* <span>
            Marketing Executive, Content Creator, Business Developer
          </span> */}
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <a href="https://www.facebook.com/SRshifat52" target="_blank" rel="noreferrer"><img src={Facebook} alt="" /></a>
          <a href="https://www.linkedin.com/in/md-shakibur-rahman-shifat/ " target="_blank" rel="noreferrer"><img src={LinkedIn} alt="" /></a>
          <a href="https://www.instagram.com/lw_shifat/" target="_blank" rel="noreferrer"><img src={Instagram} alt="" /></a>
          <a href="https://www.youtube.com/channel/UCAZEGHqfwVRjvTb9G3xcPbg" target="_blank" rel="noreferrer"><img src={Youtube} alt="" /></a>
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Shifat} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Digital" text2="Marketer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Content" text2="Creator" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
