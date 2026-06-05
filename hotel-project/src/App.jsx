import "./App.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Rooms from "./Components/Rooms";
import Menu from "./Components/Menu";
import Comment from "./Components/Comment";
import Event from "./Components/Event";
import Reservation from "./Components/Reservation";
import Contact from "./Components/Contact";
import Chatbot from "./Components/ChatBot";
import Footer from "./Components/Footer";

import RoomDetail from "./Components/RoomDetail";
import MenuDetail from "./Components/MenuDetail";

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Rooms />
      <Menu />
      <Event />
      <Comment />
      <Reservation />
      <Chatbot />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/room/:id" element={<RoomDetail />} />
      <Route path="/menu/:id" element={<MenuDetail />} />
    </Routes>
  );
}