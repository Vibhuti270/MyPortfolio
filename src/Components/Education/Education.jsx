import React from 'react'
import './Education.css'
import Card from '../Card/Card'
import Graduation from "../../img/graduation-cap.svg"
import {themeContext} from '../../Context'
import { useContext } from 'react'
const Education = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className="education" id='Education'>
        <span style={{color:darkMode?'white':''}}>Education</span>
      <div className="cards e-cards">
      <div className="card1" >
        <Card 
        emoji={Graduation}
        heading="B.Tech CSE"
        detail="Bhagwan Parshuram Institute of Technology"
        detail2="2021-25"
        />
      </div>
      <div className="card2">
        <Card 
        emoji={Graduation}
        heading="XIIth"
        detail="Sarvodaya Kanya Vidyalaya no.1"
        detail2="2020-21"
        />
      </div>
      <div className="card3">
        <Card 
        emoji={Graduation}
        heading="Xth"
        detail="Sarvodaya Kanya Vidyalaya no.2"
        detail2="2018-19"
        />
      </div>
      <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>
     </div>
    </div>
  )
}

export default Education

