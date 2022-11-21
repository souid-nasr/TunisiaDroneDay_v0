import React from 'react';
import "./Footer.css";
const Footer = () => {
  return (
    <div className='footer'>
    <div className="footer-container">
    <div className="footer-content-container">
        <h3 className="website-logo">Tunisia Drone Day</h3>
        <span className="footer-info">111 111 111</span>
        <span className="footer-info">academy@itskrey.com</span>
    </div>
    <div className="footer-menus">
    {/* <span className="menu-title">menu</span> */}
        <div className="footer-content-container">
            <a href="/" className="menu-item-footer">Home</a>
            <a href="/about" className="menu-item-footer">About</a>
            <a href="/program" className="menu-item-footer">Program</a>
        </div>
        <div className="footer-content-container">
            <a href="/venue" className="menu-item-footer">Venue</a>
            <a href="/blogs" className="menu-item-footer">Blog</a>
            <a href="/contact" className="menu-item-footer">Contact</a>
        </div>
    </div>
    
    <div className="footer-content-container">
        <span className="menu-title">follow us</span>
        <div className="social-container">
            <a href="" className="social-link"></a>
            <a href="" className="social-link"></a>
            <a href="" className="social-link"></a>
        </div>
    </div>
</div>
<div className="copyright-container">
    <span className="copyright">Copyright 2022, AGEOS. All rights reserved.</span>
</div>
</div>
  )
}

export default Footer