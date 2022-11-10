import React from 'react'
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Gallery from '../../components/Gallery/EventGallery'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
function AboutUs() {
  return (
    <div className="About">
        <Hero hero="roomsHero">
        </Hero>
      <Banner title="About Us">
      <button className="header__btn btn ">
                <Link to="/register">
                  <i class="ri-user-line"></i> Register to the Event
                </Link>
              </button>
        </Banner>
      <About  />
<Gallery/>  
<Footer />
    </div>
  );
}

export default AboutUs