import React from 'react'
import { AppBar, Typography, Avatar, Toolbar, Button } from '@mui/material'
import useStyles from './styles'
import memories from '../../images/memories.jpg'
import { Link } from 'react-router-dom';


const Navbar = () => {
    const classes = useStyles();
    const user = null;
  return (
    <AppBar className= {classes.appBar} position='static' color='inherit'>

    <div className={classes.brandContainer}>
    <Typography className={classes.heading} variant='h2'>Memories</Typography>
    <img  component={Link} to='/' className={classes.image} src={memories} alt='' height='60'/>
    
    </div>

    <Toolbar className={classes.toolbar}>

    {user ? (
      <div className={classes.profile}>
      <Avatar className={classes.purple} alt= {user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
      <Typography className={classes.userName} variant='h6'>{user.result.name}</Typography>
      <Button variant='contained' className={classes.logout} color='secondary'>Logout</Button>
      
      </div>
    ) : (
      <Button variant='contained' component={Link} to='/auth' color='primary'>Sign Up</Button>
    )}
     
    </Toolbar>
    </AppBar>

  )
}

export default Navbar
