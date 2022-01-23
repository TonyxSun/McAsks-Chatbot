// const { DbService } = require("m3o/db");
import React from "react";

// const dbService = new DbService(process.env.M3O_TOKEN);
import styles from "../styles/Home.module.css";

const initialFormData = Object.freeze({
  number: "",
});

export function Form() {
  const [formData, updateFormData] = React.useState(initialFormData);

  const handleChange = (event) => {
    updateFormData({
      ...formData,

      // Trimming any whitespace
      [event.target.name]: event.target.value.trim(),
    });
  };

  const registerUser = async (event) => {
    event.preventDefault();

    console.log(event.target.textinput.value);
    const res = await fetch("https://api.m3o.com/v1/db/Create", {
      body: JSON.stringify({
        record: { number: event.target.textinput.value },
        table: "numbers",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer Mzc0YTE1ZWItYjdlOC00MzUyLWE3YTgtMDdlNzZhMmI4NmU5",
      },
      method: "POST",
    });

    const result = await res.json();

    // send a text msg too
    const res2 = await fetch("https://api.m3o.com/v1/emoji/Send", {
      body: JSON.stringify({
        from: "your assistant McAsks.",
        message: "Thank you for signing up and cheers to the future! 🥂 ",
        to: event.target.textinput.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer Mzc0YTE1ZWItYjdlOC00MzUyLWE3YTgtMDdlNzZhMmI4NmU5",
      },
      method: "POST",
    });

    const result2 = await res2.json();
  };

  return (
    <form onSubmit={registerUser}>
      <label htmlFor="textinput"></label>
      <input
        id="textinput"
        name="textinput"
        onChange={handleChange}
        className={styles.textinput}
        type="text"
        autoComplete="YOUR PHONE NUMBER HERE"
        required
      />
      <button type="submit" className={styles.button}>
        &rarr;
      </button>{" "}
    </form>
  );
}
