import { useTranslation } from 'react-i18next';
import { useRef } from 'react';

const Hero = () => {
    const { t } = useTranslation();
    const badgeRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!badgeRef.current) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        const rotateX = -y * 24;
        const rotateY = x * 24;
        
        badgeRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        const lightX = ((e.clientX - rect.left) / rect.width) * 100;
        const lightY = ((e.clientY - rect.top) / rect.height) * 100;
        badgeRef.current.style.setProperty('--light-x', `${lightX}%`);
        badgeRef.current.style.setProperty('--light-y', `${lightY}%`);
    };

    const handleMouseLeave = () => {
        if (!badgeRef.current) return;
        badgeRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
        badgeRef.current.style.setProperty('--light-x', '50%');
        badgeRef.current.style.setProperty('--light-y', '50%');
    };

    const handleDownloadCV = () => {
        window.open('/cv-rairson-fernandes.pdf', '_blank');
    };

    return (
        <section id="home" className="container-section hero-section" aria-label="Apresentação">
            <div className="hero-left">
                <div className="hero-tag">{t('hero.tag')}</div>
                <h1 className="hero-title">
                    {t('hero.title')} <span>Afonso</span>
                </h1>
                <p className="hero-description">
                    {t('hero.description')}
                </p>
                <div className="hero-buttons">
                    <button 
                        className="btn-primary"
                        onClick={() => document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        <i className="fas fa-code"></i> {t('hero.btn_projects')}
                    </button>
                    <button className="btn-outline" onClick={handleDownloadCV}>
                        <i className="fas fa-download"></i> {t('hero.btn_cv')}
                    </button>
                </div>
            </div>
            
            <div className="hero-right">
                <div 
                    className="badge-container"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className="badge" ref={badgeRef}>
                        <div className="clip"></div>
                        <div className="avatar">
                            <img 
                                src="/images/perfil/avartar.png" 
                                alt="Rairson Fernandes - Desenvolvedor Full Stack"
                                loading="eager"
                            />
                        </div>
                        <div className="overlay-gradient"></div>
                        <div className="info">
                            <h1 className="name">Rairson F.</h1>
                            <div className="subtitle">{t('hero.subtitle')}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;