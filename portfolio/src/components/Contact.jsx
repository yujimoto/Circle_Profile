import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        message: ''
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_unwok9p', 'template_3866gzz', e.target, import.meta.env.VITE_APP_EMAIL_PUBLIC_ID)
          .then((result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            setFormData({ user_name: '', user_email: '', message: '' });
          }, (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again.');
          });
      };
    
      return (
        <div className="contact-form-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Me</h2>
          <div className="form-group">
            <label htmlFor="user_name">Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="user_email">Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
        
      </div>
      
    );
  };
  
  export default Contact;