import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { prices } from '../data/translations';
import '../styles/Services.css';

const Services = () => {
  const { t } = useLanguage();

  // Référence pour les éléments à animer
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // On arrête d'observer une fois animé pour la performance
          observerRef.current.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 }); // Déclenche quand 10% de l'élément est visible

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  return (
    <section className="services" id="services">
      {/* Background Decor */}
      <div className="services-bg">
        <div className="bg-gradient-orb orb-1"></div>
        <div className="bg-gradient-orb orb-2"></div>
        <div className="bg-grid-pattern"></div>
      </div>

      <div className="container">

        {/* Header Section */}
        <div className="services-header animate-on-scroll">
          <span className="services-subtitle">{t('services.subtitle')}</span>
          <h2 className="services-title">
            {t('services.title')} <span className="text-gold">.</span>
          </h2>
          <div className="title-separator"></div>
          <p className="services-description">{t('services.description')}</p>
        </div>

        <div className="pricing-grid" id="prices">

          {/* Men's Prices Card */}
          <div className="pricing-card animate-on-scroll delay-100">
            <div className="card-shine"></div>
            <div className="pricing-card-header">
              <div className="icon-wrapper">
                <span className="card-icon">✂️</span>
              </div>
              <h3 className="pricing-card-title">{t('services.men')}</h3>
            </div>

            <ul className="price-list">
              {prices.men.map((item, index) => (
                <li key={index} className="price-item">
                  <div className="price-info">
                    <span className="price-name">{t(`services.items.${item.key}`)}</span>
                    <span className="price-dots"></span>
                  </div>
                  <span className="price-value">{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="surcharge-notice">
              <span className="notice-icon">🌙</span>
              <span>{t('services.eveningSurcharge')}</span>
            </div>
          </div>

          {/* Children's Prices Card */}
          <div className="pricing-card animate-on-scroll delay-200">
            <div className="card-shine"></div>
            <div className="pricing-card-header">
              <div className="icon-wrapper">
                <span className="card-icon">👶</span>
              </div>
              <div>
                <h3 className="pricing-card-title">{t('services.children')}</h3>
                <span className="pricing-badge">{t('services.childrenNote')}</span>
              </div>
            </div>

            <ul className="price-list">
              {prices.children.map((item, index) => (
                <li key={index} className="price-item">
                  <div className="price-info">
                    <span className="price-name">{t(`services.items.${item.key}`)}</span>
                    <span className="price-dots"></span>
                  </div>
                  <span className="price-value">{item.price}</span>
                </li>
              ))}
            </ul>

            <div className="surcharge-notice">
              <span className="notice-icon">🌙</span>
              <span>{t('services.eveningSurcharge')}</span>
            </div>
          </div>

          {/* Special Offer - Full Width */}
          <div className="special-offer animate-on-scroll delay-300">
            <div className="offer-glow"></div>
            <div className="offer-content-wrapper">
              <div className="offer-badge">
                <span>VIP</span>
              </div>

              <div className="offer-text">
                <h3 className="special-offer-title">{t('specialOffer.title')}</h3>
                <p className="special-offer-description">{t('specialOffer.description')}</p>
              </div>

              <div className="offer-price-container">
                <span className="offer-currency">€</span>
                <span className="offer-amount">10</span>
                <span className="offer-period">/ {t('nav.book')}</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;