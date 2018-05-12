import React from 'react'
import './EventsList.scss'

import ImageDatathon1 from '../../Events/assets/datathon.jpg'
import ImageDatathon2 from '../../Events/assets/datathon2.jpg'

export const EventsList = () => (

  <ul className='events-list'>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-may-19th-volunteering-opportunity-tickets-45091044528', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon1} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sat, May 19 1:00PM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Downtown San Francisco</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-may-20th-volunteering-opportunity-no-skills-required-tickets-45091072612', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon2} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sun, May 20 1:00PM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Downtown San Francisco</small>
      </div>
    </li>
  </ul>
)

export default EventsList
