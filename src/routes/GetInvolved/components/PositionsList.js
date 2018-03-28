import React from 'react'
import './PositionsList.scss'

export const PositionsList = () => (

  <ul className='positions-list'>
    <li className='positions-list--item'>
      <p className='positions-list--item--title'>Developers</p>
      <p className='positions-list--item--desc'>Full stack, Front End, Dev Ops</p>
    </li>
    <li className='positions-list--item'>
      <p className='positions-list--item--title'>Product Design</p>
      <p className='positions-list--item--desc'>Help us create products for some of the most vulnerable communities</p>
    </li>
    <li className='positions-list--item'>
      <p className='positions-list--item--title'>Analytics Manager</p>
      <p className='positions-list--item--desc'>Help us measure our impact</p>
    </li>
    <li className='positions-list--item'>
      <p className='positions-list--item--title'>Business Development</p>
      <p className='positions-list--item--desc'>Bridge the tech industry and homelessness service providers</p>
    </li>
    <li className='positions-list--item'>
      <p className='positions-list--item--title'>Legal</p>
      <p className='positions-list--item--desc'>Help us confidently manage our legal requirements with the Mayor's Office of SF</p>
    </li>
    <li className='positions-list--item'>
      <p className='positions-list--item--title'>Events</p>
      <p className='positions-list--item--desc'>Help us run a variety of events aimed at briding the tech and homeless communities</p>
    </li>
    <li className='positions-list--item'>
      <p className='positions-list--item--title'>People Ops</p>
      <p className='positions-list--item--desc'>Recruit more people to the cause of helping the homeless</p>
    </li>
  </ul>
)

export default PositionsList
