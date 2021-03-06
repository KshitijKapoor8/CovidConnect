import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {signinUser} from '../redux/actions/signinAction.js';



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
  TextFieldCPass: {
    margin: "-50px auto -50px auto",
  },
  TextFieldCEmail: {
    margin: "30px auto 30px auto",
  },
  numberC: {
    margin: "30px auto 30px auto",
  }
};

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmEmail: "",
      Newnumber: "",
      loading: false,
      errors: {},
    };
  }
  submit = (event) => {
    event.preventDefault();
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      confirmEmail: this.state.confirmEmail,
      Newnumber: this.state.Newnumber
    };
    signup(newUserData, this.props.history);
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
        <Grid item sm />s
        <Grid item sm>
          <form noValidate submit={this.submit}>
            <TextField
              id="filled-secondary"
              name="email"
              type="email"
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
              type="password"
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
            <TextField
              id="filled-secondary"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              variant="filled"
              color="secondary"
              className={classes.TextFieldCPass}
              helperText={errors.confirmPassword}
              error={errors.confirmPassword ? true : false}
              value={this.state.confirmPassword}
              onChange={this.change}
              fullWidth
            />
            <TextField
              id="filled-secondary"
              name="confirmEmail"
              type="username"
              label="Username"
              variant="filled"
              color="secondary"
              className={classes.TextFieldCEmail}
              helperText={errors.confirmEmail}
              error={errors.confirmEmail ? true : false}
              value={this.state.confirmEmail}
              onChange={this.change}
              fullWidth
            />
            <TextField
              id="filled-secondary"
              name="number"
              type="username"
              label="Number"
              variant="filled"
              color="secondary"
              className={classes.numberC}
              helperText={errors.numberC}
              error={errors.numberC ? true : false}
              value={this.state.numberC}
              onChange={this.change}
              fullWidth
            />

            
            <Button
              id="Login"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Signup
            </Button>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

//<TextField id="email" name = "email" type = "email" label = "Email" color="secondary" className={classes.TextFieldEmail} value={this.state.email} onChanges={this.change} fullWidth/>

export default withStyles(styles)(signup);
