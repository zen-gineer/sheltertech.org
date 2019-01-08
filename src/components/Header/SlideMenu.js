import { slide as Menu } from 'react-burger-menu'
import './SlideMenu.scss'
import React from 'react'

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
        <a className='donate-button' href='/donate'>Donate</a>
      </Menu>
    )
  }
}

export default SlideMenu
