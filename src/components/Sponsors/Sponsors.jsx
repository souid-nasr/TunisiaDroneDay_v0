import React from 'react'
import './Sponsors.css'
import {logos} from "../../constants/data";
function Sponsors() {
  return (
    <div className='sponsors'>
<div className='section-title'>
    <h3 className='text-brown'>Event <span className='text-dark'>Sponsors</span></h3>
    
</div>
<div>
<h3 className='text-brown' style={{color:"red",marginLeft:"30px"}}><span className='text-dark'style={{color:"#CD7F32"}}>Partenaire Privilege</span></h3><div className='logos-list grid'>
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
<h3 className='text-brown'><span className='text-dark'style={{"color":"#CD7F32",marginLeft:"30px"}}>Partenaire Premium</span></h3><div className='logos-list grid'>    {
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
<h3 className='text-brown'><span className='text-dark'style={{"color":"#CD7F32",marginLeft:"30px"}}>Sponsor</span></h3><div className='logos-list grid'>
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
<h3 className='text-brown'><span className='text-dark' style={{"color":"#CD7F32",marginLeft:"30px"}}>Startup</span></h3><div className='logos-list grid'>
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