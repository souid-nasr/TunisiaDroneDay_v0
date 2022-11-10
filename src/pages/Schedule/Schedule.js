
import Footer from '../../components/Footer/Footer';
import Speakers from '../../components/Speakers/Speakers';
import Resume from '../../components/Resume/Schedule';
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import Hero from '../../components/Hero/Hero';

function Schedule() {
  return (
    <div className="Schedule">
      <Hero hero="roomsHero">
        </Hero>
      <Banner title="Schedule">
      <button className="header__btn btn ">
                <Link to="/register">
                  <i class="ri-user-line"></i> Register to the Event
                </Link>
              </button>
        </Banner>
      <Speakers/>
      <Resume/>
      <Footer />
    </div>
  );
}
export default Schedule