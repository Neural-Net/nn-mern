import React from 'react'
import './ResourceList.css'
import ResourceListItem from './ResourceListItem'

const ResourceList = (props) => {
  const resourceItems = props.data.map(resource => (
    <ResourceListItem title={resource.title}
      key={resource._id}
      mediaType={resource.mediaType}
      mediaSrc={resource.mediaSrc}
      description={resource.description} />
  ))

  return (
    <div className='resource-list-container'>
      { resourceItems }
    </div>
  )
}

export default ResourceList
