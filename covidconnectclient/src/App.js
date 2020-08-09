import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import AuthRoute from './utils/AuthRoute';
import jwtDecode from 'jwt-decode';
import {Provider} from 'react-redux';
import store from './redux/store';
//Components
import Navbar from "./components/Navbar";
//Pages
import home from "./pages/home";
import connect from "./pages/connect";
import learn from "./pages/learn";
import login from "./pages/login";
import signup from "./pages/signup.js";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#4f5b62",
      main: "#263238",
      dark: "#000a12",
      contrast_text: "#ffffff",
    },
    secondary: {
      light: "#a4a4a4",
      main: "#757575",
      dark: "#494949",
      contrast_text: "#ffffff",
    },
    Button: {
      textTransform: "none",
    },
  },
});
let authenticated
const token = localStorage.FBIdToken;
if(token){
  const decodedToken = jwtDecode(token)
  if(decodedToken.exp * 1000 < Date.now()){
    window.location.href = '/login'
    authenticated = false;


  }
  else
  {
    authenticated = true;
  }
}



 
function App() {
  return (
    <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <div className="App">
        <Router>
          <Navbar />
          .container
          {
            <Switch>
              <Route exact path="/" component={home} />
              <Route exact path="/connect" component={connect} />
              <Route exact path="/learn" component={learn} />
              <AuthRoute exact path="/login" component={login} authenticated={authenticated}/>
              <AuthRoute exact path="/signup" component={signup} authenticated={authenticated} />
            </Switch>
          }
        </Router>
      </div>
    </Provider>
    </MuiThemeProvider>
  );
}

export default App;
