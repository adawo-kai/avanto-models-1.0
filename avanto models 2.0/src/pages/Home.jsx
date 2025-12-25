import React from 'react';
import HeroSection from '../components/Sections/HeroSection';
import ModelsPreview from '../components/Sections/ModelsPreview';
import SchoolPreview from '../components/Sections/SchoolPreview';
import ContactPreview from '../components/Sections/ContactPreview';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <HeroSection />
      <ModelsPreview />
      <SchoolPreview />
      <ContactPreview />
    </div>
  );
};

export default Home;