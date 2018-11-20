import { slide as Menu } from 'react-burger-menu'
import './SlideMenu.scss'
import React from 'react'
import ImageDonate from './assets/donate-btn.png'

class SlideMenu extends React.Component {
  showSettings (event) {
    event.preventDefault()
  }

  render () {
    return (
      <Menu right>
        <a href='/'>Programs</a>
        <a href='/events'>Events</a>
        <a href='/volunteer'>Volunteer</a>
        <a href='/team'>Team</a>
        <a href='/jobs'>Jobs</a>
        <a href='mailto:info@sheltertech.org'>Contact Us</a>
        <a href='https://medium.com/shelter-tech' target='_blank' rel='noopener'>Blog</a>
        <a>
          <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top' id='donate-form'>
            <input type='hidden' name='cmd' value='_s-xclick' />
            <input type='hidden' name='hosted_button_id' value='K29R6HRSEDRF6' />
            <input className='donate-form-button' type='image' src={ImageDonate} border='0' name='submit' alt='PayPal - The safer, easier way to pay online!' />
            <img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1' />
          </form>
        </a>
      </Menu>
    )
  }
}

export default SlideMenu
