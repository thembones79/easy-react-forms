import React, { Component } from "react";
import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    sent: false,
    buttonText: "Send Message"
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

  handleSubmit = async e => {
    //const { name, company, email, phone, message } = this.state;
    e.preventDefault();
    this.setState({
      buttonText: "...sending"
    });

    try {
      await axios.post(
        `https://enigmatic-tor-81088.herokuapp.com/send`,
        this.state
      );
      await function(response) {
        console.log(response);
      };
      this.setState({ sent: true }, this.resetForm());
    } catch (err) {
      console.log(err);
    }
  };

  resetForm = () => {
    this.setState({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      buttonText: "Message Sent"
    });
  };

  render() {
    const { name, company, email, phone, message } = this.state;
    return (
      <div>
        <form className="magic-form" onSubmit={this.handleSubmit}>
          <p>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={name}
              required
              onChange={this.handleNameChange}
            />
          </p>
          <p>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={company}
              required
              onChange={this.handleCompanyChange}
            />
          </p>
          <p>
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={email}
              required
              onChange={this.handleEmailChange}
            />
          </p>
          <p>
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              value={phone}
              required
              onChange={this.handlePhoneChange}
            />
          </p>
          <p>
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={message}
              required
              onChange={this.handleMessageChange}
            />
          </p>

          <p>
            <button type="submit">{this.state.buttonText}</button>
          </p>
        </form>
      </div>
    );
  }
}

export default App;
