import React, { Component } from 'react'
import ResourceList from '../components/ResourceList'
import './ResourceListContainer.css'
import 'whatwg-fetch'

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarBorderIcon from '@material-ui/icons/StarBorder';

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
    fetch('/api/resources') //eslint-disable-line
      .then(data => data.json())
      .then((res) => {
        console.log('res', res)
        if (!res.success) this.setState({ error: res.error })
        else this.setState({ data: res.data })
      })
  }

  render () {
    return (
      <div className='root'>
        <GridList cellHeight={200} spacing={1} className='gridList'>

            <ResourceList data={this.state.data} />

        </GridList>
      </div>
    )
  }
}


export default ResourceListContainer
