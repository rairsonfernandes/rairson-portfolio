import { useContext, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ProjectContext } from '../context/ProjectContext';

const ProjectModal = () => {
    const { t } = useTranslation();
    const { selectedProject, isModalOpen, closeModal } = useContext(ProjectContext);

    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isModalOpen]);

    if (!isModalOpen || !selectedProject) return null;

    return (
        <div 
            className={`modal-overlay ${isModalOpen ? 'active' : ''}`} 
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={`${t('projects.view_details')} ${selectedProject.title}`}
        >
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-btn" onClick={closeModal}>
                    <i className="fas fa-times"></i>
                </button>

                <div className="modal-left">
                    <img src={selectedProject.img} alt={selectedProject.title} />
                    <div className="modal-img-badge">
                        <i className="fas fa-code"></i> Projeto
                    </div>
                </div>

                <div className="modal-right">
                    <div>
                        <h2>{selectedProject.title}</h2>
                        <div className="modal-subtitle">{selectedProject.shortDesc}</div>
                        <div className="modal-divider"></div>
                        <div className="modal-desc">{selectedProject.description}</div>
                        <div className="modal-tech">
                            {selectedProject.tech.map((tech, i) => (
                                <span key={i} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>

                    <div className="modal-buttons">
                        {/* Botão Ver Projeto Online */}
                        {selectedProject.link && (
                            <a 
                                href={selectedProject.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-modal btn-project"
                            >
                                <i className="fas fa-external-link-alt"></i> 
                                {t('projects.demo')}
                            </a>
                        )}
                        {/* Botão Ver no GitHub */}
                        {selectedProject.github && (
                            <a 
                                href={selectedProject.github} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="btn-modal btn-github"
                            >
                                <i className="fab fa-github"></i> 
                                {t('projects.repo')}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;