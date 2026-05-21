import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Rooms from "./Components/Rooms";
import VideoSection from "./Components/VideoSection";
import Reviews from "./Components/Comment";
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
      <VideoSection />
      <Reviews />
      <Reservation />
      <Contact />
      <Chatbot />
      <Footer />
      </div>
  )
}