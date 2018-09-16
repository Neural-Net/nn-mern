import React from 'react'
import PropTypes from 'prop-types'

const ResourceListItem = (title, media, description) => {
  return (
    <div className='resource-container'>
      <h3 className='resource-title'>Title</h3>
      <div className='resource-media'>Media</div>
      <div className='resource-description'>Description</div>
    </div>
  )
}

ResourceListItem.propTypes = {
  title: PropTypes.string.isRequired,
  media: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ResourceListItem
