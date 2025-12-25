import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { modelsData } from '../../assets/data/modelsData';
import './ModelsPreview.css';

const ModelsPreview = () => {
  const featuredModels = modelsData.slice(0, 3);

  return (
    <section className="models-preview section">
      <div className="container">
        <div className="section-title">
          <h2>Наши модели</h2>
          <p>Топовые модели для ваших проектов</p>
        </div>
        
        <div className="models-preview-grid">
          {featuredModels.map(model => (
            <Card key={model.id} variant="elevated" hover className="model-preview-card">
              <div className="model-preview-image">
                <div className="placeholder-image">👤</div>
              </div>
              <div className="model-preview-info">
                <h3>{model.name}</h3>
                <div className="model-preview-stats">
                  <span>{model.height}</span>
                  <span>{model.measurements}</span>
                  <span>{model.age} лет</span>
                </div>
                <p className="model-preview-category">
                  {model.gender === 'women' ? 'Женщина' : 'Мужчина'}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="models-preview-cta">
          <Button 
            as={Link} 
            to="/models" 
            variant="secondary" 
            size="large"
          >
            Смотреть всех моделей
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ModelsPreview;