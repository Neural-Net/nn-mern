import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = () => {
  return (
    <header className='App-header'>
      <h1 className='App-title'>Welcome to Neural Net</h1>
      <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                test
                </Typography>
            </Toolbar>
        </AppBar>
    </header>
  )
}

export default Header
