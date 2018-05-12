import React from 'react'

import './TeamView.scss'

import TeamList from './TeamList'

export const TeamView = () => (
  <div className='team'>
    <div className='content'>
      <div className='content-bg' />
      <div className='content--header'>
        <h2>Team</h2>
        <h3>Our award winning all-volunteer team is redefining what it means to give back. Want to join? <a href='/volunteer'>Learn more here.</a></h3>
      </div>

      <TeamList />
    </div>
  </div>
)

export default TeamView
