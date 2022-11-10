
import Blog from '../../components/Blog/Blog';
import Banner from '../../components/Banner/Banner'
import {Link} from 'react-router-dom'
import Hero from '../../components/Hero/Hero';

function BlogPage() {
  return (
    <div className="Blog">
              <Hero hero="roomsHero">
        </Hero>
      <Banner title="Blogs">
      <button className="header__btn btn ">
                <Link to="/register">
                  <i class="ri-user-line"></i> Register to the Event
                </Link>
              </button>
        </Banner>
      <Blog/>
    </div>
  );
}

export default BlogPage