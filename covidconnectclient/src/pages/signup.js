import React, { Component } from "react";
import withStyles from "@material-ui/styles/withStyles";
import PropTypes from "prop-types";
import axios from "axios";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


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
};

class signup extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      confirmEmail: "",
      loading: false,
      errors: {},
    };
  }
  submit = (event) => {
    event.preventDefault();
    this.setState({
      loading: true,
    });
    const newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      confirmEmail: this.state.confirmEmail
    };
    axios
      .post("/signup",newUserData)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('FBIdToken','Bearer ${res.data.token}')
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({
          error: err.response.data,
          loading: false,
        });
      });
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
              className={classes.TextFieldPass}
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
              className={classes.TextFieldEmail}
              helperText={errors.confirmEmail}
              error={errors.confirmEmail ? true : false}
              value={this.state.confirmEmail}
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
