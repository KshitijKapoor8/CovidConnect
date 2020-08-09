import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

//Components
import Navbar from './components/Navbar';
//Pages
import home from './pages/home';
import connect from './pages/connect';
import learn from './pages/learn';
import login from './pages/login';
import signup from './pages/signup.js';

const theme = createMuiTheme({
  palette: { 
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrast_text: '#ffffff'
    },
    secondary: {
      light: '#a4a4a4', 
      main: '#757575',
      dark: '#494949',
      contrast_text: '#ffffff'
    },
    Button: {
      textTransform: 'none',
    }
  },

})
 
function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
      <Router>
        <Navbar />
        .container{
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/connect" component={connect}/>
            <Route exact path="/learn" component={learn}/>
            <Route exact path="/login" component={login}/>
            <Route exact path="/signup" component={signup}/>
          </Switch>
        }
      </Router>
    </div>
    </MuiThemeProvider>
  );
}

export default App;
