import React from 'react'
import './EventsList.scss'

import ImageDinner from '../assets/dinner.jpg'
import ImageDatathon1 from '../assets/datathon.jpg'
import ImageDatathon2 from '../assets/datathon2.jpg'
import ImageDatathon3 from '../assets/datathon3.jpg'
import ImageDatathon4 from '../assets/datathon4.jpg'
import ImageDatathon5 from '../assets/datathon5.jpg'
import ImageDatathon6 from '../assets/datathon6.jpg'
import ImageHackathon from '../assets/hackathon.jpg'
import ImageBurstTheBubble from '../assets/burst-the-bubble.jpg'
import ImageMayoralEvent from '../assets/mayoral-event.jpg'
import ImageMusic from '../assets/music.jpg'
import ImageTacklingHomelessness from '../assets/tackling-homelessness.jpg'

export const EventsList = () => (

  <ul className='events-list'>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-june-16th-volunteer-opportunity-tickets-46767081600', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon6} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sat, Jun 16 10:30AM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Saint Anthony´s Foundation</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-june-30th-volunteer-opportunity-tickets-46773909021', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon5} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sun, Jun 17 10:30AM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Saint Anthony´s Foundation</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-july-1st-volunteer-opportunity-tickets-46774225969', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon4} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sat, Jun 30 01:00PM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Noe Valley Branch Library</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-june-16th-volunteer-opportunity-tickets-46767081600', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon3} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sun, Jul 1 01:00PM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Downtown SF</small>
      </div>
    </li>
  </ul>
)

export default EventsList
