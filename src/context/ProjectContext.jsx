import { createContext, useState } from 'react';
import { projectsData } from '../data/projects';

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [projects] = useState(projectsData);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (index) => {
        setSelectedProject(projects[index]);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProject(null);
    };

    return (
        <ProjectContext.Provider value={{ projects, selectedProject, isModalOpen, openModal, closeModal }}>
            {children}
        </ProjectContext.Provider>
    );
};