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
import {useState} from "react"

//const [buttonText, setButtonText] = useState("Next");

//const changeText = (text) => setButtonText(text);


const styles = {
  card: {
    display: "flex",
    margin: "60px auto 60px auto",
  },
  button: {
    margin: "-50px auto auto 1100px",
  }
};
  axios.get('http://localhost:5000/covidconnect-8067e/nam5(us-central)/api')
    .then((res) =>
    {
      
    })
    .catch(err =>{
      console.log(err);
    })


class connect extends Component {
  render() {
    const { classes } = this.props;
    return (
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
             // onClick={()=> setButtonText("555-555-5555")}
             >
              Connect
            </Button>
        </CardContent>
      </Card>
   



    );
  }

}

export default withStyles(styles)(connect);
