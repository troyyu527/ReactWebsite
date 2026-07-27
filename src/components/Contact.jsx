import React, { useState } from 'react';
import '../css/contactme.css';
import media from '../profile/play-4-512.png';
import linkedin from '../profile/linkedin_icon.png';
import github from '../profile/github_icon.png';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSend = (e) => {
    e.preventDefault();
    
    // Create mailto link with pre-filled fields
    const recipient = 'troy0527@gmail.com';
    const subject = encodeURIComponent('Contact from Portfolio: ' + formData.name);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
    );
    
    // Open default email client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
    
    setStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    
      <section id="contact-1105" style={{marginTop:"60px"}}>
        <div className="cs-container">
            <div className="cs-content" >
                <span className="cs-topper">Contact Me</span>
                <h4 className="cs-title">Share Your Thought</h4>
                
                {status === 'success' && (
                  <div style={{color: 'green', marginBottom: 'rem', padding: '1rem', background: '#d4edda', borderRadius: '8px'}}>
                    Email client opened! Please send the email.
                  </div>
                )}
                
                <form className="cs-form" id="cs-form-1105" name="Contact Form" method="post">
                    <label className="cs-label">
                        Name
                        <input 
                          className="cs-input" 
                          required 
                          type="text" 
                          id="name-1105" 
                          name="name" 
                          placeholder="Name"
                          value={formData.name}
                          onChange={handleChange}
                        />
                    </label>
                    <label className="cs-label cs-email">
                        Email
                        <input 
                          className="cs-input" 
                          required 
                          type="email" 
                          id="email-1105" 
                          name="email" 
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                    </label>
                    <label className="cs-label cs-phone">
                        Phone
                        <input 
                          className="cs-input" 
                          required 
                          type="phone" 
                          id="phone-1105" 
                          name="phone" 
                          placeholder="Phone"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                    </label>
                    <label className="cs-label">
                        Message
                        <textarea 
                          className="cs-input cs-textarea" 
                          required 
                          name="message" 
                          id="message-1105" 
                          placeholder="Write message..."
                          value={formData.message}
                          onChange={handleChange}
                        ></textarea>
                    </label>
                    <button 
                      className="cs-button-solid cs-submit" 
                      type="submit" 
                      onClick={handleSend}
                    >
                      Send via Email Client
                    </button>
                </form>
            </div>
            <ul className="cs-ul" >
                <li className="cs-li">
                    <picture className="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-phone.svg" alt="phone icon" className="cs-icon" width="40" height="40" decoding="async"/>
                    </picture>
                    <div className="cs-flex-group">
                        <span className="cs-header">Phone</span>
                        <a href="tel:347-634-1025" className="cs-link">+1 (347) 634 1025</a>
                    </div>
                </li>
                <li className="cs-li">
                    <picture className="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-email.svg" alt="mail icon" className="cs-icon" width="40" height="40" decoding="async"/>
                    </picture>
                    <div className="cs-flex-group">
                        <span className="cs-header">Email</span>
                        <a href="mailto:troy0527@gmail.com" className="cs-link">troy0527@gmail.com</a>
                    </div>
                </li>
                <li className="cs-li">
                    <picture className="cs-icon-wrapper">
                        <img aria-hidden="true" src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Icons/mech-pin.svg" alt="address icon" className="cs-icon" width="40" height="40" decoding="async"/>
                    </picture>
                    <div className="cs-flex-group">
                        <span className="cs-header">Address</span>
                        <a href="https://www.google.com/maps/search/?api=1&query=New+York" className="cs-link">New York, USA</a>
                    </div>
                </li>
                <li className="cs-li">
                    <picture className="cs-icon-wrapper">
                        <img aria-hidden="true" src={media} alt="media icon" className="cs-icon" width="40" height="40" decoding="async"/>
                    </picture>
                    <div className="cs-flex-group">
                        <span className="cs-header">Media</span>
                        <a href="https://www.linkedin.com/in/troy-yu-5244b694" className="cs-link" style={{display:"flex", alignItems:"center",marginBottom:"1rem"}}>
                          <img aria-hidden="true" src={linkedin} alt="linkedin icon" className="cs-icon" width="10" height="10" decoding="async"/>
                          <b style={{marginLeft:"1rem"}}>Linkedin</b>
                        </a>
                        <a href="https://github.com/troyyu527" className="cs-link" style={{display:"flex", alignItems:"center"}}>
                          <img aria-hidden="true" src={github} alt="github icon" className="cs-icon" width="10" height="10" decoding="async"/>
                          <b style={{marginLeft:"1rem"}}>GitHub</b>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
    </section>
    
  )
}

export default Contact
