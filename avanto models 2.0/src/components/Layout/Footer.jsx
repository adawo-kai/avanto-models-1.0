import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Агентство: [
      { label: 'О нас', to: '/about' },
      { label: 'Команда', to: '/about#team' },
      { label: 'Вакансии', to: '/contacts#careers' },
      { label: 'Партнеры', to: '/about#partners' }
    ],
    Услуги: [
      { label: 'Модели', to: '/models' },
      { label: 'Школа моделей', to: '/school' },
      { label: 'Кастинги', to: '/models#castings' },
      { label: 'Консультации', to: '/school#consultations' }
    ],
    Контакты: [
      { label: 'Контакты', to: '/contacts' },
      { label: 'Сотрудничество', to: '/contacts#cooperation' },
      { label: 'Для моделей', to: '/models#for-models' },
      { label: 'Для клиентов', to: '/contacts#for-clients' }
    ]
  };

  const socialLinks = [
    { platform: 'Instagram', icon: '📷', url: 'https://instagram.com' },
    { platform: 'Facebook', icon: '📘', url: 'https://facebook.com' },
    { platform: 'Telegram', icon: '✈️', url: 'https://t.me' },
    { platform: 'YouTube', icon: '🎬', url: 'https://youtube.com' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="footer-logo-text">MODEL</span>
              <span className="footer-logo-subtext">AGENCY</span>
            </div>
            <p className="footer-description">
              Профессиональное модельное агентство. 
              Подготовка моделей и организация съемок.
            </p>
            <div className="footer-social">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  className="social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.platform}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="footer-links">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category} className="footer-column">
                <h3 className="footer-column-title">{category}</h3>
                <ul className="footer-column-list">
                  {links.map((link) => (
                    <li key={link.label} className="footer-column-item">
                      <Link to={link.to} className="footer-link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-copyright">
            © {currentYear} MODEL AGENCY. Все права защищены.
          </div>
          <div className="footer-legal">
            <Link to="/privacy" className="footer-legal-link">
              Политика конфиденциальности
            </Link>
            <span className="footer-separator">•</span>
            <Link to="/terms" className="footer-legal-link">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;