import React from 'react';
import './Card.css';

const Card = ({ 
  children, 
  variant = 'default',
  hover = false,
  className = '',
  onClick,
  ...props 
}) => {
  const cardClass = `
    card 
    card-${variant} 
    ${hover ? 'card-hover' : ''} 
    ${className}
  `.trim();

  return (
    <div className={cardClass} onClick={onClick} {...props}>
      {children}
    </div>
  );
};

export default Card;