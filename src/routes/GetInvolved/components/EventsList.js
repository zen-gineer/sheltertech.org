import React from 'react'
import './EventsList.scss'

export const EventsList = () => (

  <ul className='events-list'>
    <a href='https://www.eventbrite.com/e/san-francisco-homelessness-datathon-march-24th-volunteering-opportunity-tickets-43800613815#' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>7<span className='event-card--date--month'>APR</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Saturday, April 7, 2018  •  Code for America</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/e/san-francisco-homelessness-datathon-march-24th-volunteering-opportunity-tickets-43800613815#' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>8<span className='event-card--date--month'>APR</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Sunday, April 8, 2018  •  Code for America</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/e/san-francisco-homelessness-datathon-march-24th-volunteering-opportunity-tickets-43800613815#' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>21<span className='event-card--date--month'>APR</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Saturday, April 21, 2018  •  Code for America</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/e/san-francisco-homelessness-datathon-march-24th-volunteering-opportunity-tickets-43800613815#' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>22<span className='event-card--date--month'>APR</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Sunday, April 22, 2018  •  Code for America</p>
        </div>
      </li>
    </a>
    <a href='https://www.eventbrite.com/e/san-francisco-homelessness-datathon-march-24th-volunteering-opportunity-tickets-43800613815#' target='_blank'>
      <li className='event-card'>
        <div className='event-card--date'>5<span className='event-card--date--month'>MAY</span></div>
        <div className='event-card--details'>
          <h4>San Francisco Homelessness Datathon</h4>
          <p>1-4PM  •  Saturday, May 5, 2018  •  Code for America</p>
        </div>
      </li>
    </a>
  </ul>
)

export default EventsList
