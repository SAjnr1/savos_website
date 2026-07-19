import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/red-arrow.png'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img'/>
            <img src={play_icon} alt="" className="play-icon" />
        </div>
        <div className="about-right">
            <h3>ABOUT COMPANY</h3>
            <h2>OUR MISSION AND VISION AS A COMPANY</h2>
            <p>  </p>
            <p><h3>MISSION:</h3>To produce fresh, nutritious, and affordable tomato-based food products using carefully selected ingredients while empowering local farmers, ensuring customer satisfaction, 
            and contributing to a healthier and more sustainable future.</p>
            <p><h3>VISION:</h3>To become the leading provider of high-quality tomato-based foods, 
            recognized for delivering exceptional taste, promoting healthy living, 
            and supporting sustainable agriculture in our communities.</p>
        </div>
    </div>
  )
}

export default About