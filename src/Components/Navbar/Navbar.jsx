import React from 'react';
import './Navbar.css';
import Toggle from '../Toggle/Toggle'
import {Link} from 'react-scroll'
function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Vibhuti Gupta ✨</div>
            <Toggle />
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{listStyleType:'none'}}>
                    <Link spy={true} to='Navbar' smooth={true} activeClass='activeClass'>
                        <li>Home</li>
                    </Link>
                    <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
                    <li>Services</li>
                    </Link>
                    <Link spy={true} to='Education' smooth={true} activeClass='activeClass'>
                    <li>Education</li>
                    </Link>
                    <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
                    <li>Portfolio</li>
                    </Link>
                </ul>
            </div>
            <button className='button n-button'>Contact Me</button>
        </div>
    </div>
  )
}

export default Navbar
