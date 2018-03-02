import React, { Component } from "react";
import Workout from "./Workout";

class App extends Component {
  render() {
    return (
      <div>
        <Workout url="http://localhost:3001/api/notes" />
        <div> Hi Bee </div>
      </div>
    );
  }
}
export default App;
