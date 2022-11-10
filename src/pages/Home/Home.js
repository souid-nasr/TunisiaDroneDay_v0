import './Home.css';

import Header from '../../components/Header/Header';
import Objectives from '../../components/Objectives/Objectives';
import Footer from '../../components/Footer/Footer';
import Speakers from '../../components/Speakers/Speakers';
import Sponsors from '../../components/Sponsors/Sponsors';



function Home() {
  return (
    <div className="Home">
      <Header/>
      <Objectives />
      <Speakers/>
      <Sponsors/>
      <Footer />
    </div>
  );
}

export default Home