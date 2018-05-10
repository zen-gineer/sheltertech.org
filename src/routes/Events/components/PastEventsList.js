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
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/what-would-you-tell-the-next-mayor-about-homelessness-in-sf-tickets-45281357760', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageMayoralEvent} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Mon, May 7 6:30PM</p>
          <h4>Homelessness and the Mayoral Election</h4>
          <p className='event-card--details--description'>What Would You Tell the Next Mayor about Homelessness?</p>
        </div>
        <small>FeelGood Enterprises</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-may-6th-volunteer-event-tickets-45090922162', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon3} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sun, May 6 10:00AM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>590 Sutter Street</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-may-6th-volunteer-event-tickets-45090922162', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon3} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sat, May 5 6:30PM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Noe Valley Library</small>
      </div>
    </li>
    <li className='event-card'>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageHackathon} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sat, Apr 28 10:00AM</p>
          <h4>AngelHack Hackathon</h4>
          <p className='event-card--details--description'>Hack for good! Build a project on ShelterTech's human services API at our first hackathon</p>
        </div>
        <small>Fremont</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/e/san-francisco-homelessness-datathon-april-22nd-volunteering-opportunity-tickets-45090816847', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon4} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sun, Apr 22 1:00PM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Runway</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Volunteer Event</p>
      <img className='event-card--image' src={ImageDatathon5} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sat, Apr 21 1:00PM</p>
          <h4>Homeless Services Workshop</h4>
          <p className='event-card--details--description'>Work with the homeless and improve our program offerings at this volunteer event</p>
        </div>
        <small>Runway</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://www.eventbrite.com/o/sheltertech-10605816644', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageMusic} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Sun, Apr 15 12:00PM</p>
          <h4>Concert in a Shelter</h4>
          <p className='event-card--details--description'>The SF Symphony Orchestra is playing for people experiencing homelessnss at a local shelter</p>
        </div>
        <small>Saint Anthony's</small>
      </div>
    </li>
    <li className='event-card' onClick={() => window.open('https://eatfeastly.com/meals/d/191326028/sheltertech-dinner-the-union-2/', '_blank')}>
      <p className='event-card--cost'>Free</p>
      <img className='event-card--image' src={ImageDinner} />
      <div className='event-card--details'>
        <div>
          <p className='event-card--details--date'>Mon, Feb 19 7:30PM</p>
          <h4>Dinner with Your Neighbour</h4>
          <p className='event-card--details--description'>Share a table and a meal with housed and unhoused residents of SF</p>
        </div>
        <small>Russian Hill</small>
      </div>
    </li>
  </ul>
)

export default EventsList
