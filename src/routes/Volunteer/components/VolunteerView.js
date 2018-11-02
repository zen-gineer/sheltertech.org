import React from 'react'

import './VolunteerView.scss'

import EventsList from './EventsList'
import PositionsList from './PositionsList'

export const VolunteerView = () => (
  <div className='volunteer'>
    <a className='anchor' id='events' />
    <div className='content'>
      <div className='content-bg' />
      <div className='content--header'>
        <h2>Volunteer Events</h2>
        <h3>Create lasting impact in just a few hours at an AskDarcel workshop where you'll work side-by-side with people who've experienced homelessness to verify information on our website and make sure the 700+ services in our system are accurate and easy to understand. </h3>
      </div>

      <EventsList />
      <div className='content--header'>
        <a className='anchor' id='positions' />
        <h2>Join the Team</h2>
        <h3>Apply your skills to solving homelessness!<br />With a commitment of a few hours a week, you can join Sheltertech, an all-volunteer organisation building tech products for the homeless and underserved communities of San Francisco.</h3>
      </div>
      <PositionsList />
    </div>
  </div>
)

export default VolunteerView
