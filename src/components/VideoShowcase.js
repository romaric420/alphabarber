import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useLanguage } from '../context/LanguageContext';
import '../styles/VideoShowcase.css';

const VideoShowcase = () => {
  const { t } = useLanguage();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef(null);

  const handleVideoLoaded = useCallback(() => {
    setIsVideoLoaded(true);
  }, []);

  const handleVideoError = useCallback(() => {
    setHasError(true);
    setIsVideoLoaded(true); // Cache le loader
    console.error('Erreur de chargement vidéo');
  }, []);

  const handlePlayPause = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowPlayButton(true);
      } else {
        videoRef.current.play();
        setShowPlayButton(false);
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const handleVideoEnded = useCallback(() => {
    setIsPlaying(false);
    setShowPlayButton(true);
  }, []);

  const handleVideoClick = useCallback(() => {
    handlePlayPause();
  }, [handlePlayPause]);

  return (
    <section className="video-showcase" id="video">
      {/* Background Effects */}
      <div className="video-bg">
        <div className="video-bg-gradient"></div>
        <div className="video-bg-pattern"></div>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="video-header">
          <span className="video-subtitle">{t('video.subtitle')}</span>
          <h2 className="video-title">
            {t('video.title')} <span className="text-gold">{t('video.titleHighlight')}</span>
          </h2>
          <p className="video-description">{t('video.description')}</p>
          <div className="golden-line golden-line-center"></div>
        </div>

        {/* Video Container */}
        <div className="video-container">
          <div className="video-frame">
            <div className="video-wrapper">
              {/* Placeholder / Loading State */}
              {!isVideoLoaded && (
                <div className="video-placeholder">
                  <div className="video-loader">
                    <div className="loader-ring"></div>
                    <span className="loader-text">{t('video.loading')}</span>
                  </div>
                </div>
              )}

              {/* Error State */}
              {hasError && (
                <div className="video-error">
                  <span>❌ Erreur de chargement</span>
                </div>
              )}

              {/* Video Element */}
              <video
                ref={videoRef}
                className={`showcase-video ${isVideoLoaded ? 'loaded' : ''}`}
                playsInline
                preload="metadata"
                onLoadedData={handleVideoLoaded}
                onError={handleVideoError}
                onEnded={handleVideoEnded}
                onClick={handleVideoClick}
                aria-label={t('video.ariaLabel')}
              >
                <source src="/video/showcase.mp4" type="video/mp4" />
                Votre navigateur ne supporte pas la lecture vidéo.
              </video>

              {/* Play/Pause Overlay */}
              {isVideoLoaded && !hasError && showPlayButton && (
                <button
                  className="video-play-btn"
                  onClick={handlePlayPause}
                  aria-label={isPlaying ? t('video.pause') : t('video.play')}
                >
                  <div className="play-btn-circle">
                    <div className="play-btn-icon">
                      {isPlaying ? (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <rect x="6" y="4" width="4" height="16" />
                          <rect x="14" y="4" width="4" height="16" />
                        </svg>
                      ) : (
                        <svg viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="5,3 19,12 5,21" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="play-btn-text">
                    {isPlaying ? t('video.pause') : t('video.play')}
                  </span>
                </button>
              )}

              {/* Decorative Elements */}
              <div className="video-corner video-corner-tl"></div>
              <div className="video-corner video-corner-tr"></div>
              <div className="video-corner video-corner-bl"></div>
              <div className="video-corner video-corner-br"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;