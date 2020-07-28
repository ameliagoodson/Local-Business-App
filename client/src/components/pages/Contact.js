import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";
import API from "../../utils/API.js";
import Icon from "./assets/icon-face.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("ameliajanegoodson@gmail.com");
  const [message, setMessage] = useState("Test message");

  const handleNameChange = event => {
    const value = event.target.value;
    setName(value); //sets the name state with the value from the field
    console.log(name);
  };

  // do handle email change and handle text change

  const handleFormSubmit = event => {
    console.log("hello");
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.sendEmail({
      name: name,
      email: email,
      message: message,
    });
    //implement the post route on server.js
  };
  return (
    <div>
      <div className="container-contact">
        {/* <div className="contact-form-header">
          <header className="contact">Quick Contact</header>
        </div> */}
        <form className="form-contact">
          <div>Quick Contact</div>
          <div className="row">
            <input
              type="text"
              placeholder="Name"
              id="name"
              value={name}
              onChange={handleNameChange}
            ></input>
          </div>
          <div className="row">
            <input type="email" placeholder="Email address" id="email"></input>
          </div>
          <div className="row">
            <textarea
              placeholder="Write your message here"
              id="message"
            ></textarea>
          </div>
          <div className="row">
            <button
              className="submit btn btn-lg btn-primary btn-block"
              onClick={handleFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
