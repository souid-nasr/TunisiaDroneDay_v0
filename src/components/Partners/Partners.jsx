import React from 'react'
import {partners} from "../../constants/data";
import WorkspacePremiumRoundedIcon from '@mui/icons-material/WorkspacePremiumRounded';
function Partners() {
  return (
    <div className='sponsors'>
<div className='section-title'>
    <h3 className='text-brown'>Our <span className='text-dark'>Partners</span></h3>
    
</div>
<div>
<div className='logos-list grid'>
    {
        partners.map((logo, index) => {
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

export default Partners