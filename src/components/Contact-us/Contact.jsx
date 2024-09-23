import React from "react";
import "./Contact.css";
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
  return (
    <div className="contact">
      
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt="" /></h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quod
          voluptatum quidem impedit explicabo dolorum ipsum distinctio minima
          architecto dolor!
        </p>
        <ul>
            <li><img src={mail_icon} alt="" />Contact@Sabayasmin345.dev</li>
            <li><img src={phone_icon} alt="" />+1 234 567 8901</li>
            <li><img src={location_icon} alt="" />West of Salt lake, London.</li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
            <label>Your Name</label>
            <input type="text" name='name' placeholder="Enter your name" required />
            <label>Phone Number</label>
            <input type="number" name='phone' placeholder="Enter your phone number" required />
            <label>Write your message</label>
            <textarea name="message" rows="6" placeholder="Enter your Message" required />
            <button type="submit" className="btn dark-btn">Submit Now <img src={white_arrow} alt="" /></button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
