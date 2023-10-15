import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './CSS Files/Contact.css';

function Contact() {
  return (
    <section className='contact-wrap' id='Contact'>
      <div className='content'>
        <h1>Contact <span className="period">.</span> </h1>
        <p>Send me an email if you want to connect! Additionally, you can find me on <a className='linked-in' href="https://www.linkedin.com/in/ruturaj-gujar/" target="_blank" rel="noopener noreferrer">LinkedIn </a>, shoot a message if you have to!</p>
        <a className="email" href="mailto:ruturaj.gujar23@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="period" style={{ marginRight: "5px" }} />
          ruturaj.gujar23@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;