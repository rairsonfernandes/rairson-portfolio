import { useState, useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from '../context/ThemeContext';
import LanguageSelector from './LanguageSelector';

const Navbar = () => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const { theme, toggleTheme } = useContext(ThemeContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.style.overflow = !isOpen ? 'hidden' : '';
    };

    const closeMenu = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    const sections = [
        { id: 'home', label: t('nav.home') },
        { id: 'sobre', label: t('nav.about') },
        { id: 'skills', label: t('nav.skills') },
        { id: 'projetos', label: t('nav.projects') },
        { id: 'certificados', label: t('nav.certificates') },
        { id: 'contato', label: t('nav.contact') }
    ];

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(id);
        }
        closeMenu();
    };

    useEffect(() => {
        const handleScrollSpy = () => {
            const scrollPosition = window.scrollY + 120;
            const sectionIds = ['home', 'sobre', 'skills', 'projetos', 'certificados', 'contato'];
            
            for (const id of sectionIds) {
                const element = document.getElementById(id);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;
                    
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(id);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScrollSpy);
        return () => window.removeEventListener('scroll', handleScrollSpy);
    }, []);

    return (
        <header className="header" role="banner">
            <a 
                href="#home" 
                className={`logo ${isOpen ? 'logo-hidden' : ''}`} 
                onClick={(e) => { e.preventDefault(); handleScroll('home'); }}
            >
                RAIRSON<span>.DEV</span>
            </a>

            {/* Menu Icon - Só aparece no mobile */}
            <button 
                className="menu-icon" 
                onClick={toggleMenu}
                aria-label="Menu de navegação"
                aria-expanded={isOpen}
            >
                <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
            </button>

            <div className={`navbar-wrapper ${isOpen ? 'active' : ''}`}>
                {/* Botão Fechar - Só aparece no mobile quando menu está aberto */}
                {isOpen && (
                    <div className="navbar-close" onClick={closeMenu}>
                        <i className="fas fa-times"></i>
                    </div>
                )}

                <nav className="navbar" role="navigation" aria-label="Menu principal">
                    {sections.map((section) => (
                        <button
                            key={section.id}
                            className={`nav-link ${activeSection === section.id ? 'active' : ''}`}
                            onClick={() => handleScroll(section.id)}
                            aria-current={activeSection === section.id ? 'page' : undefined}
                        >
                            {section.label}
                        </button>
                    ))}
                </nav>

                <div className="nav-actions">
                    <LanguageSelector />
                    <button 
                        className="theme-toggle" 
                        onClick={toggleTheme}
                        aria-label={`Alternar para modo ${theme === 'dark' ? 'claro' : 'escuro'}`}
                        title={`Modo ${theme === 'dark' ? 'Claro' : 'Escuro'}`}
                    >
                        <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
                    </button>
                </div>
            </div>

            <div className={`overlay-menu ${isOpen ? 'active' : ''}`} onClick={closeMenu}></div>
        </header>
    );
};

export default Navbar;