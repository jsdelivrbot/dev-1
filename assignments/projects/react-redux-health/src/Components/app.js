import React from 'react';
import Health from '../Containers/health.js';
import NavigationBar from '../Containers/nav.js';
import { Component } from "react";

export default class App extends Component {
    render() {
      return (
        <div>
          <Health />
          <NavigationBar />
        </div>
      );
    }
  }
  
