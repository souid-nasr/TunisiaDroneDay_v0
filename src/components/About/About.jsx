import React, {useRef, useState} from 'react';
import "./About.css";
import logo from "../../assets/images/logo_ageos_01(ar_en).png";
import {about_stats} from "../../constants/data";
import video from "../../assets/videos/video.mp4";
import {FaPlay} from "react-icons/fa";
import CountUp from 'react-countup'
import Partners from '../Partners/Partners';
const About = () => {
    const vidRef = useRef(null);
    const [toggleVideo, setToggleVideo] = useState(false);
    const playVideo = () => {
        setToggleVideo(!toggleVideo);
        if(toggleVideo) vidRef.current.play();
        else vidRef.current.pause();
    }

  return (
    <div className='about section-p'>
                        <div className='section-title'>
                    <h3 className='text-brown'>About <span className='text-dark'>Us</span></h3>
                    <p className='text'>We offer the right drone environment.</p>
                </div>
        <div className='container'>
            <div className='about-content'>
                <div className='about-grid grid'>
                    <img src = {logo} alt = "" className='about-img mx-auto' />
                    <div className='section-title'>
                        <h3 className='text-brown'>Tunisia Drone <span className='text-dark'>Day</span></h3>
                        <p className='text mx-auto'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam culpa distinctio mollitia consectetur dolore! Iusto dolores reprehenderit at ad! Molestiae.</p>
                    </div>
                </div>

                <div className='about-grid grid'>
                    {
                        about_stats.map((about_stat, index) => {
                            return (
                                <div className='about-item text-center flex' key = {index}>
                                    <div className='about-item-icon'>
                                        <img src = {about_stat.image} alt = "" />
                                    </div>
                                    <div className='about-item-text text-left'>
                                        <h3 className='fs-24 ls-2'>+<CountUp end={about_stat.value} duration={5.75}/></h3>
                                        <p className='text'>{about_stat.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className='about-grid grid'>
                    <div className='section-title'>
                        <h3 className='text-brown'>Let's Drone <span className='text-dark'>Tunisia</span></h3>
                        <p className='text mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est molestias maxime tenetur, temporibus aspernatur, omnis expedita saepe sapiente adipisci laboriosam necessitatibus ullam eveniet asperiores nostrum.</p>
                    </div>

                    <div className='about-video'>
                        <video className='about-video' autoPlay loop ref = {vidRef}>
                            <source src = {video} type = "video/mp4" />
                        </video>
                        <button type = "button" className='vidPlayBtn flex flex-c' onClick={playVideo}>
                            <FaPlay className='text-brown' size = {28} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <Partners/>
    </div>
  )
}

export default About