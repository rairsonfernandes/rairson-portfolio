import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <footer role="contentinfo">
            <div className="footer-social">
                <a href="https://linkedin.com/in/rairsonfernandes" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://github.com/rairsonfernandes" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <i className="fab fa-github"></i>
                </a>
                <a href="mailto:rairsonfernandes@gmail.com" aria-label="Email">
                    <i className="fas fa-envelope"></i>
                </a>
            </div>
            <div className="footer-links">
                <a href="#home" onClick={(e) => { e.preventDefault(); document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('nav.home')}</a>
                <a href="#sobre" onClick={(e) => { e.preventDefault(); document.getElementById('sobre')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('nav.about')}</a>
                <a href="#projetos" onClick={(e) => { e.preventDefault(); document.getElementById('projetos')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('nav.projects')}</a>
                <a href="#contato" onClick={(e) => { e.preventDefault(); document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' }); }}>{t('nav.contact')}</a>
            </div>
            <p>
                &copy; {currentYear} {t('footer.rights')}
            </p>
        </footer>
    );
};

export default Footer;