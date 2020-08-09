import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid'
import axios from 'axios';

class connect extends Component {
    componentDidMount(){
        axios.get('/')
    }
    render() {
        return (
            <Grid className='postGrid' container spacing={16} >
                <Grid item sm={8} xs={12}>
                    <p>Content....</p>
                </Grid>
                <Grid item sm={4} xs={12}>
                    <p>Profile....</p>
                </Grid>
            </Grid>
        )
    }
}

export default connect
