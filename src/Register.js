import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  constructor() {
    super();

    this.state = {
      formFields: {
        name: "",
        company: "",
        email: "",
        phone: "",
        message: ""
      }
    };
  }

  inputChangeHandler(e) {
    let formFields = { ...this.state.formFields };
    formFields[e.target.name] = e.target.value;
    this.setState({
      formFields
    });
  }

  formHandler(formFields) {
    axios
      .post(
        "https://crossorigin.me/https://enigmatic-tor-81088.herokuapp.com/send",
        formFields
      )
      .then(function(response) {
        console.log(response);
        //Perform action based on response
      })
      .catch(function(error) {
        console.log(error);
        //Perform action based on error
      });
  }

  render() {
    return (
      <form onSubmit={this.formHandler(this.state.formFields)}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          onChange={e => this.inputChangeHandler.call(this, e)}
          value={this.state.formFields.name}
        />
        <label>Company:</label>
        <input
          type="text"
          name="company"
          onChange={e => this.inputChangeHandler.call(this, e)}
          value={this.state.formFields.company}
        />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          onChange={e => this.inputChangeHandler.call(this, e)}
          value={this.state.formFields.email}
        />
        <label>Phone:</label>
        <input
          type="text"
          name="phone"
          onChange={e => this.inputChangeHandler.call(this, e)}
          value={this.state.formFields.phone}
        />
        <label>Message:</label>
        <textarea
          type="text"
          name="message"
          rows="5"
          onChange={e => this.inputChangeHandler.call(this, e)}
          value={this.state.formFields.message}
        />

        <button type="submit">Register Account</button>
      </form>
    );
  }
}

export default Register;
