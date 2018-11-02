import React from 'react'
import './ResourceList.css'
import ResourceListItem from './ResourceListItem'
/*
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import StarBorderIcon from '@material-ui/icons/StarBorder'
import tileData from './tileData'
*/
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
