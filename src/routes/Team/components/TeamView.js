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

      {/* <div className='content--header'>
        <h2>Board Members & Advisory Members </h2>
        <h3>Our board believes in the power of diversity and inclusion. We bring together a wealth of experience from the tech community, non-profits, government, large corporations, and those who've experienced homelessness to truly create a new kind of organisation.</h3>
      </div>

      <BoardList /> */}
    </div>
  </div>
)

export default TeamView
