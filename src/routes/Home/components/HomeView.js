import React from 'react'
import './HomeView.scss'

// import images
import ImageShelterConnectRound from '../assets/shelterconnect-round.png'
import ImageAskDarcelRound from '../assets/askdarcel-round.png'
import ImageCaseyRound from '../assets/casey-round.png'
import ImageDarcel from '../assets/darcel-story.jpg'
import ImageShelterconnectFeature from '../assets/shelterconnect-feature.png'
import ImageShelterconnectLogo from '../assets/shelterconnect-logo.png'
import ImageKQED from '../assets/kqed-logo.png'
import ImageAskDarcelFeature from '../assets/askdarcel-feature.png'
import ImageAskDarcelLogo from '../assets/askdarcel-logo.png'
import ImageCitylab from '../assets/citylab-logo.png'
import ImageCaseyFeature from '../assets/casey-feature.png'
import ImageCaseyLogo from '../assets/casey-logo.png'

export const HomeView = () => (
  <div className='home'>
    <div className='home--hero'>
      <div className='home--hero--text'>
        <h1>The homeless need<br />technology, too</h1>
        <h3>ShelterTech is solving the biggest technology challenges faced by those experiencing homelessness.</h3>
      </div>
    </div>

    <div className='content'>
      <div className='content-bg' />

      <h2>Our Programs</h2>
      <ul className='home--cards'>
        <li className='home--cards--card'>
          <img src={ImageShelterConnectRound} />
          <h4>ShelterConnect</h4>
          <p>Free Wifi access in shelters<br />and transitional housing</p>
        </li>
        <li className='home--cards--card'>
          <img src={ImageAskDarcelRound} />
          <h4>AskDarcel</h4>
          <p>Find  housing and human services you'r eligibile for</p>
        </li>
        <li className='home--cards--card'>
          <img src={ImageCaseyRound} />
          <h4>Casey</h4>
          <p>Case management, powered by AI, accesible via voice and sms</p>
        </li>
      </ul>
    </div>

    <div className='home--founder'>
      <div className='home--founder--text'>
        <h5>A message from our founder</h5>
        <h2>Darcel Jackson</h2>
        <p>I became homeless when I was injured and lost my welding job working on the new Bay Bridge. I realized the longer I stayed in that condition, the harder it would become to escape it.</p>
        <p>Living on the streets, you spend most of your time trying to survive. It’s hard to know where to start, what services you need, how to get training  in a new field, or search for jobs.</p>
        <p>I had a smartphone and could find wifi, but there weren't any apps or websites to help me  get off the streets. Now I want to give back and help people that become homeless.</p>
      </div>
      <div className='home--founder--image' />
    </div>

    <div className='home--programs'>
      <div className='home--programs--program'>
        <div className='max-width'>
          <div className='home--programs--program--image'>
            <img src={ImageShelterconnectFeature} className='shelterconnect-feature' />
          </div>
          <div className='home--programs--program--text'>
            <img src={ImageShelterconnectLogo} className='home--programs--program--text--logo' />
            <h3>Wifi Where It's Needed Most</h3>
            <p>People experiencing homelessness rely on the internet to apply for housing and benefits, schedule appointments with doctors and case managers, search for jobs, and stay in touch with family and friends. It's a lifeline for getting back on your feet.</p>
            <p>ShelterConnect works with internet service providers to offer free wifi in shelters and transitional housing facilties.</p>
            <p>So far ShelterConnect has installed and provided free wifi in one shelter and two transitional housing facilities in San Francisco, providing free wifi to over 1200 people in need.</p>
            <p>Learn more about <a href=''>ShelterConnect.</a></p>
            <a href='https://ww2.kqed.org/news/2015/05/18/a-homeless-man-brings-wi-fi-to-san-francisco-shelters' className='home--programs--program--text--further-reading'>
              <h5>Read about it on</h5>
              <img src={ImageKQED} className='home--programs--program--text--kqed-image' />
            </a>
          </div>
        </div>
      </div>

      <div className='home--programs--program'>
        <div className='max-width'>
          <div className='home--programs--program--text'>
            <img src={ImageAskDarcelLogo} className='home--programs--program--text--logo' />
            <h3>The Official Human Services Directory for the City of San Francisco</h3>
            <p>In November 2017, ShelterTech, in collaboration with the SF Bar Association's Homeless Advcocacy Project, became the official housing and human services directory for the Mayor's Office of Housing and Community Development.</p>
            <p>Through the AskDarcel website, case managers, city employees, and people experiencing homelessness can find hundreds of homelessness, housing, health, job, education, and other human services.</p>
            <p>Visit <a href='http://askdarcel.org'>AskDarcel.org</a> for more info.</p>
            <a href='https://www.citylab.com/cityfixer/2015/10/how-apps-can-help-and-harm-the-homeless/412780/' className='home--programs--program--text--further-reading'>
              <h5>Read about it on</h5>
              <img src={ImageCitylab} className='home--programs--program--text--citylab-image' />
            </a>
          </div>
          <div className='home--programs--program--image'>
            <img src={ImageAskDarcelFeature} className='shelterconnect-feature' />
          </div>
        </div>
      </div>

      <div className='home--programs--program'>
        <div className='max-width'>
          <div className='home--programs--program--image'>
            <img src={ImageCaseyFeature} className='casey-feature' />
          </div>
          <div className='home--programs--program--text'>
            <img src={ImageCaseyLogo} className='home--programs--program--text--logo casey-logo' />
            <h3>Case Management – Powered by AI</h3>
            <p>Casey is an interactive bot that provides local resource recommendations and basic case management.</p>
            <p>Casey uses conversational language and resource data from AskDarcel to provide users with the best recommendations possible for their needs.</p>
            <p>Look out for Casey in late 2018.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default HomeView
