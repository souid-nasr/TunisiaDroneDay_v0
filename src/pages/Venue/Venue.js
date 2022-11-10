import React from 'react'
import './Venue.css'
import Footer from '../../components/Footer/Footer'
import VenueGallery from '../../components/Gallery/VenueGallery'
import Hotel from '../../components/Hotel/hotel'
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import Hero from '../../components/Hero/Hero';
function Venue() {
  return (
    <>
    <Hero hero="roomsHero">
        </Hero>
      <Banner title="Venue">
      <button className="header__btn btn ">
                <Link to="/register">
                  <i class="ri-user-line"></i> Register to the Event
                </Link>
              </button>
        </Banner>
    <section class = "contact-section">
      <div class = "contact-bg">
        <h3 style={{"color":"#19135d"}}>See you Here</h3>
        <h2 style={{"color":"#19135d"}}>Science City</h2>
        <div class = "line">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <p class = "text">La Cité des Sciences à Tunis est chargée de diffuser la culture scientifique sur tout le territoire national, auprès des différentes catégories de la population et plus particulièrement auprès des jeunes.</p>
      </div>
      <div class = "contact-body">
        <div class = "contact-info">
          <div>
            <span><i class = "fas fa-mobile-alt"></i></span>
            <span>Phone No.</span>
            <span class = "text">1-2392-23928-2</span>
          </div>
          <div>
            <span><i class = "fas fa-envelope-open"></i></span>
            <span>E-mail</span>
            <span class = "text">mail@company.com</span>
          </div>
          <div>
            <span><i class = "fas fa-map-marker-alt"></i></span>
            <span>Address</span>
            <span class = "text">2939 Patrick Street, Vicotria TX, United States</span>
          </div>
          <div>
            <span><i class = "fas fa-clock"></i></span>
            <span>Opening Hours</span>
            <span class = "text">Monday - Friday (9:00 AM to 5:00 PM)</span>
            <span class = "text">Monday - Friday (9:00 AM to 5:00 PM)</span>
          </div>
        </div>
<VenueGallery/>
      </div>
      <Hotel/>
      <div class = "map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d3343270.374717143!2d8.181613178391629!3d35.08391957267567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d33.5018076!2d10.8001778!4m5!1s0x12fd34b9dee763fd%3A0xdca263934c8cca90!2scit%C3%A9%20des%20sciences!3m2!1d36.849059499999996!2d10.1886222!5e0!3m2!1sfr!2stn!4v1668001970234!5m2!1sfr!2stn" style={{ "width":"100%", "height":"450", "frameborder":"0","allowfullscreen":"","ariaHidden":"false", "tabindex":"0"}}></iframe>
      </div>
    </section>
    
    <Footer/>
    </>
  )
}

export default Venue