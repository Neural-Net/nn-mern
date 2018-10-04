import React from 'react'
import PropTypes from 'prop-types'

import './ResourceListItem.css'

const ResourceListItem = (title, medaiSrc, description) => {
  return (
    <div className='resource-container'>
      <h3 className='resource-title'>{title}</h3>
      <div className='resource-media'>{medaiSrc}</div>
      <div className='resource-description'>{description}</div>
    </div>
  )
}

ResourceListItem.propTypes = {
  title: PropTypes.string.isRequired,
  mediaSrc: PropTypes.string,
  description: PropTypes.string
}

export default ResourceListItem
