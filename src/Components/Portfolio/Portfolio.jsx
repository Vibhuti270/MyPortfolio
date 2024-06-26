import React from 'react'
import './Portfolio.css';
import {Swiper,SwiperSlide} from 'swiper/react';
import Flipkart from "../../img/flipkart.png"
import Netflix from "../../img/netflix.png"
import Spotify from "../../img/spotify.png"
import ToDo from "../../img/todo.png"
import 'swiper/css'
import {themeContext} from '../../Context'
import { useContext } from 'react'
const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
   <div className="portfolio" id='Portfolio'>
    {/* headiing */}
    <span style={{color:darkMode?'white':''}}>Some Projects</span>
    <span>Portfolio</span>
    {/* slider */}
    <Swiper 
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className='portfolio-slider'
    >
      <SwiperSlide>
        <img src={Flipkart} alt="flipkart clone"/>
      </SwiperSlide>
      <SwiperSlide>
      <img src={Netflix} alt="netflix clone" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={Spotify} alt="spotify clone" />
      </SwiperSlide>
      <SwiperSlide>
      <img src={ToDo}alt="todo list backend project" />
      </SwiperSlide>
    </Swiper>
   </div>
  )
}

export default Portfolio
