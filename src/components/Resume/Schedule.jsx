import React from 'react'
import './Schedule.css'
import { ScheduleData } from '../../constants/data'
import avatar from '../../assets/images/avatar.png'
function Schedule() {
  return (
    <div>
      <section>
      <div className='section-title'>
                    <h3 className='text-brown'>Event <span className='text-dark'>Schedule</span></h3>
                    <p className='text'>we offer the right drone environment.</p>
    </div>
<div class="container py-5">
    <div class="row">
        <div class="col-md-12">
            <div class="main-timeline">
            {
                        ScheduleData.map((el, index) => {
              return (
                <div class="timeline" key={index}>
                    <div class="timeline-content">
                        <div class="circle"><span class="homebox"><img src={avatar} class="img" alt='speaker'/></span></div>
                        <div class="content">
                            <span class="year">{el.time}</span>
                            <h3 class="title h4">{el.title}</h3>
                            
                            <p class="description">
                                {el.speaker}</p>
                            <p class="description">
                                Id eu nisl nunc mi ipsum faucibus vitae aliquet. Placerat orci nulla pellentesque dignissim enim.</p>
                            
                            <div class="icon"><span></span></div>
                        </div>
                    </div>
                </div>
                                          )
                                        })
                                    }        
            </div>
        </div>
    </div>
</div>
</section>
    </div>
  )
}

export default Schedule