import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import instagram_icon from '../../assets/instagram-icon.png'
import whatsapp_icon from '../../assets/whatsapp-icon.png'


const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6417919e-3b86-484b-af10-28ac28499515");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };





  return (
    <div className='contact'>
       <div className="contact-col">
         <h3>Send us a message <img src={msg_icon} alt="" /></h3>
         <p>We’d love to hear from you! Whether you have questions about our tomato ketchup, authentic shito, tomato coating, 
          or our innovative tomato-based facial treatments and cosmetics, or you’d like to share your feedback and experiences, 
          we’re all ears. Our team is ready to assist you and will respond promptly. Thank you for choosing SAVOS!</p>
            <ul>
                <li><img src={phone_icon} alt="" />+233 558 877 516</li>
                <li><img src={mail_icon} alt="" />savos2.0africa@gmail.com</li>
                <li><img src={whatsapp_icon} alt="" />+233 558 877 516</li>
                <li><img src={instagram_icon} alt="" />@savos2.0</li>
                <li><img src={location_icon} alt="" />P. O. BOX 46, Aburi</li>
            </ul>
       </div> 
       <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type="text" name='name' placeholder='Enter your name ' required/>
            <label>Phone number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number ' required/>
            <label>Write your message here</label>
            <textarea name="message"  rows="6" placeholder='Enter your message'></textarea>
            <button type='submit' className="btn dark-btn">Submit now <img src={white_arrow} alt="" /></button>
        </form>
        <span>{result}</span>
       </div> 
    </div>
  )
}

export default Contact