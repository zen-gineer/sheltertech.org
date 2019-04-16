import React from 'react'
import PropTypes from 'prop-types'

export default function TeamListItem ({ img, email, name, title }) {
  return (
    <li className={`team-list--item ${img}`}>
      <div className='team-list--item--details'>
        <p className='team-list--item--name'><a href={`mailto:${email}@sheltertech.org`}>{name}</a></p>
        {title ? <p className='team-list--item--title'>{title}</p> : null}
      </div>
    </li>
  )
}

TeamListItem.propTypes = {
  img: PropTypes.string,
  email: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string
}

TeamListItem.defaultProps = {
  img: 'placeholder',
  email: 'info'
}
