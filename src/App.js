import Header from './components/Header';
import Section from './components/Section';
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
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;