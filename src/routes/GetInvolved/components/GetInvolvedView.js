import React from 'react'

import ImageDonateBar from '../assets/donate-bar.png'

export const GetInvolvedView = () => (
  <div className='get-involved'>
    <section className='hero'>
      <h1>Get Involved</h1>
    </section>
    <section className='become-a-volunteer' />
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
