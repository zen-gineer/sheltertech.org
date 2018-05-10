import React from 'react'
import './EventsList.scss'

import ImageDatathon from '../assets/datathon.jpg'

export const EventsList = () => (

  <ul className='events-list'>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageDatathon} />
      <div className='event-card--details'>
        <p className='event-card--details--date'>Mon, May 14 6:30PM</p>
        <h4>Homeless Services Workshop</h4>
        <p className='event-card--details--description'>Volunteer event to improve our programs and work with the homeless</p>
        <small>Mission, San Francisco</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageDatathon} />
      <div className='event-card--details'>
        <p className='event-card--details--date'>Mon, May 14 6:30PM</p>
        <h4>Homeless Services Workshop</h4>
        <p className='event-card--details--description'>Volunteer event to improve our programs and work with the homeless</p>
        <small>Mission, San Francisco</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageDatathon} />
      <div className='event-card--details'>
        <p className='event-card--details--date'>Mon, May 14 6:30PM</p>
        <h4>Homeless Services Workshop</h4>
        <p className='event-card--details--description'>Volunteer event to improve our programs and work with the homeless</p>
        <small>Mission, San Francisco</small>
      </div>
    </li>
  </ul>
)

export default EventsList
