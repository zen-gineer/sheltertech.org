import React from 'react'

// TODO This was built 15 minutes before handing out posters advertising it, will need a touch up
import './TeamView.scss'

// import TeamList from './TeamList'

export const TeamView = () => (
  <div className='team jobs'>
    <div className='content'>
      <div className='content-bg' />
      <div className='content--header'>
        <h2>Jobs</h2>
        <h3>Are you experiencing homelessness and looking for part-time job opportunities in San Francisco?</h3>
      </div>

      <div className='home--founder'>
        <div className='home--founder--text'>
          <h3 className='jobs-sub'>We <strong>hire members of the homeless community</strong> to staff events, and also provide training on how to find work through technology platforms like UberEats and TaskRabbit.</h3>
          <br /><br />
          <p>To Learn more, fill out the form below:</p>
          {/* <ul>
            <li><strong>Email:</strong> <a href='mailto:jobs@sheltertech.org'>jobs@sheltertech.org</a></li>
            <li><strong>Phone:</strong> <a href='tel:(510) 519-7782'>(510) 519-7782</a></li>
          </ul> */}
        </div>
        <div className='home--founder--image' />
      </div>

      <span className="iframe-wrapper">
        <iframe src="https://docs.google.com/forms/d/1dg7tj3DYUxmvtwpwRTK0gX20S6LfWH5rhU8nqMawYTA/viewform" />
      </span>

    </div>
  </div>
)

export default TeamView
