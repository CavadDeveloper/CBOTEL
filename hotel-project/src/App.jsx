import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Rooms from "./Components/Rooms";
import Menu from "./Components/Menu";
import Comment from "./Components/Comment";
import Event from "./Components/Event"
import Reservation from "./Components/Reservation";
import Contact from "./Components/Contact";
import Chatbot from "./Components/Chatbot";
import Footer from "./Components/Footer";
export default function App(){
  return(
    <div>  
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Menu />
      <Event />
      <Comment />
      <Reservation />
      <Contact />
      <Chatbot />
      <Footer />
      </div>
  )
}