import { useTranslation } from 'react-i18next';

const certificatesData = [
    { 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', 
        title: 'Introdução à Infraestrutura de Nuvem - Azure', 
        issuer: 'Microsoft Learn',
        description: 'Conceitos de nuvem, benefícios e tipos de serviço',
        link: 'https://learn.microsoft.com/pt-pt/users/railsonfernandes-5234/'
    },
    { 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', 
        title: 'Gerenciamento e Governança no Azure', 
        issuer: 'Microsoft Learn',
        description: 'Ferramentas de monitoramento, custos e conformidade',
        link: 'https://learn.microsoft.com/pt-pt/users/railsonfernandes-5234/'
    },
    { 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', 
        title: 'Crie Aplicações Web com Blazor', 
        issuer: 'Microsoft Learn',
        description: 'Componentes, formulários, validação e navegação',
        link: 'https://learn.microsoft.com/pt-pt/users/railsonfernandes-5234/'
    },
    { 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', 
        title: 'Interaja com Dados em Blazor', 
        issuer: 'Microsoft Learn',
        description: 'Criação de um jogo Connect Four com Blazor',
        link: 'https://learn.microsoft.com/pt-pt/users/railsonfernandes-5234/'
    },
    { 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg', 
        title: 'Ferramentas para Gerenciar Recursos do Azure', 
        issuer: 'Microsoft Learn',
        description: 'Deploy, gerenciamento e ferramentas de implantação',
        link: 'https://learn.microsoft.com/pt-pt/users/railsonfernandes-5234/'
    },
    { 
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg', 
        title: 'Azure SQL - Monitoramento e Governança', 
        issuer: 'Microsoft Learn',
        description: 'Ferramentas de monitoramento no Azure',
        link: 'https://learn.microsoft.com/pt-pt/users/railsonfernandes-5234/'
    },
];

const Certificates = () => {
    const { t } = useTranslation();

    return (
        <section id="certificados" className="container-section" aria-label="Certificações">
            <h2 className="section-title">{t('certificates.title')}</h2>
            <div className="section-sub">{t('certificates.subtitle')}</div>
            
            <div className="certificates-grid">
                {certificatesData.map((cert, index) => (
                    <div key={index} className="cert-card">
                        <div className="cert-img">
                            <img src={cert.icon} alt={cert.title} loading="lazy" />
                        </div>
                        <h4>{cert.title}</h4>
                        <p className="cert-issuer">{cert.issuer}</p>
                        {cert.description && (
                            <p className="cert-desc">📌 {cert.description}</p>
                        )}
                        <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-verify">
                            <i className="fas fa-check-circle"></i> {t('certificates.verify')}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Certificates;