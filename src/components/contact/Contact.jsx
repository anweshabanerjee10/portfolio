import "./Contact.scss";
import { send } from "emailjs-com";

import { useState } from "react";

const Contact = () => {
  const [message, setMessage] = useState("");
  const [sender_email, setSender_email] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);

    send(
      "service_8th23vb",
      "template_dlw6wj7",
      {
        sender_email,
        message,
      },
      "5p-XybyCxN-FAhIGa"
    )
      .then((result) => {
        console.log(result.text);
      })
      .catch((err) => {
        console.log(err.text);
      });
  };

  const handleemail = (e) => {
    setSender_email(e.target.value);
  };

  const handlemessage = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="/assests/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="sender_email"
            value={sender_email}
            onChange={handleemail}
            placeholder="Email"
          />
          <textarea
            name="message"
            value={message}
            onChange={handlemessage}
            placeholder="message"
          ></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
