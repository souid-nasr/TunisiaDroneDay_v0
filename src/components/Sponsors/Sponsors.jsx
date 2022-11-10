import React from 'react'
import './Sponsors.css'
import {logos} from "../../constants/data";
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
function Sponsors() {
  return (
    <div className='sponsors'>
<div className='section-title'>
    <h3 className='text-brown'>Event <span className='text-dark'>Sponsors</span></h3>
    
</div>
<div>
<p className='text'style={{"color":"#FFD700","marginRight":"30px","fontSize":"20px",}}><WorkspacePremiumRoundedIcon/>Gold Sponsors</p>
<div className='logos-list grid'>
    {
        logos.map((logo, index) => {
            return (
                <div className='logos-item' key = {index}>
                    <img src = {logo.image} alt = "" className='mx-auto' />
                </div>
            )
        })
    }
</div>
</div>
<div>
<p className='text'style={{"color":"#C0C0C0","marginRight":"30px","fontSize":"20px","fontWeight":"40px"}}><WorkspacePremiumRoundedIcon/>Silver Sponsors</p>
<div className='logos-list grid'>
    {
        logos.map((logo, index) => {
            return (
                <div className='logos-item' key = {index}>
                    <img src = {logo.image} alt = "" className='mx-auto' />
                </div>
            )
        })
    }
</div>
</div>
<div>
<p className='text'style={{"color":"#CD7F32","marginRight":"30px","fontSize":"20px",}}><WorkspacePremiumRoundedIcon/>Bronze Sponsors</p>
<div className='logos-list grid'>
    {
        logos.map((logo, index) => {
            return (
                <div className='logos-item' key = {index}>
                    <img src = {logo.image} alt = "" className='mx-auto' />
                </div>
            )
        })
    }
</div>
</div>
</div>
  )
}

export default Sponsors