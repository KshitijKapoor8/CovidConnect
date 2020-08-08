import React, { Component } from 'react'
import Link from 'react-router-dom/Link';

//MUI
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';


class Navbar extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar className='nav-container'>
                    <text className='titleName' >CovidConnect</text>
                    <Button style={{ fontSize: '20px' }} size = "medium" variant = "outlined"color = "inherit" component={Link} to="/">Home</Button>
                    <Button style={{ fontSize: '20px' }} size = "medium" variant = "outlined"color = "inherit" component={Link} to="/Connect">Connect</Button>
                    <Button style={{ fontSize: '20px' }} size = "medium" variant = "outlined" color = "inherit" component={Link} to="/Learn">Learn</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar