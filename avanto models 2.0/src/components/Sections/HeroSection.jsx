import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            MODEL
            <span className="hero-title-accent">AGENCY</span>
          </h1>
          <p className="hero-subtitle">
            Профессиональное модельное агентство. 
            Раскрываем таланты и строим успешные карьеры в мире моды.
          </p>
          <div className="hero-buttons">
            <Button 
              as={Link} 
              to="/models" 
              variant="primary" 
              size="large"
            >
              Смотреть модели
            </Button>
            <Button 
              as={Link} 
              to="/school" 
              variant="outline" 
              size="large"
            >
              Школа моделей
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;