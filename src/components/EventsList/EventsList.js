import React from 'react'

import ImageDinner from './assets/dinner.jpg'
import ImageDinner2 from './assets/dinner2.png'
import ImageBurrito from './assets/burrito.png'
import ImageDatathon1 from './assets/datathon.jpg'
import ImageDatathon2 from './assets/datathon2.jpg'
import ImageDatathon3 from './assets/datathon3.jpg'
import ImageDatathon4 from './assets/datathon4.jpg'
import ImageDatathon5 from './assets/datathon5.jpg'
import ImageDatathon6 from './assets/datathon6.jpg'
import ImageHackathon from './assets/hackathon.jpg'
import ImageBurstTheBubble from './assets/burst-the-bubble.jpg'
import ImageMayoralEvent from './assets/mayoral-event.jpg'
import ImageMusic from './assets/music.jpg'
import ImageTacklingHomelessness from './assets/tackling-homelessness.jpg'

const eventsList = [
  {
    id: `1`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Aug 21 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-aug-21st-volunteer-opportunity-tickets-48321486868?aff=ebdssbdestsearch',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `0`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Aug 7 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-aug-7th-volunteer-opportunity-tickets-48310200109?aff=ebdssbdestsearch',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  }
]

export default eventsList
