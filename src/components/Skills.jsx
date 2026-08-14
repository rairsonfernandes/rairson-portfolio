import { useTranslation } from 'react-i18next';

const skillsData = {
    frontend: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    ],
    backend: [
        { name: 'PHP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
        { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg' },
        { name: 'REST API', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
    ],
    database: [
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    ],
    tools: [
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Visual Studio', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
    ]
};

const Skills = () => {
    const { t } = useTranslation();

    const categories = [
        { key: 'frontend', label: t('skills.frontend'), icon: 'fa-window-maximize' },
        { key: 'backend', label: t('skills.backend'), icon: 'fa-server' },
        { key: 'database', label: t('skills.database'), icon: 'fa-database' },
        { key: 'tools', label: t('skills.tools'), icon: 'fa-tools' },
    ];

    return (
        <section id="skills" className="container-section" aria-label="Habilidades técnicas">
            <h2 className="section-title">{t('skills.title')}</h2>
            <div className="section-sub">{t('skills.subtitle')}</div>
            
            <div className="skills-container">
                {categories.map((cat) => (
                    <div key={cat.key} className="skill-category">
                        <h3>
                            <i className={`fas ${cat.icon}`}></i>
                            {cat.label}
                        </h3>
                        <div className="skills-grid">
                            {skillsData[cat.key].map((skill, index) => (
                                <div key={index} className="skill-card">
                                    <div className="skill-img">
                                        <img src={skill.icon} alt={skill.name} loading="lazy" />
                                    </div>
                                    <h4>{skill.name}</h4>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;