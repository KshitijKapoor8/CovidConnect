import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";


import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
//import { Link } from "react-router-dom";

import {connect} from 'react-redux';
import {loginUser} from '../redux/actions/userActions.js';




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
    loginUser(userData, this.props.history);
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
<<<<<<< HEAD
              className={classes.button}
              component={Link}
              to="/"
=======
>>>>>>> b853bd7834f0056d086bb87aac1a3a17f900d24f
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

// const mapActionsToProps = {
//   loginUser
// }
export default withStyles(styles)(login);
