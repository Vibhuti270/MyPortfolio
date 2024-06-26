// rafce
import React from 'react'
import './Services.css'
import Card from '../Card/Card'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Resume from "./resume.pdf"
import {themeContext} from '../../Context'
import { useContext } from 'react'
const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        <div className="awesome">
        <span style={{color:darkMode?'white':''}}>My Awesome</span>
        <span>Services</span>
        <span style={{color:darkMode?'white':''}}>I would love to work as an Web developer. Also possess graphic designing 
            <br />
            skills. Currently looking for an internship.
        </span>
        <a href={Resume} download><button className="button s-button">Download CV</button></a>
        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
     <div className="cards">
      <div class="carding"style={{left:'14rem'}}>
        <Card
        emoji={HeartEmoji}
        heading="Design"
        detail="Canva,Figma,Photoshop,Adobe"
        />
      </div>
      <div class="carding"style={{top:"12rem",left:'-4rem'}}>
        <Card
        emoji={Glasses}
        heading="Developer"
        detail="HTML,CSS,Javascript,React"
        />
      </div>
      <div class="carding"style={{top:"19rem",left:'12rem'}}>
        <Card 
        emoji={Humble}
        heading="Languages"
        detail="C++,python,Javascript,Java"
        />
      </div>
      <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
     </div>
     
     </div>
  )
}

export default Services