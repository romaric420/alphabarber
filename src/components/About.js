import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/About.css';

const About = () => {
  const { t } = useLanguage();
  useEffect(() => {
    const elements = typeof document !== 'undefined'
      ? document.querySelectorAll('.animate-fade-up')
      : [];

    if (typeof IntersectionObserver !== 'undefined') {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });

      elements.forEach((el) => observer.observe(el));
      return () => observer.disconnect();
    }

    // Fallback for environments without IntersectionObserver
    elements.forEach((el) => el.classList.add('visible'));
  }, []);

  const features = [
    { icon: '✂️', key: 'feature1' },
    { icon: '💎', key: 'feature2' },
    { icon: '🏠', key: 'feature3' },
    { icon: '⭐', key: 'feature4' },
  ];

  return (
    <section className="about" id="about">
      {/* --- NOUVEAU FOND RICHE --- */}
      <div className="about-bg-wrapper">
        {/* Image de fond floutée pour la texture */}
        <div className="about-bg-image"></div>
        <div className="about-overlay-gradient"></div>
      </div>

      <div className="container">
        <div className="about-grid">

          {/* Côté Visuel (Gauche) */}
          <div className="about-visual animate-fade-up">
            <div className="image-frame">
              {/* IMAGE PRINCIPALE : Image locale */}
              <img
                src="/images/7.jpg"
                alt="Salon Alpha Barber"
                className="about-main-img"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.onerror = null;
                  img.src = "/images/1.jpg";
                }}
              />
              <div className="frame-border"></div>
            </div>

            {/* Badge Flottant */}
            <div className="floating-badge">
              <div className="badge-content">
                <span className="badge-icon">⭐</span>
                <span className="badge-text">
                  <strong>TOP RATED</strong><br />
                  Treatwell 2025
                </span>
              </div>
            </div>
          </div>

          {/* Côté Contenu (Droite) */}
          <div className="about-content">
            <div className="animate-fade-up delay-1">
              <span className="about-subtitle">{t('about.subtitle')}</span>
              <h2 className="about-title">
                Alpha Barber <span className="text-gold">Experience</span>
              </h2>
              <p className="about-description">{t('about.description')}</p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => (
                <div key={index} className={`feature-card animate-fade-up delay-${index + 2}`}>
                  <div className="feature-icon-box">{feature.icon}</div>
                  <div className="feature-text">
                    <h4 className="feature-title">{t(`about.${feature.key}Title`)}</h4>
                    <p className="feature-desc">{t(`about.${feature.key}Desc`)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;