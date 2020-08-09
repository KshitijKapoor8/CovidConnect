import React, { Component } from 'react'
import withStyles from '@material-ui/styles/withStyles';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import  TextField  from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import red from '@material-ui/core/colors/red'

const styles = {
    form: {
        textAlign: 'center',
   
    },
    TextFieldEmail: {
        margin: '145px auto 145px auto',
        
       
        
    },
    TextFieldPass: {
        margin: '-100px auto -100px auto'
    },
    button: {
        color: 'primary'
    }
    

}


class login extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
            loading: false,
            errors: {}
        }
    }
    submit = (event) =>
    {

    }
    change = (event) =>
    {
        this.setState({
            [event.target.name]: event.target.value
        });
    }


    render() {
        const { classes } = this.props;
        return (
            <Grid container className={classes.form}>
                <Grid item sm/>s
                <Grid item sm>
                    <form noValidate submit={this.handleSubmit}> 
                        <TextField id="filled-secondary" name = "email" type = "email" label = "Email" variant = "filled" color="secondary" className={classes.TextFieldEmail}
                            value={this.state.email} onChanges={this.change} fullWidth/>
                            <TextField id="filled-secondary" name = "password" type = "password" label = "Password" variant = "filled" color="secondary"  className={classes.TextFieldPass}
                            value={this.state.email} onChanges={this.change} fullWidth/>
                        <Button id = "Login" type = "submit" variant="contained" color="primary" className={classes.button}>Login</Button>
                    </form>
                    
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}


login.propTypes ={
    classes: PropTypes.object.isRequired
}



//<TextField id="email" name = "email" type = "email" label = "Email" color="secondary" className={classes.TextFieldEmail} value={this.state.email} onChanges={this.change} fullWidth/>

export default withStyles(styles)(login);
