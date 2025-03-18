import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion, useInView } from 'motion/react';

import { contactFormVariants } from '../../utils/animationVariants';
import { validateField, debounce } from '../../utils/helpers';

import './style.css';

const ContactsForm = () => {
  const [submitStatus, setSubmitStatus] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const form = useRef();
  const isInView = useInView(form, { margin: '-100px' });

  const handleInput = debounce((e) => {
    const { name, value } = e.target;

    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  }, 500);

  const sendEmail = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);

    const errors = Array.from(formData.entries()).reduce(
      (acc, [name, value]) => {
        const errorMsg = validateField(name, value);
        if (errorMsg) acc[name] = errorMsg;
        return acc;
      },
      {}
    );

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setSubmitStatus('submitting');

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(() => {
        setSubmitStatus('success');
        form.current.reset();
      })
      .catch(() => setSubmitStatus('error'));
  };

  return (
    <div className="contacts-form">
      <motion.form
        ref={form}
        variants={contactFormVariants}
        animate={isInView ? 'animate' : 'initial'}
        onSubmit={sendEmail}
      >
        <motion.h2 variants={contactFormVariants} className="contact_title">
          Let's keep in touch
        </motion.h2>
        <motion.div variants={contactFormVariants} className="form-item">
          <label>Name*</label>
          <input
            onInput={handleInput}
            type="text"
            name="user_name"
            placeholder="John Doe"
          />
          {formErrors.user_name && (
            <span className="tooltip">{formErrors.user_name}</span>
          )}
        </motion.div>
        <motion.div variants={contactFormVariants} className="form-item">
          <label>Email*</label>
          <input
            onInput={handleInput}
            type="email"
            name="user_email"
            placeholder="john@gmail.com"
          />
          {formErrors.user_email && (
            <span className="tooltip">{formErrors.user_email}</span>
          )}
        </motion.div>
        <motion.div variants={contactFormVariants} className="form-item">
          <label>Message*</label>
          <textarea
            onInput={handleInput}
            rows={10}
            name="user_message"
            placeholder="Write your message..."
          />
          {formErrors.user_message && (
            <span className="tooltip">{formErrors.user_message}</span>
          )}
        </motion.div>
        <motion.button
          disabled={submitStatus === 'submitting'}
          variants={contactFormVariants}
          className="form-button"
        >
          Send
        </motion.button>
        {submitStatus === 'success' && (
          <motion.span
            animate={{ opacity: [0, 1] }}
            className="success-message"
          >
            Your message has been sent!
          </motion.span>
        )}
        {submitStatus === 'error' && (
          <motion.span animate={{ opacity: [0, 1] }} className="error-message">
            Something went wrong!
          </motion.span>
        )}
      </motion.form>
    </div>
  );
};

export default ContactsForm;
