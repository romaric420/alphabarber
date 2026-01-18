import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { contactInfo } from '../data/translations';
import '../styles/Footer.css';

const Footer = () => {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [showModal, setShowModal] = useState(null); // 'mentions' ou 'privacy'

  // Gestion du bouton "Remonter"
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll quand la modale est ouverte
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showModal]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navItems = ['home', 'services', 'prices', 'gallery', 'about', 'contact'];

  const handleNavClick = (item) => {
    const element = document.getElementById(item);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeModal = () => setShowModal(null);

  // Titres des modales
  const modalTitles = {
    mentions: {
      fr: 'Mentions Légales',
      en: 'Legal Notice'
    },
    privacy: {
      fr: 'Politique de Confidentialité',
      en: 'Privacy Policy'
    }
  };

  return (
    <footer className="footer">
      {/* Background Decor */}
      <div className="footer-bg-pattern"></div>
      <div className="footer-big-text">ALPHA BARBER BEAUTY</div>
      <div className="footer-glow"></div>

      <div className="container footer-container">
        <div className="footer-top">

          {/* Brand Column */}
          <div className="footer-brand">
            <div className="footer-logo">
              <span className="logo-symbol">α</span>
              <div className="logo-titles">
                <span className="logo-main">ALPHA BARBER</span>
                <span className="logo-sub">{t('hero.subtitle') || 'Beauty & Care'}</span>
              </div>
            </div>
            <p className="footer-desc">
              {t('hero.description') || "L'excellence au masculin. Un savoir-faire unique pour révéler votre style dans un cadre d'exception."}
            </p>
          </div>

          {/* Navigation Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">{t('nav.services')}</h4>
            <ul className="footer-links">
              {navItems.slice(0, 3).map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={(e) => { e.preventDefault(); handleNavClick(item); }}>
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Studio Column */}
          <div className="footer-links-col">
            <h4 className="footer-heading">Studio</h4>
            <ul className="footer-links">
              {navItems.slice(3).map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={(e) => { e.preventDefault(); handleNavClick(item); }}>
                    {t(`nav.${item}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA / Hours Column */}
          <div className="footer-cta-col">
            <h4 className="footer-heading">{t('contact.appointment')}</h4>
            <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="footer-book-btn">
              {t('nav.book')}
            </a>
            <div className="footer-hours">
              <span>{t('contact.hours') || 'Lun - Dim'}</span>
              <span className="gold-text">{t('contact.hoursValue') || '10:00 - 20:00'}</span>
            </div>
          </div>
        </div>

        <div className="footer-separator"></div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Alpha Barber Beauty. {t('footer.rights')}.
          </p>

          <div className="footer-legal">
            <button onClick={() => setShowModal('mentions')} className="legal-link">
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
            </button>
            <span className="dot">•</span>
            <button onClick={() => setShowModal('privacy')} className="legal-link">
              {language === 'fr' ? 'Confidentialité' : 'Privacy Policy'}
            </button>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        className={`back-to-top ${showTopBtn ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Remonter"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </button>

      {/* Modal Mentions Légales / Privacy */}
      {showModal && (
        <div className="legal-modal-overlay" onClick={closeModal}>
          <div className="legal-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <h2 className="modal-title">
              {modalTitles[showModal][language]}
            </h2>
            <div className="modal-content">
              <div className="coming-soon">
                <span className="coming-soon-icon">🚧</span>
                <p className="coming-soon-text">
                  {language === 'fr' ? 'À venir' : 'Coming soon'}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;