
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';
import Sponsors from '../../components/Sponsors/Sponsors';
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import Hero from '../../components/Hero/Hero';

function ContactUs() {
  return (
    <div className="ContactUs">
      <Hero hero="roomsHero">
        </Hero>
      <Banner title="Contact Us">
      <button className="header__btn btn ">
                <Link to="/register">
                  <i class="ri-user-line"></i> Register to the Event
                </Link>
              </button>
        </Banner>
      <Contact />
      <Sponsors/>
      <Footer />
    </div>
  );
}

export default ContactUs