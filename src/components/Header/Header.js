import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Header = () => (
  <header className='site-header'>
    <a href='/'><h1 className='site-logo'>ShelterTech</h1></a>
    <nav className='site-nav'>
      <a href='/#initiatives'>
      	Initiatives
      </a>
      <a href='/#team'>
      	Team
      </a>
      <a href='/get-involved'>
      	Get Involved
      </a>
      <a href='/#contact'>
      	Contact Us
      </a>
      <a href='/#donate' className='btn'>
      	Donate
      </a>
    </nav>
  </header>
)

export default Header
