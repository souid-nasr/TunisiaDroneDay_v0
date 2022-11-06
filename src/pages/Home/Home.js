import './Home.css';

import Header from '../../components/Header/Header';
import Objectives from '../../components/Objectives/Objectives';
import Work from '../../components/Work/Work';
import About from '../../components/About/About';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Blog from '../../components/Blog/Blog';
import Speakers from '../../components/Speakers/Speakers';
import Sponsors from '../../components/Sponsors/Sponsors';
import Testimonials from '../../components/Testimentials/Testimonials';
import Resume from '../../components/Resume/Schedule';
import Navbar from '../../components/Navbar/Navbar';


function Home() {
  return (
    <div className="Home">
      <Navbar/>
      <Header/>
      <About />
      <Speakers/>
      <Resume/>
      <Speakers/>
      <Objectives />
      <Work/>
      <Contact />
      <Testimonials/>
      <Blog/>
      <Sponsors/>
      <Footer />
    </div>
  );
}

export default Home