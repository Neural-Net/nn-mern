import React from 'react'
import './ResourceList.css'
import Resource from './ResourceListItem'

const ResourceList = (props) => {
  const resourceItems = props.data.map(resource => (
    <Resource title={resource.title}
      key={resource._id}
      mediaSrc={resource.mediaLocation + resource.mediaSrc}
      description={resource.description} />
  ))

  return (
    <div>
      { resourceItems }
    </div>
  )
}

export default ResourceList
