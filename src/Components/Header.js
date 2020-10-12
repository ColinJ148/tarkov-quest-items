import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
    root: {
    },
    color: {
        backgroundColor: 'black'
    },
    title: {
      flexGrow: 1,
      color: '#7b6d52',
      fontSize: 40,
      marginTop: theme.spacing(8),
    },
  }));


const Header = () => {
    const classes = useStyles();
    return(
        <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className = {classes.color}>
            <Typography  className={classes.title}>
              Tarkov Quest Item Tool
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    )
}

export default Header