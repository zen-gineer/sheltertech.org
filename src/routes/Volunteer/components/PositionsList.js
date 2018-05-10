import React from 'react'
import './PositionsList.scss'

export const PositionsList = () => (
  <div className='positions'>
    <h3>Current Needs</h3>

    <ul className='positions-list'>

      <li className='positions-list--legend'>
        <p>Positions</p>
        <p>Description</p>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:sarah@sheltertech.org?subject=Development Volunteer' >Development</a>
        <a href='mailto:sarah@sheltertech.org?subject=Development Volunteer' className='positions-list--item--desc'>Full stack, Front End, Dev Ops</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:sarah@sheltertech.org?subject=Product Design Volunteer' >Product Design</a>
        <a href='mailto:sarah@sheltertech.org?subject=Product Design Volunteer' className='positions-list--item--desc'>Help us create products for some of the most vulnerable communities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:sarah@sheltertech.org?subject=Analytics Manager Volunteer' >Analytics Manager</a>
        <a href='mailto:sarah@sheltertech.org?subject=Analytics Manager Volunteer' className='positions-list--item--desc'>Help us measure our impact</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:sarah@sheltertech.org?subject=Business Development Volunteer' >Business Development</a>
        <a href='mailto:sarah@sheltertech.org?subject=Business Development Volunteer' className='positions-list--item--desc'>Bridge the tech industry and homelessness service providers</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:sarah@sheltertech.org?subject=Legal Volunteer' >Legal</a>
        <a href='mailto:sarah@sheltertech.org?subject=Legal Volunteer' className='positions-list--item--desc'>Help us confidently manage our legal requirements with the Mayor's Office of SF</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:sarah@sheltertech.org?subject=Events Volunteer' >Events</a>
        <a href='mailto:sarah@sheltertech.org?subject=Events Volunteer' className='positions-list--item--desc'>Help us run a variety of events aimed at briding the tech and homeless communities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:sarah@sheltertech.org?subject=People Ops Volunteer' >People Ops</a>
        <a href='mailto:sarah@sheltertech.org?subject=People Ops Volunteer' className='positions-list--item--desc'>Recruit more people to the cause of helping the homeless</a>
      </li>
    </ul>

    <p className='volunteer--contact'>Don't see your skillset here? Don't worry, there are plenty of other areas where we need help. Just message <a href='mailto:sarah@sheltertech.org'>Sarah</a> and ask about volunteering.</p>
  </div>
)

export default PositionsList
