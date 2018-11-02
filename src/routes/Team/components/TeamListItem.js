import React from 'react'
import PropTypes from 'prop-types'
import './TeamList.scss'

export default function TeamListItem ({ slug, email, name, title }) {
  return (
    <li className={`team-list--item ${slug}`}>
      <div className='team-list--item--details'>
        <h3><a href={`mailto:${email}@sheltertech.org`}>{name}</a></h3>
        <p>{title}</p>
      </div>
    </li>
  )
}

TeamListItem.propTypes = {
  slug: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string
}

TeamListItem.defaultProps = {
  slug: 'no-photo',
  email: 'info',
  name: 'Name',
  title: 'Title'
}
