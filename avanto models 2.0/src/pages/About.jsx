import React from 'react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import './About.css';

const About = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Александра Петрова',
      position: 'Директор агентства',
      experience: '15 лет в индустрии',
      bio: 'Основатель агентства, бывшая топ-модель',
      image: '/assets/images/team/alexandra.jpg'
    },
    {
      id: 2,
      name: 'Дмитрий Соколов',
      position: 'Креативный директор',
      experience: '12 лет опыта',
      bio: 'Эксперт в организации показов и съемок',
      image: '/assets/images/team/dmitry.jpg'
    },
    {
      id: 3,
      name: 'Екатерина Волкова',
      position: 'Менеджер моделей',
      experience: '8 лет работы',
      bio: 'Занимается развитием карьеры моделей',
      image: '/assets/images/team/ekaterina.jpg'
    },
    {
      id: 4,
      name: 'Марк Иванов',
      position: 'Скаут',
      experience: '6 лет в поиске талантов',
      bio: 'Находит новые лица для индустрии',
      image: '/assets/images/team/mark.jpg'
    }
  ];

  const achievements = [
    { year: '2010', title: 'Основание агентства', description: 'Начало работы в Москве' },
    { year: '2012', title: 'Первые международные контракты', description: 'Работа с европейскими брендами' },
    { year: '2015', title: 'Открытие школы моделей', description: 'Запуск образовательных программ' },
    { year: '2018', title: '100+ успешных моделей', description: 'Выпускники работают по всему миру' },
    { year: '2020', title: 'Онлайн-трансформация', description: 'Цифровизация всех процессов' },
    { year: '2023', title: 'Партнерство с Luxury брендами', description: 'Сотрудничество с мировыми домами моды' }
  ];

  const values = [
    {
      icon: '👁️',
      title: 'Профессионализм',
      description: 'Высокие стандарты качества во всем, что мы делаем'
    },
    {
      icon: '🤝',
      title: 'Надежность',
      description: 'Долгосрочные отношения с моделями и клиентами'
    },
    {
      icon: '💡',
      title: 'Инновации',
      description: 'Постоянное развитие и внедрение новых технологий'
    },
    {
      icon: '❤️',
      title: 'Забота',
      description: 'Индивидуальный подход к каждой модели'
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        <div className="about-header">
          <h1 className="page-title">О нас</h1>
          <p className="page-subtitle">
            Более 10 лет в индустрии моды и красоты
          </p>
        </div>

        <section className="about-intro">
          <div className="intro-content">
            <h2>Наша история</h2>
            <p>
              MODEL AGENCY была основана в 2010 году с целью создания 
              профессиональной платформы для талантливых моделей. 
              За годы работы мы выросли из небольшого бюро в одно из 
              ведущих модельных агентств России.
            </p>
            <p>
              Наша миссия — открывать новые имена и помогать моделям 
              строить успешную карьеру на международном уровне.
            </p>
          </div>
          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Лет опыта</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Моделей</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">1000+</span>
              <span className="stat-label">Проектов</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Страны</span>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2 className="section-title">Наши ценности</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <Card key={index} variant="outlined" className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="about-timeline">
          <h2 className="section-title">Наши достижения</h2>
          <div className="timeline">
            {achievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              >
                <div className="timeline-content">
                  <div className="timeline-year">{achievement.year}</div>
                  <h3>{achievement.title}</h3>
                  <p>{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-team">
          <h2 className="section-title">Наша команда</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <Card key={member.id} variant="default" className="team-card">
                <div className="team-image">
                  <div className="placeholder-image">👤</div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <p className="team-position">{member.position}</p>
                  <p className="team-experience">{member.experience}</p>
                  <p className="team-bio">{member.bio}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="about-partners">
          <h2 className="section-title">Наши партнеры</h2>
          <div className="partners-grid">
            {['Vogue', 'Elle', 'Harper\'s Bazaar', 'L\'Officiel', 'Glamour'].map((partner, index) => (
              <div key={index} className="partner-item">
                <div className="partner-logo">{partner}</div>
              </div>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <div className="cta-content">
            <h2>Присоединяйтесь к нам</h2>
            <p>Хотите стать частью нашей истории?</p>
            <div className="cta-buttons">
              <Button variant="primary" size="large">
                Стать моделью
              </Button>
              <Button variant="outline" size="large">
                Сотрудничество
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;