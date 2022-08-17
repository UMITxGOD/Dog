import React, { useState } from "react";
import styles from "../styles/contactus.module.css";
const Contactus = () => {
  const [name, setName] = useState("");
  const [emailId, setEmail] = useState("");
  const [contactNo, setContactus] = useState("");
  const handleChange = (event) => {
    if (event.target.name === "name") {
      setName(event.target.value);
    } else if (event.target.name === "emailId") {
      setEmail(event.target.value);
    } else if (event.target.name === "contactNo") {
      setContactus(event.target.value);
    }
  };
  const handelSubmite = (event) => {
    event.preventDefault();
    fetch("http://localhost:3000/api/contactus", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, emailId, contactNo }),
    })
      .then((response) => response.text())
      .then((data) => {
        console.log(data);
        setEmail("");
        setName("");
        setContactus("");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className={styles.container}>
      <h1>Contact Us</h1>
      <div>
        <form onSubmit={handelSubmite} method="post" className={styles.form}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="name"
            required
          />
          <br />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="emailId"
            value={emailId}
            onChange={handleChange}
            placeholder="email"
            required
          />
          <br />
          <label htmlFor="contactNo">Phone</label>
          <input
            type="phone"
            name="contactNo"
            value={contactNo}
            onChange={handleChange}
            placeholder="contactNo"
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};
export default Contactus;
