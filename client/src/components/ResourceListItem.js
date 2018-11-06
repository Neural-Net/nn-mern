import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Favorite from '@material-ui/icons/Favorite';

import './ResourceListItem.css'

const ResourceListItem = ({ title, mediaType, mediaSrc, description }) => {
  return (
    <Card className='resource-item-container'>
      <CardContent>
        <Typography className='resource-title' color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography className='resource-media' variant="h5" component="h2">
          {renderResourceMedia(mediaType, mediaSrc)}
        </Typography>
        <Typography className='resource-description' color="textSecondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions className='card-actions'>
        <IconButton aria-label="Favorite">
          <Favorite  />
        </IconButton>
      </CardActions>
    </Card>
  
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
