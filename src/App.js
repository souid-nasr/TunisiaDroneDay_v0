import './App.css';
import "./assets/js/script";
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import About from './pages/About/About';
import Schedule from './pages/Schedule/Schedule';
import BlogPage from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import BlogDetails from './pages/Blog/BlogDetails';
import Navbar from './components/Navbar/Navbar';
import Venue from './pages/Venue/Venue';
import Highlights from './pages/Highlights/Highlights';
import {UserForm} from './components/Register/UserForm'

function App() {

  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/program" element={<Schedule/>}/>
        <Route path="/blogs" element={<BlogPage/>}/>
        <Route path="/blogs/:slug" element={<BlogDetails/>} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/register" element={<UserForm />}/>
        <Route path="/venue" element={<Venue/>}/>
        <Route path="/highlights" element={<Highlights/>}/>
      </Routes>
    </div>
  );
}

export default App;
