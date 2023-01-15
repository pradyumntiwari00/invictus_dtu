import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  // State variables for the form input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Send the form data to the server or a third-party service here
    console.log(name, email, message);
    // Reset the form after submission
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form className="contact-form text-white" onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "row"}}>
        <div style={{marginRight:"2rem"}}>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-input"
          />
        </div>
        <div>
          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="form-input"
          />
        </div>
      </div>
      <br />
      <label htmlFor="message" className="form-label">
        Message:
      </label>
      <textarea
        id="message"
        value={message}
        onChange={(event) => setMessage(event.target.value)}
        className="form-input"
      />
      <br />
      <button type="submit" className="form-button">
        Send
      </button>
    </form>
  );
};

export default ContactUs;
