import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Navbar.css';

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Gestion du scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
      // add body class to indicate we're at the very top
      if (typeof document !== 'undefined') {
        document.body.classList.toggle('nav-at-top', window.scrollY <= 20);
      }
    };
    window.addEventListener('scroll', handleScroll);
    // initialize on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
  }, [mobileMenuOpen]);

  const navItems = ['home', 'services', 'prices', 'gallery', 'about', 'contact'];

  const handleNavClick = (item) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(item);
    if (element) {
      // Offset pour compenser la hauteur de la navbar fixe
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${mobileMenuOpen ? 'menu-active' : ''}`}>
      <div className="navbar-container">

        {/* LOGO */}
        <a href="#home" className="navbar-logo" onClick={() => handleNavClick('home')}>
          <div className="logo-icon">α</div>
          <div className="logo-text">
            <span className="logo-text-main">ALPHA BARBER</span>
            <span className="logo-text-sub">Beauty & Care</span>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="navbar-desktop">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {t(`nav.${item}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            {/* Language Switcher */}
            <div className="language-toggle">
              <button
                className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
                onClick={() => setLanguage('fr')}
              >
                FR
              </button>
              <span className="lang-separator">|</span>
              <button
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
              >
                EN
              </button>
            </div>

            {/* CTA Button */}
            <a href="tel:0175323577" className="nav-cta">
              <span>{t('nav.book')}</span>
            </a>
          </div>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? 'open' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className="menu-line"></span>
          <span className="menu-line"></span>
          <span className="menu-line"></span>
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-bg"></div>
        <div className="mobile-menu-content">
          <ul className="mobile-nav-links">
            {navItems.map((item, index) => (
              <li key={item} style={{ transitionDelay: `${100 + index * 50}ms` }}>
                <a
                  href={`#${item}`}
                  className="mobile-nav-link"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item);
                  }}
                >
                  {t(`nav.${item}`)}
                </a>
              </li>
            ))}
          </ul>

          <div className="mobile-menu-footer">
            <div className="mobile-lang">
              <button className={language === 'fr' ? 'active' : ''} onClick={() => setLanguage('fr')}>FR</button>
              <button className={language === 'en' ? 'active' : ''} onClick={() => setLanguage('en')}>EN</button>
            </div>
            <a href="tel:0175323577" className="mobile-cta">
              {t('nav.book')}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;