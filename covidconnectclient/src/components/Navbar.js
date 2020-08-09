import React, { Component } from "react";
import Link from "react-router-dom/Link";

//MUI
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <text className="titleName">CovidConnect</text>
          <ButtonGroup
            color="primary"
            className="menuButtons"
            variant="text"
            aria-label="main menu buttons"
          >
            <Button
              style={{ fontSize: "24px" }}
              size="medium"
              color="inherit"
              component={Link}
              to="/"
            >
              Home
            </Button>
            <Button
              style={{ fontSize: "24px" }}
              size="medium"
              color="inherit"
              component={Link}
              to="/Connect"
            >
              Connect
            </Button>
            <Button
              style={{ fontSize: "24px" }}
              size="medium"
              color="inherit"
              component={Link}
              to="/Learn"
            >
              Learn
            </Button>
            <Button
              style={{ fontSize: "24px" }}
              size="medium"
              color="inherit"
              component={Link}
              to="/Login"
            >
              Login
            </Button>
            <Button
              style={{ fontSize: "24px" }}
              size="medium"
              color="inherit"
              component={Link}
              to="/signup"
            >
              Sign Up
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
