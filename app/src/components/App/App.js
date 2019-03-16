import React, { Component } from 'react';
import './App.css';
import SmsForm from '../SmsForm/SmsForm'

class App extends Component {
  render() {
    return (
      <div className="app">
        <SmsForm />
      </div>
    );
  }
}

export default App;
