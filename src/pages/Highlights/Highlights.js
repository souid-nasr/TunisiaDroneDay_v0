import React from 'react'
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/EventGallery'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
function Highlights() {
  return (
    <div>
        <Hero hero="roomsHero">
        </Hero>
      <Banner title="Highlights">
      <button className="header__btn btn ">
                <Link to="/register">
                  <i class="ri-user-line"></i> Register to the Event
                </Link>
              </button>
        </Banner>
<Gallery/>  
<Footer />
    </div>
  )
}

export default Highlights