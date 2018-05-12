import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Footer.scss'
import ImageDonate from './assets/donate-btn.png'

export const Footer = () => (
  <div className='site--footer'>
    <nav className='site--footer--nav'>
      <ul>
        <li><a href='/'>Programs</a></li>
        <li><a href='/events'>Events</a></li>
        <li><a href='/volunteer'>Volunteer</a></li>
        <li><a href='/team'>Team</a></li>
        <li><a href='mailto:info@sheltertech.org'>Contact Us</a></li>
        <li>
          <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top' id='donate-form'>
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input type='hidden' name='hosted_button_id' value='K29R6HRSEDRF6' />
            <input className='donate-form-button' type='image' src={ImageDonate} border='0' name='submit' alt='PayPal - The safer, easier way to pay online!' />
            <img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1' />
          </form>
        </li>
      </ul>
    </nav>
    <div className='site--footer--legal'>
      <ul>
        <li>ShelterTech is a 501 (c)(3)</li>
        <li>ein: 38-3984099</li>
        <li>made in san francisco</li>
        <li>© 2018 All Rights Reserved</li>
        <li><a href='/team'>like us on facebook</a></li>
      </ul>
    </div>
  </div>
)

export default Footer
