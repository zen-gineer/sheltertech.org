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
    id: `4`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Dec 18 06:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-6th-volunteer-opportunity-tickets-49411168134',
    location: 'WeWork',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  },
  {
    id: `3`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Dec 4 06:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-6th-volunteer-opportunity-tickets-49411168134',
    location: 'WeWork',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `2`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Nov 29 06:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-11th-volunteer-opportunity-tickets-49411220290',
    location: 'WeWork',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon3
  },
  {
    id: `1`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Nov 13 06:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-25th-volunteer-opportunity-tickets-49411258404',
    location: 'WeWork',
    description: 'Datathon volunteer event open to all Eventbrite employees',
    img: ImageDatathon2
  },
  {
    id: `0`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Nov 6 06:00PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-25th-volunteer-opportunity-tickets-49411258404',
    location: 'WeWork',
    description: 'Datathon volunteer event open to all Yelp employees',
    img: ImageDatathon1
  }
]

export default eventsList
