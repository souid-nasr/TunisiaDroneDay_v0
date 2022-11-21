import React from 'react'
import './Banner.css'
export default function Banner({ children , title , subtitle  }) {
    return (
        <div className="banner">
            <h1 style={{color:"white"}}>{title}</h1>  
            <div/>
            <p>{subtitle}</p>
            {children}
        </div>
    )
}