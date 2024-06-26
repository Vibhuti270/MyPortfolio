import React from 'react';
import './Intro.css';
import FloatingDiv from '../FloatingDiv/FolatingDiv';
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Vibhuti from "../../img/Vibhuti.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesimoji from "../../img/glassesimoji.png";
import {themeContext} from '../../Context'
import { useContext } from 'react'
function Intro(){

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
return(
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span style={{color:darkMode?'white':''}}>Hey! I'm</span>
                <span>Vibhuti Gupta</span>
                <span style={{color:darkMode?'white':''}}>A Web developer pursuing Computer Science Engineering from Bhagwan Parshuram Institute of Technology.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <a href="https://github.com/Vibhuti270"><img src={Github} alt="github.com"/></a>
                <a href="https://www.linkedin.com/in/vibhuti-gupta-ab841522b/"><img src={LinkedIn} alt="linkedin.com"/></a>
                <a href="https://www.instagram.com/vibhuti.gupta27/"><img src={Instagram} alt="instagram.com"/></a>
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt=""/>
            <img src={Vector2} alt=""/>
            <img src={Vibhuti} alt=""/>
            <img src={glassesimoji} alt=""/>
            <div className="floatDiv" style={{top:'-4%',left:'55%'}}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
            </div>
            <div className="floatDiv"style={{top:'14rem',left:'0rem'}}>
                <FloatingDiv image={thumbup} txt1='Graphic' txt2='Designer'/>
            </div>
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{background:'#C1F5FF',top:'17rem',width:'21rem',height:'11rem',left:'-9rem'}}></div>
        </div>
    </div>
)
}

export default Intro;