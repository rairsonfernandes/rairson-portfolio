import { useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectContext } from '../context/ProjectContext';

const Projects = () => {
    const { t } = useTranslation();
    const { projects, openModal } = useContext(ProjectContext);

    return (
        <section id="projetos" className="container-section" aria-label="Projetos">
            <h2 className="section-title">{t('projects.title')}</h2>
            <div className="section-sub">{t('projects.subtitle')}</div>
            
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div 
                        key={index} 
                        className="project-card"
                        onClick={() => openModal(index)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => e.key === 'Enter' && openModal(index)}
                        aria-label={`${t('projects.view_details')} ${project.title}`}
                    >
                        <div className="project-img">
                            <img src={project.img} alt={project.title} loading="lazy" />
                            <div className="project-overlay">
                                <span><i className="fas fa-search-plus"></i> {t('projects.view_details')}</span>
                            </div>
                        </div>
                        <div className="project-info">
                            <h3>{project.title}</h3>
                            <p>{project.shortDesc}</p>
                            <div className="project-tech-tags">
                                {project.tech.slice(0, 4).map((tech, i) => (
                                    <span key={i}>{tech}</span>
                                ))}
                                {project.tech.length > 4 && <span>+{project.tech.length - 4}</span>}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;