import React from 'react'
import PropTypes from 'prop-types'

import './ResourceListItem.css'

const ResourceListItem = ({ title, mediaType, mediaSrc, description }) => {
  return (
    <div className='resource-container'>
      <h3 className='resource-title'>{title}</h3>
      <div className='resource-media'>{renderResourceMedia(mediaType, mediaSrc)}</div>
      <div className='resource-description'>{description}</div>
    </div>
  )
}

const renderResourceMedia = (mediaType, mediaSrc) => {
  console.log('mediaSrc', mediaSrc)
  switch (mediaType) {
    case 'image':
      return <img src={mediaSrc} className='resource-list-media-image' />
    default:
      return <div className='resource-media-unsupported'>Unsupported Media Type</div>
  }
}

ResourceListItem.propTypes = {
  title: PropTypes.string.isRequired,
  mediaType: PropTypes.string,
  mediaSrc: PropTypes.string,
  description: PropTypes.string
}

export default ResourceListItem
