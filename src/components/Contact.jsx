import React from "react";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 id="contact_h2">Contact Me</h2>
      <div id="contact-container">

      <form id="contact-form">
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
  <button type="submit">Get In Touch</button>
</form>

      <div id="contact_text">
        <p>
          If you have any questions about me or my projects, or (politely) argue
          about the best albums of the 2010s, I'm your girl!
        </p>
        <p>
          I'm available to grab a coffee and chat! Drop a comment, question,
          concern, or Spotify playlist, and thanks for stopping by!
        </p>
        <p>
          You can also contact Straight shot to my inbox:{" "}
          <a href="mailto:your_email@gmail.com">engalihaithaml@gmail>?</a>
        </p>
      </div>
      </div>
    </section>
  );
};

export default Contact;
