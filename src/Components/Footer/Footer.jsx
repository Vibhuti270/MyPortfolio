import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png"
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Twitter from '@iconscout/react-unicons/icons/uil-twitter'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width:"100%"}}/>
        <div className="f-content">
            <span>vibhutigupta270@gmail.com</span>
            <div className="f-icons">
              <a href="https://www.instagram.com/vibhuti.gupta27/"><Insta color='white' size='2rem'/></a>
              <a href="https://twitter.com/Vibhuti_27?t=g3wf-ea-GtRS4LUMef-qKg&s=08"><Twitter color='white' size='2rem'/></a>
              <a href="https://github.com/Vibhuti270"><Github color='white' size='2rem'/></a>
            </div>
        </div>
    </div>
  )
}

export default Footer