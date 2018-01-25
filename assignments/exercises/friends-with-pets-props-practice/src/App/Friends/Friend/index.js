import React, {Component} from "react";


function Friend(props) {
    let {name, age, pets} = props
    return (
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
      </div>
    );
  }


export default Friend;