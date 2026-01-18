import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Hero.css';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Image locale du barbershop
  const heroImage = '/images/4.jpg';

  return (
    <section className="hero" id="home">
      {/* Animated Background */}
      <div className="hero-bg">
        <div className="hero-bg-gradient"></div>
        <div className="hero-bg-pattern"></div>
      </div>

      {/* Floating Elements */}
      <div className="hero-floating-elements">
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
        <div className="floating-shape"></div>
      </div>

      {/* Hero Content */}
      <div className="hero-content container">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="hero-badge-icon">⭐</span>
            <span className="hero-badge-text">{t('hero.badge')}</span>
          </div>

          <p className="hero-subtitle">{t('hero.subtitle')}</p>

          <h1 className="hero-title">
            {t('hero.title')}
            <span className="hero-title-highlight">{t('hero.titleHighlight')}</span>
          </h1>

          <p className="hero-description">{t('hero.description')}</p>

          <div className="hero-cta">
            <a href="tel:0175323577" className="hero-btn hero-btn-primary">
              {t('hero.cta')}
            </a>
            <button
              className="hero-btn hero-btn-secondary"
              onClick={() => scrollToSection('prices')}
            >
              {t('hero.ctaSecondary')}
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-number">10+</div>
              <div className="hero-stat-label">{t('about.feature1Title')}</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">7/7</div>
              <div className="hero-stat-label">Open</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-number">⭐</div>
              <div className="hero-stat-label">Treatwell</div>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <div className="hero-image-frame"></div>
            <div className="hero-image-wrapper">
              <img
                src={heroImage}
                alt="Golden Scissors Barbershop"
                className="hero-image"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.style.display = 'none';
                  e.target.parentElement.classList.add('image-error');
                }}
              />
              <div className="hero-image-overlay">
                <span className="hero-overlay-icon">✂️</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="hero-scroll">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">Scroll</span>
      </div>
    </section>
  );
};

export default Hero;