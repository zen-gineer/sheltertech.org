import React from 'react'

import ImageDonateBar from '../assets/donate-bar.png'
import './GetInvolvedView.scss'

import EventsList from './EventsList'
import PositionsList from './PositionsList'

export const GetInvolvedView = () => (
  <div className='get-involved'>
    <section className='hero'>
      <h1>Get Involved</h1>
    </section>
    <section className='become-a-volunteer'>
      <h2>Become a Volunteer</h2>
      <p>Create a lasting impact by helping the homeless find the services they desperately need.</p>
      <p>We run volunteer workshops, called Datathons, where you'll work side-by-side with Community Representatives — people who are currently or have previously been homeless — to verify information and make sure the 500+ services in our system are correct. </p>
      <p>This is a great way to learn about some of the struggles faced by people experiencing homelessness and have an immediate impact in their lives.</p>
      <p>For questions about Datathons, email agathe@sheltertech.org</p>
    </section>
    <section className='upcoming-events'>
      <h4>Upcoming Volunteer Events</h4>
      <EventsList />
    </section>
    <section className='become-a-volunteer'>
      <h2>Join The Team</h2>
      <p>Apply your skills to solving homelessness!</p>
      <p>With a commitment of a few hours a week, you can join Sheltertech, an all-volunteer organisation building tech products for the homeless and underserved communities of San Francisco.</p>
      <p>We're currently looking for the following skills, but no matter your experience, we'd love to hear from you. </p>
    </section>
    <section className='open-positions'>
      <h4>Open Positions</h4>
      <PositionsList />
      <a href='mailto:sarah@sheltertech.org' target='_blank'>Contact sarah@sheltertech.org for more info!</a>
    </section>
    <section className='donate' id='donate'>
      <h2>Donate</h2>
      <p>100% of donations go towards hiring low income and no income community members to improve our service data.</p>
      <div className='donate-image-container'>
        <div className='donate-image-text'>
          <small>Your support has allowed us to employ our formerly homeless partners for <strong>200</strong> hours.</small>
        </div>
        <img src={ImageDonateBar} alt='Donation Goals' className='donate-bar-image' />
      </div>
      <form action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top' id='donate-form'>
        <input type='hidden' name='cmd' value='_s-xclick' />
        <input type='hidden' name='hosted_button_id' value='K29R6HRSEDRF6' />
        <input className='donate-form-image' type='image' src='https://i.imgur.com/DqgcGsJ.png' border='0' name='submit' alt='PayPal - The safer, easier way to pay online!' />
        <img alt='' border='0' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1' />
      </form>

    </section>
    <section className='contact' id='contact'>
      <h2>Contact Us</h2>
      <p>Email</p>
      <h3>info@sheltertech.org</h3>
      <p>Twitter</p>
      <h3>@sheltertechSF</h3>
    </section>
    <footer className='site-footer'>
      <small>©2017 ShelterTech a 501c(3) non profit organisation • Made in San Francisco, California</small>
    </footer>
  </div>
)

export default GetInvolvedView
