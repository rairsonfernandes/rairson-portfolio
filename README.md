📄 README.md - Portfólio de Rairson Fernandes

# 🚀 Portfólio - Rairson Fernandes

[![Deploy Status](https://img.shields.io/badge/Deploy-Ready-brightgreen)](https://rairsonfernandes.dev)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Lighthouse](https://img.shields.io/badge/Lighthouse-95%2B-brightgreen)](https://developers.google.com/web/tools/lighthouse)

Portfólio profissional desenvolvido em React com suporte a múltiplos idiomas, tema claro/escuro, SEO otimizado, animações modernas e integração com EmailJS para contato. Projetado para demonstrar projetos, competências e experiência de forma responsiva e performática.

## 🌐 Demonstração

🔗 **[Acesse o Portfólio Online](https://rairson-portfolio.onrender.com/)**

### 📱 Screenshots

| Desktop | Tablet | Mobile |
|---------|--------|--------|
| ![Desktop](./screenshots/desktop.png) | ![Tablet](./screenshots/tablet.png) | ![Mobile](./screenshots/mobile.png) |

## 🎯 Objetivo

Este projeto foi criado para servir como meu portfólio profissional, demonstrando minhas habilidades em desenvolvimento Front-end, internacionalização, boas práticas de SEO, performance e design responsivo.

## 📈 Destaques

- 🌍 **5 idiomas** (PT-PT, PT-BR, EN-US, FR, ES)
- 📱 **100% Responsivo** em todos os dispositivos
- ⚡ **Lighthouse > 95** em performance
- ♿ **Acessibilidade** (ARIA, semântica HTML)
- 🔍 **SEO otimizado** (Meta tags, Open Graph, Sitemap)
- 🌓 **Tema Claro/Escuro** com persistência
- 🎨 **Design Premium** (Glassmorphism, animações)

## ✨ Funcionalidades

| Funcionalidade | Status |
|----------------|--------|
| ✔️ Tema Claro/Escuro | ✅ |
| ✔️ Tradução em 5 idiomas | ✅ |
| ✔️ Modal de projetos | ✅ |
| ✔️ Formulário de contacto | ✅ |
| ✔️ SEO otimizado | ✅ |
| ✔️ Open Graph | ✅ |
| ✔️ Design Responsivo | ✅ |
| ✔️ Scroll To Top | ✅ |
| ✔️ Menu Mobile Full Screen | ✅ |
| ✔️ Glassmorphism | ✅ |
| ✔️ Animações suaves | ✅ |

## 🛠️ Tecnologias

### Frontend

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| React | 18.2.0 | Biblioteca para construção de interfaces |
| React Hooks | - | Gerenciamento de estado e efeitos |
| Context API | - | Gerenciamento de estado global |
| CSS3 | - | Estilização com variáveis e temas |
| Font Awesome | 6.5.0 | Ícones vetoriais |

### Bibliotecas

| Biblioteca | Versão | Descrição |
|------------|--------|-----------|
| i18next | 23.0.0 | Internacionalização |
| react-i18next | 13.0.0 | Integração React com i18next |
| i18next-browser-languagedetector | 7.0.0 | Detecção automática de idioma |
| EmailJS | 3.11.0 | Envio de e-mails do formulário |
| react-helmet-async | 2.0.4 | Gerenciamento de head SEO |

## 📁 Estrutura do Projeto

A aplicação foi desenvolvida com **React + Vite** e organizada de forma modular, priorizando reutilização de componentes, manutenção do código, internacionalização e boas práticas de desenvolvimento.

```text
rairson-portfolio/
│
├── public/
│   ├── images/
│   │   ├── Projetos/              # Imagens dos projetos
│   │   ├── flags/                 # Bandeiras dos idiomas
│   │   └── logo/                  # Favicons e identidade visual
│   │
│   ├── index.html                 # Documento HTML principal e SEO
│   ├── robots.txt                 # Configurações para mecanismos de busca
│   ├── sitemap.xml                # Sitemap para indexação
│   └── site.webmanifest           # Configuração PWA / instalação
│
├── src/
│   ├── assets/
│   │   └── css/                   # Estilos organizados por componente
│   │
│   ├── components/                # Componentes React reutilizáveis
│   │   ├── About.jsx
│   │   ├── Certificates.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LanguageSelector.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProjectModal.jsx
│   │   ├── Projects.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Skills.jsx
│   │
│   ├── context/                   # Context API e estados globais
│   │   ├── ProjectContext.jsx
│   │   └── ThemeContext.jsx
│   │
│   ├── data/                      # Dados estáticos dos projetos
│   │   └── projects.js
│   │
│   ├── i18n/                      # Internacionalização
│   │   ├── locales/               # Arquivos de tradução
│   │   ├── config.js
│   │   └── index.js
│   │
│   ├── images/                    # Imagens utilizadas pelos componentes
│   │
│   ├── App.jsx                    # Componente raiz da aplicação
│   └── index.js                   # Ponto de entrada da aplicação
│
├── screenshots/
│   ├── desktop.png                # Preview desktop
│   ├── tablet.png                 # Preview tablet
│   └── mobile.png                 # Preview mobile
│
├── .env.example                   # Modelo das variáveis de ambiente
├── .gitignore                     # Arquivos ignorados pelo Git
├── .oxlintrc.json                 # Configuração do OXLint
├── package.json                   # Dependências e scripts
├── package-lock.json              # Versões das dependências
├── vite.config.js                 # Configuração do Vite
└── README.md                      # Documentação do projeto




## 🚀 Como Executar

### Pré-requisitos

- Node.js 16.x ou superior
- npm 8.x ou superior

### Passo a Passo

1. **Clone o repositório**


git clone https://github.com/rairsonfernandes/rairson-portfolio.git
cd portfolio
Instale as dependências


npm install --legacy-peer-deps
Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto:


REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
Execute o projeto em modo desenvolvimento


npm start

O projeto estará disponível em http://localhost:3000

Build para produção


npm run build

Os arquivos otimizados estarão na pasta build/

🌍 Deploy

Netlify (Recomendado)
Acesse Netlify Drop

Arraste a pasta build/

O site será publicado em segundos

Vercel

npm install -g vercel
vercel --prod
GitHub Pages

npm install --save-dev gh-pages
Adicione ao package.json:

'
"homepage": "https://seu-usuario.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}

npm run deploy
⚡ Funcionalidades
🌍 Multi-idioma

Idioma	Código	Bandeira
Português (PT)	pt-PT	🇵🇹
Português (BR)	pt-BR	🇧🇷
English (US)	en-US	🇺🇸
Français	fr	🇫🇷
Español	es	🇪🇸

🌓 Tema Claro/Escuro

Alternância automática

Persistência via localStorage

Transições suaves entre temas

📱 Responsividade

Desktop: Menu horizontal centralizado

Mobile: Menu full screen com fundo preto

Tablet: Layout adaptado

📦 Scripts Disponíveis

Script	Descrição
npm start	Inicia o servidor de desenvolvimento
npm run build	Cria build de produção
npm test	Executa os testes
npm run eject	Eject do Create React App

🤝 Contribuição

Contribuições são bem-vindas! Siga os passos:

Fork o projeto

Crie uma branch (git checkout -b feature/amazing-feature)

Commit suas alterações (git commit -m 'Add amazing feature')

Push para a branch (git push origin feature/amazing-feature)

Abra um Pull Request

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 📞 Contato

Estou disponível para oportunidades, projetos e colaborações.

| Plataforma | Link |
|:---|:---|
| 💼 **LinkedIn** | [linkedin.com/in/rairsonfernandes](https://www.linkedin.com/in/rairsonfernandes/) |
| 💻 **GitHub** | [github.com/rairsonfernandes](https://github.com/rairsonfernandes) |
| 📧 **E-mail** | [rairsonfernandes@gmail.com](mailto:rairsonfernandes@gmail.com) |
| 🌐 **Portfólio** | [rairson-portfolio.onrender.com](https://rairson-portfolio.onrender.com/) |

🙏 Agradecimentos
React - Framework JavaScript

i18next - Internacionalização

Font Awesome - Ícones

EmailJS - Serviço de e-mail

📊 Status do Projeto

https://img.shields.io/badge/Status-Production-success
https://img.shields.io/badge/Build-Passing-success
https://img.shields.io/badge/Version-1.0.0-blue
https://img.shields.io/badge/Maintained-Yes-brightgreen

⭐ Se este projeto te ajudou, dê uma estrela no GitHub!

Desenvolvido por Rairson Fernandes











