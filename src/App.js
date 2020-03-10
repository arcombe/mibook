import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Showcase from './components/layout/Showcase';
import Newsletter from './components/Newsletter/Newsletter';
import Boxes from './components/Boxes/Boxes';
import About from './components/About/About';
import Authers from './components/Authers/Authers';
import Contact from './components/Contact/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showcase />
      <Newsletter />
      <Boxes />
      <About />
      <Authers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
