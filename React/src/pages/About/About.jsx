import React from 'react'
import './About.css'
import Title from '../../Components/Title/Title'
import Navbar from '../../Components/Navbar/Navbar'
import person1 from '../../assets/person1.png'
import person2 from '../../assets/person2.png'
import person4 from '../../assets/person4.png'
import person3 from '../../assets/person3.png'
import Footer from '../../Components/Footer/footer'
import play_icon from '../../assets/red-arrow.png'
// The image dimensions are 1194 × 1144 pixels.

const About = () => {
  return (
    <>
    <Navbar/>
    <div className="info">
      <Title subTitle='OUR COMPANY' title='ABOUT US'/>
    </div>
       <div className="project-lead">
        <div className="profile">
          <h3>Abdullah Mansura</h3>
          <h5>Chief Executive Officer (CEO)</h5>
          <p>Akumadan in the Offinso North District of Ghana faces significant post-harvest losses 
            in tomato farming due to market gluts, poor packaging, inadequate storage and infrastructure,
             and competition from imported tomatoes. 
             During peak harvest seasons, oversupply causes prices to fall, while poor packaging 
             and the lack of cold storage and processing facilities accelerate spoilage.
             These challenges affect farmers’ incomes and contribute to agricultural waste. 
             This reality inspired my team and I to ask: What if technology could extend the shelf life of 
             tomatoes while creating more value for farmers?
             That question led to the creation of SAVOS, a circular tomato economy designed to extend tomato marketability, 
             reduce agricultural waste, create multiple revenue streams, and help farmers gain more value 
             from their harvest.
</p>
        </div>
        <div className="profile-picture">
          <img src={person2} className='propic'/>
        </div>
       </div>
       <div className="project-lead">
        <div className="profile-picture">
          <img src={person1} className='propic'/>
        </div>
        <div className="profile">
          <h3>Agyei Boadiwaa Emmanuella</h3>
          <h5>Finance Manager</h5>
          <p>I have always been interested in agriculture and the important role farmers play in 
            providing food for our communities. While thinking about tomatoes, 
            I realized that farmers can lose a lot when their produce spoils before it is sold. 
            That made me want to find a way of giving tomatoes a longer useful life and creating more 
            value from them. I shared the idea with my teammates, and together we decided to build SAVOS 
            around it. We wanted to create something that could connect agriculture with food processing 
            and entrepreneurship while making better use of locally grown tomatoes and supporting the 
            people who produce them.</p>
        </div> 
       </div>
       <div className="project-lead">
        <div className="profile">
          <h3>Dellor Mawumelon Rejoyce</h3>
          <h5>Production Manager</h5>
          <p>The idea behind SAVOS started with my curiosity about how ordinary tomatoes could be 
            turned into different useful products. I began thinking about products such as ketchup 
            and shito and how we could develop our own versions using locally sourced tomatoes. 
            I wanted to create something that was not just an idea on paper but a business we could 
            actually develop, experiment with, and improve ourselves. 
            When I discussed the idea with my teammates, we realized that we shared the same interest 
            in creating something of our own. 
            That became the foundation of SAVOS and motivated us to explore tomato processing together.</p>
        </div>
        <div className="profile-picture">
          <img src={person3} className='propic'/>
        </div>
       </div>
       <div className="project-lead">
        <div className="profile-picture">
          <img src={person4} className='propic'/>
        </div>
        <div className="profile">
          <h3>Arthur Adelina Kwakyewaa</h3>
          <h5>Marketing Director</h5>
          <p>I wanted to be part of creating a business from an idea that we developed ourselves. 
            I became interested in tomatoes because they are widely available and can be used to make 
            several valuable products. 
            Rather than seeing tomatoes only as something used in cooking, 
            I started thinking about how we could preserve them and turn them into products with greater 
            value. I shared my thoughts with the team, and we decided to develop SAVOS together. 
            What attracted me most was the freedom to experiment, make decisions, solve problems, 
            and build something from the ground up. SAVOS represents our own creativity, teamwork, 
            and entrepreneurial thinking. </p>
        </div>
       </div>

       <Footer/>
    </>
  )
}

export default About