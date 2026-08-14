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
| ✔️ Download de CV | ✅ |
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


rairson-portfolio/
├── public/
│   ├── images/                 # Imagens e recursos visuais
│   ├── index.html              # HTML principal e configurações de SEO
│   ├── robots.txt              # Diretrizes para mecanismos de busca
│   ├── sitemap.xml             # Sitemap para indexação
│   └── og-image.jpg            # Imagem para compartilhamento em redes sociais
│
├── src/
│   ├── assets/
│   │   └── css/                # Estilos CSS organizados por componente
│   │
│   ├── components/             # Componentes React reutilizáveis
│   │
│   ├── context/                # Context API (tema, projetos e estados globais)
│   │
│   ├── data/                   # Dados estáticos dos projetos
│   │
│   ├── i18n/                   # Internacionalização e traduções
│   │                              # Suporte a 5 idiomas
│   │
│   ├── App.jsx                 # Componente principal da aplicação
│   └── index.js                # Inicialização/configuração adicional
│
├── .env                        # Modelo das variáveis de ambiente
├── .gitignore                  # Arquivos ignorados pelo Git
├── package.json                # Dependências e scripts do projeto
├── package-lock.json           # Lockfile das dependências
└── README.md                   # Documentação do projeto





## 🚀 Como Executar

### Pré-requisitos

- Node.js 16.x ou superior
- npm 8.x ou superior

### Passo a Passo

1. **Clone o repositório**


git clone https://github.com/rairsonfernandes/portfolio.git
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

📞 Contato

Rede Social	Link
LinkedIn	linkedin.com/in/rairsonfernandes
GitHub	    github.com/rairsonfernandes
E-mail	    rairsonfernandes@gmail.com

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











