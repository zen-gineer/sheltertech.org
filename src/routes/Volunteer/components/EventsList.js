import React, { Component } from 'react'
import './EventsList.scss'

import UPCOMING_EVENTS from '../../../components/EventsList/EventsList'

const EVENTS_LIST =
  UPCOMING_EVENTS.filter(n => n && n.show)

class EventsList extends Component {
  constructor () {
    super()

    this.state = {
      eventsLength: (EVENTS_LIST && EVENTS_LIST.length) || 0
    }
  }

  renderEventsItem (n) {
    return (
      <li key={n.id} className='event-card' onClick={() => window.open(n.link, '_blank')}>
        <p className='event-card--cost'>{n.cost}</p>
        <img className='event-card--image' src={n.img} />
        <div className='event-card--details'>
          <div>
            <p className='event-card--details--date'>{n.date}</p>
            <h4>{n.title}</h4>
            <p className='event-card--details--description'>{n.description}</p>
          </div>
          <small>{n.location}</small>
        </div>
      </li>
    )
  }

  render () {
    return (
      <ul className='events-list'>
        {EVENTS_LIST.filter(n => n && n.show).reverse().slice(0, 4).map(n => this.renderEventsItem(n))}
      </ul>
    )
  }

}

export default EventsList
