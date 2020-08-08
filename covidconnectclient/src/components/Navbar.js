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
                <text className='titleName' >CovidConnect</text>
                <Toolbar className='nav-container'>
<<<<<<< HEAD
                    <Button style ={{fontSize: '20px'}} color = "inherit" component={Link} to="/">Home</Button>
                    <Button style ={{fontSize: '20px'}} color = "inherit" component={Link} to="/Connect">Connect</Button>
                    <Button style ={{fontSize: '20px'}} color = "inherit" component={Link} to="/Learn">Learn</Button>
                    <Button style ={{fontSize: '20px'}} color = "inherit" component={Link} to="/">Login</Button>
=======
                    <Button style={{ fontSize: '20px' }} size = "medium" variant = "outlined"color = "inherit" component={Link} to="/">Home</Button>
                    <Button style={{ fontSize: '20px' }} size = "medium" variant = "outlined"color = "inherit" component={Link} to="/Connect">Connect</Button>
                    <Button style={{ fontSize: '20px' }} size = "medium" variant = "outlined" color = "inherit" component={Link} to="/Learn">Learn</Button>
>>>>>>> d5638d19419278dd9b311a164f26715a17105523
                </Toolbar>
            </AppBar>
        )
    }
}

export default Navbar
