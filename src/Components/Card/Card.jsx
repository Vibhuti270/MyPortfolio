import React from 'react'
import './Card.css'
import {themeContext} from '../../Context'
import { useContext } from 'react'
const Card = ({emoji,heading,detail,detail2}) => {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
  return (
    <div className='card'>
        <img src={emoji} alt=""/>
        <span style={{color:darkMode?'white':''}}>{heading}</span>
        <span style={{color:darkMode?'white':''}}>{detail}</span>
        <span style={{color:darkMode?'white':''}}>{detail2}</span>
        <button className="c-button">LEARN MORE</button>
    </div>
  )
}

export default Card