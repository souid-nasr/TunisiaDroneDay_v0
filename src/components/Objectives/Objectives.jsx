import React from 'react';
import "./Objectives.css";
import {objectives} from "../../constants/data";

const Objectives = () => {
  return (
    <div className='objectives section-p' id = "objectives">
        <div className='container'>
            <div className='objectives-content'>
                <div className='section-title'>
                    <h3 className='text-brown'>Event <span className='text-dark'>Objectives</span></h3>
                    <p className='text'>w offer the right solutions for the drone environment.</p>
                </div>

                <div className='objectives-list grid'>
                    {
                        objectives.map((objective, index) => {
                            return (
                                <div className='objectives-item text-center' key = {index}>
                                    <div className='objectives-item-img'>
                                        <img src = {objective.image} className = "mx-auto" alt = "" />
                                    </div>
                                    <div className='objectives-item-text'>
                                        <h4 className='fs-22 fw-5 op-08'>{objective.title}</h4>
                                        <p className='text mx-auto'>{objective.paragraph}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Objectives