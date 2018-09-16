import React, { Component } from 'react'
import ResourceList from '../components/ResourceList'
import DATA from './resource_data'

class ResourceListContainer extends Component {
  constructor () {
    super()
    this.state = { data: [] }
  }

  render () {
    return (
      <div>
        List Container
        <ResourceList data={DATA} />
      </div>
    )
  }
}

export default ResourceListContainer
