import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { FormHelperText } from '@material-ui/core';

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
            <Grid className='postGrid' container spacing={16} >
                <Grid item sm={8} xs={12}>
                    {recentPostsMarkup}
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile....</p>
                </Grid>
            </Grid>
        )
    }
}

export default connect
