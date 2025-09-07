//import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ReflectionsPage from './components/ReflectionsPage';
import LivingArchivePage from './components/LivingArchivePage';
//import Section from './components/Section';
//import ShareInsight from './components/ShareInsight';
//import ReflectionsArchive from './components/ReflectionsArchive';
import Footer from './components/Footer';
import './styles/App.css';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reflections" element={<ReflectionsPage />} />
        <Route path="/archive" element={<LivingArchivePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;