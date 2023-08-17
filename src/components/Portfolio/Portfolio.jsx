import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Portfolio1 from "../../img/Md.Shakibur Rahman Shifat portfolio  (1).jpg";
import Portfolio2 from "../../img/Md.Shakibur Rahman Shifat portfolio  (2).jpg";
import Portfolio3 from "../../img/Md.Shakibur Rahman Shifat portfolio  (3).jpg";
import Portfolio4 from "../../img/Md.Shakibur Rahman Shifat portfolio  (4).jpg";
import Portfolio5 from "../../img/Md.Shakibur Rahman Shifat portfolio .jpg";
import Portfolio6 from "../../img/Md.Shakibur Rahman Shifat portfolio .png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Portfolio1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio5} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Portfolio6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
