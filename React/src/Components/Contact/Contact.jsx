import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import facebook_icon from '../../assets/facebook-icon.png'
import instagram_icon from '../../assets/instagram-icon.png'
import whatsapp_icon from '../../assets/whatsapp-icon.png'


const Contact = () => {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "8899a924-6ef7-49a8-853a-1e8531bff397");

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
         <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Quo, quisquam. Ad doloremque illum 
            tempora consectetur quae libero blanditiis omnis deleniti sint quam. 
            Blanditiis doloribus at accusantium saepe perferendis quibusdam vel.</p>
            <ul>
                <li><img src={mail_icon} alt="" />mastercodexalpha@gmail.com</li>
                <li><img src={phone_icon} alt="" />+233 244244332</li>
                <li><img src={location_icon} alt="" />P.O. BOX LG 98, LEGON</li>
                <li><img src={facebook_icon} alt="" />**</li>
                <li><img src={whatsapp_icon} alt="" />+233 204366038</li>
                <li><img src={instagram_icon} alt="" />@presec.stem_team</li>
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