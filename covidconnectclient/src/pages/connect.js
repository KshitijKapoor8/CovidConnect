import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { FormHelperText } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { Typography } from "@material-ui/core";

const styles = {
    card: {
        display: 'flex'
    }

}





class connect extends Component {
    state = {
        posts: null
    }
    componentDidMount(){
        axios.get('/posts')
            .then(res => {
                console.log(res.data)
                this.setState({
                    posts: res.data
                })
            })
            .catch(err => console.log(err));
    }
    render() {
        let recentPostsMarkup = this.state.posts ? (
        this.state.posts.map(make => <p>{make.body}</p>)
        ) : <p>Loading...</p>
        return (
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

export default connect
