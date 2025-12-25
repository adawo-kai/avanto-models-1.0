import React, { useState } from 'react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import './Contacts.css';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    category: 'general'
  });

  const contactCategories = [
    { id: 'general', label: 'Общие вопросы' },
    { id: 'models', label: 'Для моделей' },
    { id: 'clients', label: 'Для клиентов' },
    { id: 'school', label: 'Школа моделей' },
    { id: 'cooperation', label: 'Сотрудничество' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет отправка формы
    alert('Форма отправлена! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      category: 'general'
    });
  };

  const contactInfo = {
    address: 'ул. Модная, 123, Москва, Россия',
    phone: '+7 (999) 123-45-67',
    email: 'info@modelagency.com',
    workingHours: 'Пн-Пт: 10:00 - 19:00\nСб: 11:00 - 17:00\nВс: выходной'
  };

  return (
    <div className="contacts-page">
      <div className="container">
        <div className="contacts-header">
          <h1 className="page-title">Контакты</h1>
          <p className="page-subtitle">
            Свяжитесь с нами для сотрудничества или получения информации
          </p>
        </div>

        <div className="contacts-grid">
          <div className="contact-form-section">
            <Card variant="elevated" className="contact-form-card">
              <h2>Написать нам</h2>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Введите ваше имя"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Телефон</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+7 (999) 999-99-99"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Категория вопроса</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                  >
                    {contactCategories.map(cat => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Сообщение *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Опишите ваш вопрос..."
                  />
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  fullWidth
                  className="submit-btn"
                >
                  Отправить сообщение
                </Button>
              </form>
            </Card>
          </div>

          <div className="contact-info-section">
            <Card variant="default" className="contact-info-card">
              <h2>Контактная информация</h2>
              
              <div className="contact-info-item">
                <div className="contact-icon">📍</div>
                <div className="contact-details">
                  <h3>Адрес</h3>
                  <p>{contactInfo.address}</p>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">📞</div>
                <div className="contact-details">
                  <h3>Телефон</h3>
                  <a href={`tel:${contactInfo.phone}`} className="contact-link">
                    {contactInfo.phone}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">✉️</div>
                <div className="contact-details">
                  <h3>Email</h3>
                  <a href={`mailto:${contactInfo.email}`} className="contact-link">
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-icon">⏰</div>
                <div className="contact-details">
                  <h3>Часы работы</h3>
                  <pre className="working-hours">{contactInfo.workingHours}</pre>
                </div>
              </div>

              <div className="map-placeholder">
                <div className="placeholder-map">🗺️</div>
                <p className="map-note">
                  Карта будет здесь. Мы находимся в центре Москвы.
                </p>
              </div>
            </Card>

            <Card variant="outlined" className="departments-card">
              <h3>Отделы</h3>
              <div className="departments-list">
                <div className="department-item">
                  <h4>Для моделей</h4>
                  <p>models@modelagency.com</p>
                </div>
                <div className="department-item">
                  <h4>Для клиентов</h4>
                  <p>clients@modelagency.com</p>
                </div>
                <div className="department-item">
                  <h4>Школа моделей</h4>
                  <p>school@modelagency.com</p>
                </div>
                <div className="department-item">
                  <h4>Мероприятия</h4>
                  <p>events@modelagency.com</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="contacts-faq">
          <h2>Часто задаваемые вопросы</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Как стать моделью в вашем агентстве?</h3>
              <p>
                Отправьте заявку через форму на сайте с вашими фотографиями 
                и параметрами. Наш менеджер свяжется с вами для дальнейших 
                инструкций.
              </p>
            </div>
            <div className="faq-item">
              <h3>Как забронировать модель для съемки?</h3>
              <p>
                Свяжитесь с нами по телефону или через форму для клиентов. 
                Укажите даты, тип съемки и бюджет. Мы подберем подходящих моделей.
              </p>
            </div>
            <div className="faq-item">
              <h3>Есть ли у вас онлайн курсы?</h3>
              <p>
                Да, мы проводим онлайн-курсы по моделингу. Подробности 
                можно узнать в разделе "Школа" или связавшись с нами.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;