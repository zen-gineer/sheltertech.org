import React from 'react'
import './PositionsList.scss'

export const PositionsList = () => (
  <div className='positions'>
    <h3>Open Roles</h3>

    <ul className='positions-list'>

      <li className='positions-list--legend'>
        <p>Positions</p>
        <p>Description</p>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Growth Volunteer' >Growth Lead</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Business Development Volunteer' className='positions-list--item--desc'>Help us get our products adopted by service providers and people experiencing homlessness</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Development Volunteer' >Development</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Development Volunteer' className='positions-list--item--desc'>Full stack, Front End, and Dev Ops opportunities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='https://sheltertech.quip.com/cUa8Ay9ui5Ds' >Product Design</a>
        <a href='https://sheltertech.quip.com/cUa8Ay9ui5Ds' className='positions-list--item--desc'>Create products for some of the most vulnerable communities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Analytics Manager Volunteer' >Analytics Manager</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Analytics Manager Volunteer' className='positions-list--item--desc'>Help us measure our impact and improve our data services</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=Legal Volunteer' >Legal</a>
        <a href='mailto:jasmine@sheltertech.org?subject=Legal Volunteer' className='positions-list--item--desc'>Help us confidently manage our legal requirements</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='https://sheltertech.quip.com/tXtfAnNkubu1' >Events Lead</a>
        <a href='https://sheltertech.quip.com/tXtfAnNkubu1' className='positions-list--item--desc'>Run a variety of events aimed at bringing together the tech and homeless communities</a>
      </li>
      <li className='positions-list--item'>
        <a className='positions-list--item--title' href='mailto:jasmine@sheltertech.org?subject=People Ops Volunteer' >People Ops</a>
        <a href='mailto:jasmine@sheltertech.org?subject=People Ops Volunteer' className='positions-list--item--desc'>Recruit more people to the cause and help manage our growing team</a>
      </li>
    </ul>

    <p className='volunteer--contact'>Don't see your skillset here? Don't worry, there are plenty of other areas where we need help. Just message <a href='mailto:jasmine@sheltertech.org'>Jasmine</a> and ask about volunteering.</p>
  </div>
)

export default PositionsList
