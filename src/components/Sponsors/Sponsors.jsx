import React from 'react'
import './Sponsors.css'
import {logos} from "../../constants/data";
function Sponsors() {
  return (
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
  )
}

export default Sponsors