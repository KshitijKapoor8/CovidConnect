import React, { Component } from "react";
import axios from 'axios';

let number = 0;
let number2 = 0;
export class learn extends Component {
  
    render() {
      axios.get('https://covid19.mathdro.id/api')
      .then( (res) => {
        number = res.data.confirmed.value;
        number2 = res.data.deaths.value;
        console.log(number)
        return number;
      })
      .catch(err => {
        console.log(err);
    })
    
    return (
      console.log(number),
      <div>
        <h1 class = "test1">These many people have suffered-</h1>
        <h1 class = "test">{number} people infected.</h1>
        <h1 class = "test">{number2} deaths.</h1>
      </div>
    )
  }
}

export default learn
