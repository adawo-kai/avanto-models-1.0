import React from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import './School.css';

const School = () => {
  const courses = [
    {
      id: 1,
      title: 'Базовый курс',
      duration: '3 месяца',
      price: '30,000 ₽',
      description: 'Основы моделинга, дефиле, актерское мастерство',
      features: [
        'Техника дефиле',
        'Основы позирования',
        'Работа с камерой',
        'Основы макияжа',
        'Питание и уход'
      ]
    },
    {
      id: 2,
      title: 'Продвинутый курс',
      duration: '6 месяцев',
      price: '50,000 ₽',
      description: 'Профессиональная подготовка для работы в индустрии',
      features: [
        'Профессиональное дефиле',
        'Позирование для съемок',
        'Работа в команде',
        'Портфолио от профессионалов',
        'Участие в показах'
      ]
    },
    {
      id: 3,
      title: 'Интенсив',
      duration: '1 месяц',
      price: '20,000 ₽',
      description: 'Быстрый старт в моделинге для начинающих',
      features: [
        'Быстрый старт',
        'Основные навыки',
        'Мини-портфолио',
        'Консультации',
        'Сертификат'
      ]
    }
  ];

  const teachers = [
    {
      id: 1,
      name: 'Анна Иванова',
      role: 'Преподаватель дефиле',
      experience: '10 лет опыта',
      image: '/assets/images/teachers/anna.jpg'
    },
    {
      id: 2,
      name: 'Максим Петров',
      role: 'Фотограф',
      experience: '8 лет в индустрии',
      image: '/assets/images/teachers/maxim.jpg'
    },
    {
      id: 3,
      name: 'Елена Смирнова',
      role: 'Стилист',
      experience: '12 лет опыта',
      image: '/assets/images/teachers/elena.jpg'
    }
  ];

  return (
    <div className="school-page">
      <div className="container">
        <div className="school-header">
          <h1 className="page-title">Школа моделей</h1>
          <p className="page-subtitle">
            Профессиональное обучение моделингу от лучших специалистов индустрии
          </p>
        </div>

        <div className="school-intro">
          <div className="intro-content">
            <h2>Начните карьеру модели с нами</h2>
            <p>
              Наша школа моделей предлагает комплексную программу обучения, 
              разработанную профессионалами индустрии. Мы поможем вам раскрыть 
              потенциал и построить успешную карьеру в модельном бизнесе.
            </p>
          </div>
          <div className="intro-image">
            {/* Здесь будет изображение */}
            <div className="placeholder-image">🏫</div>
          </div>
        </div>

        <section className="school-courses">
          <h2 className="section-title">Наши курсы</h2>
          <div className="courses-grid">
            {courses.map(course => (
              <Card key={course.id} variant="elevated" hover className="course-card">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <span className="course-duration">{course.duration}</span>
                </div>
                <div className="course-price">
                  <span className="price-amount">{course.price}</span>
                </div>
                <p className="course-description">{course.description}</p>
                <ul className="course-features">
                  {course.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <div className="course-actions">
                  <Button variant="primary" fullWidth>
                    Записаться
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="school-teachers">
          <h2 className="section-title">Наши преподаватели</h2>
          <div className="teachers-grid">
            {teachers.map(teacher => (
              <Card key={teacher.id} variant="default" className="teacher-card">
                <div className="teacher-image">
                  <div className="placeholder-image">👨‍🏫</div>
                </div>
                <div className="teacher-info">
                  <h3>{teacher.name}</h3>
                  <p className="teacher-role">{teacher.role}</p>
                  <p className="teacher-experience">{teacher.experience}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="school-benefits">
          <h2 className="section-title">Преимущества обучения</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">🎓</div>
              <h3>Профессиональный подход</h3>
              <p>Обучение у практикующих специалистов индустрии</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">📸</div>
              <h3>Портфолио</h3>
              <p>Профессиональная фотосессия для вашего портфолио</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🤝</div>
              <h3>Трудоустройство</h3>
              <p>Помощь в трудоустройстве после окончания курса</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">🏆</div>
              <h3>Участие в показах</h3>
              <p>Возможность участия в реальных модных показах</p>
            </div>
          </div>
        </section>

        <section className="school-cta">
          <div className="cta-content">
            <h2>Готовы начать?</h2>
            <p>Оставьте заявку на бесплатную консультацию</p>
            <Button variant="secondary" size="large">
              Записаться на консультацию
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default School;