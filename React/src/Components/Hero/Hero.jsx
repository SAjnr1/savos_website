import React, { useEffect, useRef } from 'react'
import './Hero.css'
// import red_next_arrow from '../../assets/red-next-arrow.png'
import { Link } from 'react-scroll';
import ThreeScene from '../../ThreeScene/ThreeScene3';
import { gsap } from 'gsap';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

gsap.registerPlugin(ScrambleTextPlugin);

const Hero = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const tween = gsap.to(titleRef.current, {
            duration: 3.5,
            scrambleText: {
                text: "S A V O S",
                chars: "QWERTYUIOPLKJHGFDSAZXCVBNM",
                revealDelay: 0.3,
                speed: 0.5
                       },
        });

        return () => tween.kill();
    }, []);

    return (
    <div className='hero container' >
        <div className="hero-text">
            <h1 ref={titleRef}></h1>
            {/*<ThreeScene/>*/}
            <h2>We Produce And Provide Quality Food Goods</h2>
            <p>We transform fresh, locally grown tomatoes into delicious, high-quality food products that bring convenience, great taste, and healthy nutrition to every home.
            </p>
           {/* <button className="btn">Explore More <img src={red_next_arrow} alt="" /></button> */}
        </div>
    </div>
  )
}

export default Hero