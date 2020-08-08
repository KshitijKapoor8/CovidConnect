import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import createTheme from '@material-ui/core/styles/createMuiTheme';

//Components
import Navbar from './components/Navbar';
//Pages
import home from './pages/home';
import connect from './pages/connect';
import learn from './pages/learn';

const theme = createMuiTheme({
  palette: { 
    primary: {
      light: '#4f5b62',
      main: '#263238',
      dark: '#000a12',
      contrast_text: '#ffffff'
    }
  },
})
 
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        .container{
          <Switch>
            <Route exact path="/" component={home}/>
            <Route exact path="/connect" component={connect}/>
            <Route exact path="/learn" component={learn}/>
          </Switch>
        }
      </Router>
    </div>
  );
}

export default App;
