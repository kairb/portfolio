import React, { useState } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      {submitted ? (
        <h1>Thank you! I'll be in touch shortly</h1>
      ) : (
        <>
          <h1>Contact</h1>
          <h2>
            Doing something cool? feel free to drop me a message and I'll get
            back to you as soon as possible
          </h2>
          <ContactForm setSubmitted={setSubmitted} />
        </>
      )}
    </>
  );
};
export async function getStaticProps() {
  return {
    props: {
    },
  };
}

export default Contact;
