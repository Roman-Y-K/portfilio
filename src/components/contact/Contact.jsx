import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'motion/react';

import ContactSvg from './ContactSvg';
import { contactFormVariants } from '../../constants/animationVariants';

import './style.css';

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          setError(false);
        },
        (error) => {
          console.log(error, 'eer');
          setError(true);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="contact" ref={ref} onSubmit={sendEmail}>
      <div className="contact-section">
        <motion.form
          ref={form}
          variants={contactFormVariants}
          animate={isInView ? 'animate' : 'initial'}
        >
          <motion.h2 variants={contactFormVariants} className="contact_title">
            Let's keep in touch
          </motion.h2>
          <motion.div variants={contactFormVariants} className="form-item">
            <label>Name</label>
            <input
              required
              type="text"
              name="user_username"
              placeholder="John Doe"
            />
          </motion.div>
          <motion.div variants={contactFormVariants} className="form-item">
            <label>Email</label>
            <input
              required
              type="email"
              name="user_email"
              placeholder="john@gmail.com"
            />
          </motion.div>
          <motion.div variants={contactFormVariants} className="form-item">
            <label>Message</label>
            <textarea
              required
              rows={10}
              name="user_message"
              placeholder="Write your message..."
            ></textarea>
          </motion.div>
          <motion.button variants={contactFormVariants} className="form-button">
            Send
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </div>
      <div className="contact-section right">
        <ContactSvg />
      </div>
    </div>
  );
};

export default Contact;
