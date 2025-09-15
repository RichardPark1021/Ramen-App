import React from 'react';
import './Footer.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer-content'>
          <h3>Ichiman Ramen</h3>
          <p>Made by Richard Park</p>
        </div>
        <div className='social'>
          <FontAwesomeIcon icon={faXTwitter}/>
          <FontAwesomeIcon icon={faGoogle}/>
          <FontAwesomeIcon icon={faInstagram}/>
        </div>

        <div className='footer-bottom'>
          <div className='footer-left'>
            <p>copyright &copy; Ichiman Ramen</p>
          </div>
          <div className='footer-right'>
            <ul>
              <li>
                <NavLink to="/About">About</NavLink>
              </li>
              <li>
                <NavLink to="/Menu">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/Contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer