import React from 'react'
import Objectives from '../../components/Objectives/Objectives';
import About from '../../components/About/About';
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar';


function AboutUs() {
  return (
    <div className="About">
      <About  />
      <Objectives />
      <Footer />
    </div>
  );
}

export default AboutUs