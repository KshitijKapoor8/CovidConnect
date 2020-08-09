import React, { Component } from "react";
import axios from 'axios';

export class learn extends Component {
  render() {

    axios.get('https://covid19.mathdro.id/api/confirmed')
    .then( (res) => {
        console.log(res);
    })
    
    return (
      <div>
        <h1>Coronavirus Tracker</h1>
        <h2>Unfortunately, the disease has caused much havoc</h2>
        
      </div>

    )
  }
}

export default learn
