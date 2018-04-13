import React from 'react'
import './EventsList.scss'

export const EventsList = () => (

  <ul className='events-list'>
    <a href='https://www.eventbrite.com/o/sheltertech-10605816644' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>21<span className='event-card--date--month'>APR</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Saturday, April 21, 2018  •  Runway SF</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/o/sheltertech-10605816644' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>22<span className='event-card--date--month'>APR</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Sunday, April 22, 2018  •  Runway SF</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/o/sheltertech-10605816644' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>5<span className='event-card--date--month'>MAY</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Saturday, May 5, 2018  •  TBD in SOMA</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/o/sheltertech-10605816644' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>6<span className='event-card--date--month'>MAY</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Sunday, May 6, 2018  •  TBD in SOMA</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/o/sheltertech-10605816644' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>19<span className='event-card--date--month'>MAY</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Saturday, May 19, 2018  •  TBD in SOMA</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/o/sheltertech-10605816644' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>20<span className='event-card--date--month'>MAY</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Sunday, May 20, 2018  •  TBD in SOMA</p>
        </div>
      </li>
    </a>
  </ul>
)

export default EventsList
