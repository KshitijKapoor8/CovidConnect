import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";
import axios from "axios";
import Link from '@material-ui/core/Link';

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import { Link } from "react-router-dom";

//import {connect} from 'react-redux';
//import {loginUser} from '../redux/actions/userActions';




const styles = {
  form: {
    textAlign: "center",
  },
  TextFieldEmail: {
    margin: "145px auto 145px auto",
  },
  TextFieldPass: {
    margin: "-100px auto -100px auto",
  },
  button: {
    color: "primary",
  },
  Login: {

  }
};

class login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  submit = (event) => {
    event.preventDefault();
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
  };
  change = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { errors, loading } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <form noValidate onSubmit={this.submit}>
            <TextField
              id="filled-secondary"
              name="email"
              type="text"
              label="Email"
              variant="filled"
              color="secondary"
              className={classes.TextFieldEmail}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.change}
              fullWidth
            />
            <TextField
              id="filled-secondary"
              name="password"
              type="text"
              label="Password"
              variant="filled"
              color="secondary"
              className={classes.TextFieldPass}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.change}
              fullWidth
            />

            <Button
              id="Login"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button} target ="_blank" href="http://localhost:3000/"
            >Login</Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

login.propTypes = {
  classes: PropTypes.object.isRequired,
  loginUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired,
};

const mapStatesToProps = (state) => ({
  user: state.user,
  UI: state.UI,
});

export default withStyles(styles)(login);
