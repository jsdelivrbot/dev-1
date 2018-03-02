import React, { Component } from "react";
import {Button} from 'reactstrap';
import "./app.css";


class Health extends Component {
  constructor(props) {
    super(props);

    this.state = { food: "" };
  }

fetchData() {
  fetch('https://api.betterdoctor.com/2016-03-01/doctors?location=37.773,-122.413,100&skip=2&limit=10&user_key=CODE_SAMPLES_KEY_9d3608187')
  .then(response => response.json())
  .then(parsedJSON => console.log(parsedJSON.data[0].practices[0].name))
  .catch(error => console.log('parsing failed', error))


}


  render() {
    return (
      <div className="App navbar-fixed-top">
        <div className="title">Time to get pumped</div>
        <div className="place">
          <input
            //value={this.state.food}
            onChange={event => this.setState({ food: console.log (event.target.value) })}
            placeholder="Enter Food"
          />
          <Button color="danger" onClick={this.fetchData}>Submit</Button>
        </div>
      </div>
    );
  }
}

export default Health;
