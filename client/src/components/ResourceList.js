import React from 'react'
import './ResourceList.css'
import Resource from './Resource'

const ResourceList = (props) => {
  const resourceItems = props.data.map(resource => (
    <Resource title={resource.title}
      key={resource._id}
      media={resource.media}
      description={resource.description} />
  ))

  return (
    <div>
      { resourceItems }
    </div>
  )
}

export default ResourceList
