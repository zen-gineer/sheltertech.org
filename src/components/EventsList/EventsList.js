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
    id: `3`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Sep 25 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-6th-volunteer-opportunity-tickets-49411168134',
    location: 'Unity Technologies',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon2
  },
  {
    id: `2`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Sep 18 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-11th-volunteer-opportunity-tickets-49411220290',
    location: 'Google Community Space',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon3
  },
  {
    id: `1`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Tue, Sep 11 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sept-18th-volunteer-opportunity-tickets-49411240350',
    location: 'Intersection for the Arts',
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon4
  },
  {
    id: `0`,
    show: true,
    title: 'Homeless Services Workshop',
    date: 'Thu, Sep 6 05:30PM',
    cost: 'Volunteer Event',
    link: 'https://www.eventbrite.com/e/san-francisco-homelessness-datathon-sep-25th-volunteer-opportunity-tickets-49411258404',
    location: "Women's Building",
    description: 'Work with the homeless and improve our program offerings at this volunteer event',
    img: ImageDatathon5
  }
]

export default eventsList
