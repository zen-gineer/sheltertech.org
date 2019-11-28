import React from 'react'
import './GivingTuesdayBanner.scss'
import GivingTuesdayLogo from './GivingTuesdayLogo.png'

export const GivingTuesdayBanner = () => (
  <div className='GivingTuesdayBanner'>
    <div className='GivingTuesdayBanner--wrapper'>
      <div>
        <img src={GivingTuesdayLogo} alt='Giving Tuesday' />
        <p>This December 3rd help us complete our biggest Wifi installation project ever.</p>
      </div>
      <a className='donate-button' href='/givingtuesday'>Donate</a>
    </div>
  </div>
)

export default GivingTuesdayBanner
