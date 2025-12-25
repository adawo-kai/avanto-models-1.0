import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const animationFrameRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Класс частицы
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.originalSize = this.size;
        this.opacity = Math.random() * 0.1 + 0.05;
        this.waveOffset = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Плавное изменение размера
        this.size = this.originalSize + Math.sin(Date.now() * 0.001 + this.waveOffset) * 0.3;

        // Зацикливание границ
        if (this.x > width) this.x = 0;
        if (this.x < 0) this.x = width;
        if (this.y > height) this.y = 0;
        if (this.y < 0) this.y = height;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        // Градиент для частиц
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `rgba(212, 175, 55, ${this.opacity})`);
        gradient.addColorStop(1, `rgba(212, 175, 55, 0)`);
        
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    // Инициализация
    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particlesRef.current = [];
      const particleCount = Math.min(Math.floor(width * height / 15000), 50);

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push(new Particle());
      }
    };

    // Анимация
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Рисуем градиентный фон
      const bgGradient = ctx.createLinearGradient(0, 0, width, height);
      bgGradient.addColorStop(0, '#0a0a0a');
      bgGradient.addColorStop(0.5, '#1a1a2e');
      bgGradient.addColorStop(1, '#16213e');
      
      ctx.fillStyle = bgGradient;
      ctx.fillRect(0, 0, width, height);

      // Обновляем и рисуем частицы
      particlesRef.current.forEach(particle => {
        particle.update();
        particle.draw();
      });

      // Рисуем соединения между частицами
      ctx.strokeStyle = 'rgba(212, 175, 55, 0.05)';
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 0.1 * (1 - distance / 120);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Обработчики событий
    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      particlesRef.current.forEach(particle => {
        const dx = mouseX - particle.x;
        const dy = mouseY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 100) {
          const force = (100 - distance) / 100;
          particle.x -= dx * force * 0.02;
          particle.y -= dy * force * 0.02;
        }
      });
    };

    // Инициализация и запуск
    init();
    animate();

    // Добавляем обработчики
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Очистка
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="animated-background" />;
};

export default AnimatedBackground;