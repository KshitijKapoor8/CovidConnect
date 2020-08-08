import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles';
import TextField from '@material-ui/core/TextField';
import PropTyles from 'prop-types';

import Grid from '@material-ui/core/Grid';


const styles = {

}

class login extends Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm>
                    <p>Yooooo</p>
                </Grid>
            </Grid>
        )
    }
}


login.propTypes ={
    classes: PropTypes.object.isRequired
}

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }




export default withStyles(syles)(login);
