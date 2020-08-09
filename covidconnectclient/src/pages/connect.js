import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardHeader from "@material-ui/core/CardHeader";
import { FormHelperText } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";
import withStyles from "@material-ui/styles/withStyles";
import Button from "@material-ui/core/Button";
import { useState } from "react";
import { render } from "react-dom";

//const [buttonText, setButtonText] = useState("Next");

//const changeText = (text) => setButtonText(text);

const styles = {
  card: {
    margin: "50px auto 60px auto",
  },
  button: {
    margin: "-50px auto auto 1100px",
  },
  cardtwo: {
    margin: "50px auto 60px auto",
  },
  cardthree: {
    margin: "50px auto 60px auto",
  },
  buttonTextTwo: {
    margin: "-50px auto auto 1100px",
  },
  buttonTextThree: {
    margin: "-50px auto auto 1100px",
  }

};

class connect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "Connect",
      buttonTextTwo: "Connect",
      buttonTextThree: "Connect",
      
    };
  }

  handleUserOne = () => {
    let buttonText =
      this.state.buttonText == "555-555-5555" ? "555-555-5555" : "555-555-5555";
    this.setState({ buttonText: buttonText });
  };
  handleUseTwo = () => {
    let buttonTextTwo =
      this.state.buttonTextTwo == "234-235-2346" ? "234-235-2346" : "234-235-2346"
    this.setState({ buttonTextTwo: buttonTextTwo });
  };
  handleUserThree = () => {
    let buttonTextThree =
      this.state.buttonTextThree == "342-425-2345" ? "342-425-2345" : "342-425-2345";
    this.setState({ buttonTextThree: buttonTextThree });
  };


  render() {
    const { classes } = this.props;
    return (
      <div>
        <Card className={classes.card}>
          <CardMedia title="Profile Image" />
          <CardContent>
            <Typography variant="h5">Kshitij Kapoor</Typography>
            <Typography variant="body2" color="textSecondary">
              This is my first post!
            </Typography>
            <Button
              id="Login"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={this.handleUserOne}>
              {this.state.buttonText}
            </Button>
          </CardContent>
        </Card>
        <Card className={classes.cardtwo}>
          <CardMedia title="Profile Image" />
          <CardContent>
            <Typography variant="h5">James Kapoor</Typography>
            <Typography variant="body2" color="textSecondary">
              This is my first post!
            </Typography>
            <Button
              id="Login"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.buttonTextTwo}
              onClick={this.handleUseTwo}>
              {this.state.buttonTextTwo}
            </Button>
          </CardContent>
        </Card>
        <Card className={classes.cardthree}>
          <CardMedia title="Profile Image" />
          <CardContent>
            <Typography variant="h5">Bob Kapoor</Typography>
            <Typography variant="body2" color="textSecondary">
              This is my first post!
            </Typography>
            <Button
              id="Login"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.buttonTextThree}
              onClick={this.handleUserThree}>
              {this.state.buttonTextThree}
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }
}

export default withStyles(styles)(connect);
