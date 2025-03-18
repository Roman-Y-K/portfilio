import React from 'react';

import ContactsForm from '../components/contact/ContactsForm';
import ContactSvg from '../components/contact/ContactSvg';

const ContsctsSection = () => {
  return (
    <section className="contact-section" id="contact">
      <ContactsForm />
      <ContactSvg />
    </section>
  );
};

export default ContsctsSection;
