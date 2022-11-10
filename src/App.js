import './App.css';
import "./assets/js/script";
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import BlogPage from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import RegisterPage from './pages/Register/Register';
import BlogDetails from './pages/Blog/BlogDetails';
import Navbar from './components/Navbar/Navbar';
import Venue from './pages/Venue/Venue';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path="/blogs/:slug" element={<BlogDetails/>} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/venue" element={<Venue/>}/>
      </Routes>
    </div>
  );
}

export default App;
