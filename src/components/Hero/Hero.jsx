import React from 'react'
import './Hero.css'

export default function Hero({childern, hero}) {
    return <header className={hero}>{childern}</header>;
    
}