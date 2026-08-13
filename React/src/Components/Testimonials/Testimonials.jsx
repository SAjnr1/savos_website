import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/images_savos.png'
import user_2 from '../../assets/images_savos.png'
import user_3 from '../../assets/images_savos.png'
import user_4 from '../../assets/images_savos.png'



const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const slideBackward= ()=>{
        if(tx < 0){
            tx +=25;
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }





  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className="next-btn" onClick={slideForward}/>
        <img src={back_icon} alt="" className="back-btn" onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider} >
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>Dr. Kwesi Crankson</h3>
                                <span>Academic City University, Ghana</span>
                            </div>
                        </div>
                        <p>
                            I love that there are no hidden sugars or artificial ingredients. 
                            It saves me 30 minutes of chopping and prep time every single week.
                             
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>Rhodaline Yeboah</h3>
                                <span>Aburi Girls' SHS, Ghana</span>
                            </div>
                        </div>
                        <p>
                            Savos shito is absolutely delicious. 
                            It has a rich flavour, a satisfying level of spice, and pairs wonderfully with a variety of meals. 
                            One taste and you will want more, I will recommend for averyone😋😋
                             
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum dignissimos sed voluptate ipsa. Molestias ea natus quos fugit?
                            
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>William Jackson</h3>
                                <span>Edusity, USA</span>
                            </div>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum dignissimos sed voluptate ipsa. Molestias ea natus quos fugit?
                             
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Testimonials 