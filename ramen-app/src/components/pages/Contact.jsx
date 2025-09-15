import React from 'react';
import Banner from '../Banner';
import Footer from '../Footer/Footer';
import './Contact.css';

function Contact() {
  return (
    <div className='contact-container'>
      <Banner title="Contact"/>

      <div className='contact'>
        <h1>Contact Us</h1>
        <p>Let us know what you think of our ramen! In order to provide better service, please do not hesitate to give us your feedback. Thank You!</p>
        <form>
          <input type='text' placeholder='Name'/>
          <input type='text' placeholder='Email'/>
          <textarea rows="4" cols="50" placeholder='Message'/>
        </form>
      </div>

      <Footer />
    </div>
  )
}

export default Contact