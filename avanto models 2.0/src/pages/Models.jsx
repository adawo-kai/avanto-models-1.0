import React, { useState } from 'react';
import ModelCard from '../components/UI/ModelCard';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';
import { modelsData } from '../assets/data/modelsData';
import './Models.css';

const Models = () => {
  const [genderFilter, setGenderFilter] = useState('all');
  const [selectedModel, setSelectedModel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'Все модели' },
    { id: 'women', label: 'Женщины' },
    { id: 'men', label: 'Мужчины' },
  ];

  const filteredModels = genderFilter === 'all' 
    ? modelsData 
    : modelsData.filter(model => model.gender === genderFilter);

  const handleModelClick = (model) => {
    setSelectedModel(model);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedModel(null);
  };

  return (
    <div className="models-page">
      <div className="container">
        <div className="models-header">
          <h1 className="page-title">Наши модели</h1>
          <p className="page-subtitle">
            Профессиональные модели для ваших проектов
          </p>
        </div>

        <div className="models-filters">
          {filters.map(filter => (
            <Button
              key={filter.id}
              variant={genderFilter === filter.id ? 'primary' : 'outline'}
              size="small"
              onClick={() => setGenderFilter(filter.id)}
              className="filter-btn"
            >
              {filter.label}
            </Button>
          ))}
        </div>

        <div className="models-stats">
          <div className="stat-item">
            <span className="stat-number">{modelsData.length}</span>
            <span className="stat-label">Всего моделей</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {modelsData.filter(m => m.gender === 'women').length}
            </span>
            <span className="stat-label">Женщины</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">
              {modelsData.filter(m => m.gender === 'men').length}
            </span>
            <span className="stat-label">Мужчины</span>
          </div>
        </div>

        <div className="models-grid">
          {filteredModels.map(model => (
            <div 
              key={model.id} 
              className="model-grid-item"
              onClick={() => handleModelClick(model)}
            >
              <ModelCard model={model} />
            </div>
          ))}
        </div>

        <div className="models-cta">
          <h2>Стать моделью</h2>
          <p>Хотите присоединиться к нашей команде?</p>
          <Button variant="primary" size="large">
            Отправить заявку
          </Button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        title={selectedModel?.name}
        size="large"
      >
        {selectedModel && (
          <div className="model-modal">
            <div className="model-modal-image">
              <img src={selectedModel.image} alt={selectedModel.name} />
            </div>
            <div className="model-modal-info">
              <div className="model-modal-stats">
                <div className="model-stat">
                  <span className="stat-label">Рост</span>
                  <span className="stat-value">{selectedModel.height}</span>
                </div>
                <div className="model-stat">
                  <span className="stat-label">Параметры</span>
                  <span className="stat-value">{selectedModel.measurements}</span>
                </div>
                <div className="model-stat">
                  <span className="stat-label">Размер одежды</span>
                  <span className="stat-value">{selectedModel.clothingSize}</span>
                </div>
                <div className="model-stat">
                  <span className="stat-label">Размер обуви</span>
                  <span className="stat-value">{selectedModel.shoeSize}</span>
                </div>
              </div>
              
              <div className="model-modal-bio">
                <h3>О модели</h3>
                <p>{selectedModel.bio}</p>
              </div>

              <div className="model-modal-experience">
                <h3>Опыт</h3>
                <ul>
                  {selectedModel.experience.map((exp, index) => (
                    <li key={index}>{exp}</li>
                  ))}
                </ul>
              </div>

              <div className="model-modal-actions">
                <Button variant="primary">
                  Забронировать
                </Button>
                <Button variant="outline">
                  Скачать портфолио
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Models;