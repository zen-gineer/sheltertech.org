import React from 'react'
import { IndexLink, Link } from 'react-router'
import SlideMenu from './SlideMenu'
import './Header.scss'
import ImageDonate from './assets/donate-btn.png'

export const Header = () => (
  <header className='site--header'>
    <div className='site--header--wrapper'>
      <h1 className='site--header--logo'><a href='/' >ShelterTech</a></h1>
      <nav className='site--header--nav'>
        <SlideMenu />
        <ul>
          <li><a href='/'>Programs</a></li>
          <li><a href='/events'>Events</a></li>
          <li><a href='/volunteer'>Volunteer</a></li>
          <li><a href='/jobs'>Jobs</a></li>
          <li><a href='/team'>Team</a></li>
          <li><a href='mailto:info@sheltertech.org'>Contact Us</a></li>
          <li><a href='https://medium.com/shelter-tech' target='_blank' rel='noopener'>Blog</a></li>
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
    </div>
  </header>
)

export default Header
