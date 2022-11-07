import React,{useEffect,useState} from 'react';
import Auth from '../Register/Auth';
import {Link} from 'react-router-dom'
import useModal from "../Register/useModal";
import Modal from "../Register/Modal";
import ReactRotatingText from "react-rotating-text";
import affiche from '../../assets/images/header_background.png'
import './Header.css'
import Navbar from '../Navbar/Navbar';
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
<>
<img src={affiche} alt="fdvd"  />
    <div className="coming-soon">
        
    <div className="timer wow fadeInUp">
                                <div className="days-wrapper">
                                    <span className="days">{remainingDays}</span> <br/>Days
                                </div> 
                                 
                                <div className="hours-wrapper">
                                    <span className="hours">{remainingHours}</span> <br/>Hours
                                </div> 
                                 
                                <div className="minutes-wrapper">
                                    <span className="minutes">{remainingMinutes}</span> <br/>Minutes
                                </div> 
                                 
                                <div className="seconds-wrapper">
                                    <span className="seconds">{remainingSeconds}</span> <br/>Seconds
                                </div>
                            </div>
        </div>
        </>
  )
}

export default Header