import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const styles = {
card: {
  display: 'flex'
}

}





class posts extends Component {
  render() {
    const { classes } = this.props;
    return(
      <Card>
        <CardMedia
          title="Profile Image"/>
        <CardContent>
          <Typography variant="h5">USER</Typography>
          <Typography variant="body2" color="textSecondary" > hello</Typography> 
        </CardContent>
      </Card>




    )



    
  }
}

export default withStyles(styles)(Screams);
