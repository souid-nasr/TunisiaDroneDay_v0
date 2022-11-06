import React,{useEffect,useState} from 'react';
import Auth from '../Register/Auth';
import {Link} from 'react-router-dom'
import useModal from "../Register/useModal";
import Modal from "../Register/Modal";
import ReactRotatingText from "react-rotating-text";
import './Header.css'
function Header() {
    const content = ["Tunisia Drone Day"]
  const endTime = new Date('June 02, 2023 09:00:00').getTime();
  const [currentTime,setcurrentTime] = useState(new Date().getTime());
  const gap = endTime - currentTime; //177670892

  const seconds = 1000; // in milliseconds
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const remainingDays = Math.floor(gap / days);
  const remainingHours = Math.floor( (gap % days) / hours);
  const remainingMinutes = Math.floor( (gap % hours) / minutes);
  const remainingSeconds = Math.floor( (gap % minutes) / seconds);

  useEffect(()=>{
    setTimeout(()=>setcurrentTime(new Date().getTime()),1000);
  },[currentTime])


  return (

    <div class="coming-soon">
            <div class="inner-bg">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                        <div class="logo wow fadeInDown">
                        </div>
                            <h2 class="wow fadeInLeftBig"><ReactRotatingText
                items={content}
                emptyPause={250}
                pause={2000}
                typingInterval={70}
             /></h2>
                            <div class="timer wow fadeInUp">
                                <div class="days-wrapper">
                                    <span class="days">{remainingDays}</span> <br/>days
                                </div> 
                                <span class="slash">/</span> 
                                <div class="hours-wrapper">
                                    <span class="hours">{remainingHours}</span> <br/>hours
                                </div> 
                                <span class="slash">/</span> 
                                <div class="minutes-wrapper">
                                    <span class="minutes">{remainingMinutes}</span> <br/>minutes
                                </div> 
                                <span class="slash">/</span> 
                                <div class="seconds-wrapper">
                                    <span class="seconds">{remainingSeconds}</span> <br/>seconds
                                </div>
                            </div>
                            <div class="wow fadeInLeftBig">
                            <p>
                            June 02, 2023  - Science City, Tunis
                            </p>
                            </div>
                        
                <div className='btn-groups flex'>
                  <button type = "button" className='btn-item bg-brown fw-4 ls-2'><Link to='/schedule' style={{"color":"#fff","textDecoration": "none"}}>See Schedule</Link></button>
                  <button type = "button" className='btn-item bg-dark fw-4 ls-2'><Link to='/register' style={{"color":"#fff","textDecoration": "none"}}>Register Now</Link></button>
                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Header