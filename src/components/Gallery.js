import React, { useRef, useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/Gallery.css';

const Gallery = () => {
  const { t, language } = useLanguage();
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Images locales (1-16 sauf 4 et 7)
  const galleryItems = [
    {
      id: 1,
      title: 'Coupe en Action',
      titleEn: 'Cut in Progress',
      category: 'Haircut',
      img: '/images/1.jpg'
    },
    {
      id: 2,
      title: 'Taille de Barbe',
      titleEn: 'Beard Trim',
      category: 'Beard',
      img: '/images/2.jpg'
    },
    {
      id: 3,
      title: 'Précision Expert',
      titleEn: 'Expert Precision',
      category: 'Haircut',
      img: '/images/3.jpg'
    },
    {
      id: 5,
      title: 'Savoir-Faire',
      titleEn: 'Craftsmanship',
      category: 'Expertise',
      img: '/images/5.jpg'
    },
    {
      id: 6,
      title: 'Dégradé Parfait',
      titleEn: 'Perfect Fade',
      category: 'Fade',
      img: '/images/6.jpg'
    },
    {
      id: 8,
      title: 'Nos Produits',
      titleEn: 'Our Products',
      category: 'Products',
      img: '/images/8.jpg'
    },
    {
      id: 9,
      title: 'Poste de Travail',
      titleEn: 'Workstation',
      category: 'Salon',
      img: '/images/9.jpg'
    },
    {
      id: 10,
      title: 'Notre Équipement',
      titleEn: 'Our Equipment',
      category: 'Salon',
      img: '/images/10.jpg'
    },
    {
      id: 11,
      title: 'L\'Enseigne',
      titleEn: 'The Sign',
      category: 'Brand',
      img: '/images/11.jpg'
    },
    {
      id: 12,
      title: 'Outils du Métier',
      titleEn: 'Tools of the Trade',
      category: 'Tools',
      img: '/images/12.jpg'
    },
    {
      id: 13,
      title: 'Ciseaux Pro',
      titleEn: 'Pro Scissors',
      category: 'Tools',
      img: '/images/13.jpg'
    },
    {
      id: 14,
      title: 'Notre Salon',
      titleEn: 'Our Salon',
      category: 'Ambiance',
      img: '/images/14.jpg'
    },
    {
      id: 15,
      title: 'Kit Professionnel',
      titleEn: 'Professional Kit',
      category: 'Tools',
      img: '/images/15.jpg'
    },
    {
      id: 16,
      title: 'L\'Atelier',
      titleEn: 'The Workshop',
      category: 'Salon',
      img: '/images/16.jpg'
    }
  ];

  // Fonction de scroll manuel
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const cardWidth = current.children[0].clientWidth + 30;
      current.scrollBy({
        left: direction === 'left' ? -cardWidth : cardWidth,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const { current } = scrollRef;
    if (current) {
      const { scrollLeft, scrollWidth, clientWidth } = current;
      const maxScroll = scrollWidth - clientWidth;

      const progress = (scrollLeft / maxScroll) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < maxScroll - 10);
    }
  };

  // Auto scroll
  useEffect(() => {
    let interval;
    if (!isPaused) {
      interval = setInterval(() => {
        const { current } = scrollRef;
        if (current) {
          const { scrollLeft, scrollWidth, clientWidth } = current;
          if (scrollLeft + clientWidth >= scrollWidth - 50) {
            current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            const cardWidth = current.children[0].clientWidth + 30;
            current.scrollBy({ left: cardWidth, behavior: 'smooth' });
          }
        }
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isPaused]);

  useEffect(() => {
    const { current } = scrollRef;
    if (current) {
      current.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleScroll);
      handleScroll();
    }
    return () => {
      if (current) current.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-bg-pattern"></div>

      <div className="container">
        <div className="gallery-header">
          <div className="header-content">
            <span className="gallery-subtitle">{t('gallery.subtitle')}</span>
            <h2 className="gallery-title">{t('gallery.title')} <span className="text-gold">.</span></h2>
            <p className="gallery-description">{t('gallery.description')}</p>
          </div>

          <div className="gallery-nav desktop-nav">
            <button
              className={`nav-btn prev ${!canScrollLeft ? 'disabled' : ''}`}
              onClick={() => scroll('left')}
            >←</button>
            <button
              className={`nav-btn next ${!canScrollRight ? 'disabled' : ''}`}
              onClick={() => scroll('right')}
            >→</button>
          </div>
        </div>
      </div>

      <div
        className="gallery-track-wrapper"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="gallery-track" ref={scrollRef}>
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-card">
              <div className="card-inner">
                <img
                  src={item.img}
                  alt={item.title}
                  className="gallery-img"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/images/1.jpg";
                  }}
                />
                <div className="card-overlay">
                  <span className="card-category">{item.category}</span>
                  <h3 className="card-title-lg">
                    {language === 'fr' ? item.title : item.titleEn}
                  </h3>
                </div>
              </div>
            </div>
          ))}
          <div className="track-spacer"></div>
        </div>
      </div>

      <div className="container bottom-controls">
        <div className="progress-container">
          <div className="progress-bar" style={{ width: `${scrollProgress}%` }}></div>
        </div>
        <div className="gallery-nav mobile-nav">
          <button onClick={() => scroll('left')} disabled={!canScrollLeft}>←</button>
          <button onClick={() => scroll('right')} disabled={!canScrollRight}>→</button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;