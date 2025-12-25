import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './pages/Home';
import Models from './pages/Models';
import School from './pages/School';
import Contacts from './pages/Contacts';
import About from './pages/About';
import AnimatedBackground from './components/Common/AnimatedBackground';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <AnimatedBackground />
        <div className="content-wrapper">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/models" element={<Models />} />
              <Route path="/school" element={<School />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;