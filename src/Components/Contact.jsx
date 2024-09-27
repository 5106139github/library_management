import React from "react";
import '../assets/styles/contact.css'

function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "08070a48-df39-4b77-835e-964e300bd8b5");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact-center">
      <div className="contact-form">
      <form onSubmit={onSubmit} className="form">
        <h1>Contact </h1>
        <input type="text" name="name" required placeholder="Enter Name"/>
        <input type="email" name="email" required placeholder="Enter E-Mail"/>
        <input type="tel" required placeholder="Enter Contact Number"/>
        <textarea name="message" required placeholder="Add Text To Send"></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
    </div>
  );
}

export default Contact;