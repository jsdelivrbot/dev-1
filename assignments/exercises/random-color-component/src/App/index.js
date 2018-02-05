import React, { Component } from "react";
import "./index.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "yellow"
    };
    this.changeColor = this.changeColor.bind(this);
  }

  changeColor() {
    axios.get("http://www.colr.org/json/color/random").then(response => {
      let { hex } = response.data.colors[0];
      let { color } = this.state;
      this.setState({
        color: `#${hex}`
      });
    });
  }

  render() {
    let { color } = this.state;
    let boxStyle = { backgroundColor: color };
    return (
      <div>
        <div
          style={boxStyle}
          className="box"
          onMouseOver={this.changeColor}
          onMouseOut={this.changeColor}
        />
      </div>
    );
  }
}

export default App;
