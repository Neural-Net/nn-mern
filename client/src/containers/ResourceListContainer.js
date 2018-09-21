import React, { Component } from 'react'
import ResourceList from '../components/ResourceList'
import 'whatwg-fetch'

class ResourceListContainer extends Component {
  constructor () {
    super()
    this.state = {
      data: [],
      error: null
    }
  }

  componentDidMount () {
    this.loadResourcesFromServer()
  }

  loadResourcesFromServer () {
    fetch('/api/resources')
      .then(data => data.json())
      .then((res) => {
        if (!res.success) this.setState({ error: res.error })
        else this.setState({ data: res.data })
      })
  }

  render () {
    return (
      <div>
        List Container
        <ResourceList data={this.state.data} />
      </div>
    )
  }
}

export default ResourceListContainer
