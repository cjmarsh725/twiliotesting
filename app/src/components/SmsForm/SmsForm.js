import React, { Component } from 'react';
import './SmsForm.css';
import axios from 'axios';

class SmsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneNumber: "",
      textContent: ""
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    const body = {number: this.state.phoneNumber, text: this.state.textContent};
    axios.post('http://localhost:8080', body);
    this.setState({phoneNumber: "", textContent: ""});
  };

  render() {
    return (
      <div className="smsform">
        <h1>Send a text message</h1>
        <input
          className="smsform-input-number"
          type="text"
          placeholder="Phone Number"
          name="phoneNumber"
          value={this.state.phoneNumber}
          onChange={this.onChange}
        />
        <textarea
          className="smsform-input-content"
          type="text"
          placeholder="Text Content"
          name="textContent"
          value={this.state.textContent}
          onChange={this.onChange}
        />
        <div className="smsform-submit" onClick={this.onSubmit}>
          <h4>Send Text</h4>
        </div>
      </div>
    );
  }
}

export default SmsForm;