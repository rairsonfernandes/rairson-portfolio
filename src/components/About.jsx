import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="sobre" className="container-section" aria-label="Sobre mim">
            <h2 className="section-title">{t('about.title')}</h2>
            <div className="about-grid">
                <div className="about-text">
                    <p>{t('about.p1')}</p>
                    <p>{t('about.p2')}</p>
                    <p>{t('about.p3')}</p>
                    <p>{t('about.p4')}</p>
                    <div className="stats-badge">
                        <i className="fas fa-rocket"></i> {t('about.stats')}
                    </div>
                </div>
                <div className="about-img">
                    <img 
                        src="/images/Projetos/dashboard-full.png" 
                        alt="Espaço de trabalho profissional" 
                        loading="lazy"
                    />
                    <div>
                        <p style={{ 
                            fontSize: 38, 
                            fontWeight: 'bold', 
                            background: 'linear-gradient(45deg, #FFD700, #FFA500)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}>
                            ⭐ {t('about.projects_delivered')}
                        </p>
                        <p style={{ fontWeight: 500, color: 'var(--text-secondary)' }}>
                            {t('about.projects_delivered')}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;