import React, { Component } from "react";
import logo from "./logo.svg";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: ""
  };

  handleNameChange = event => {
    this.setState({ name: event.target.value });
  };
  handleCompanyChange = event => {
    this.setState({ company: event.target.value });
  };
  handleEmailChange = event => {
    this.setState({ email: event.target.value });
  };
  handlePhoneChange = event => {
    this.setState({ phone: event.target.value });
  };
  handleMessageChange = event => {
    this.setState({ message: event.target.value });
  };

  handleSubmit = async () => {
    const { name, company, email, phone, message } = this.state;
    try {
      await axios.post(`https://afternoon-hamlet-86579.herokuapp.com/send`, {
        name,
        company,
        email,
        phone,
        message
      });
    } catch (err) {
      //      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <form>
          <p>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value="name"
              onChange={handleNameChange}
            />
          </p>
          <p>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value="company"
              onChange={handleCompanyChange}
            />
          </p>
          <p>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value="email"
              onChange={handleEmailChange}
            />
          </p>
          <p>
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value="phone"
              onChange={handlePhoneChange}
            />
          </p>
          <p>
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value="message"
              onChange={handleMessageChange}
            />
          </p>
          <p>
            <button onClick={handleSubmit}>Submit</button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
