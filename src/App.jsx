import { HelmetProvider } from 'react-helmet-async';
import './i18n/config';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectModal from "./components/ProjectModal";
import ScrollToTop from "./components/ScrollToTop";
import { ProjectProvider } from "./context/ProjectContext";
import { ThemeProvider } from "./context/ThemeContext";

// CSS
import "./assets/css/global.css";
import "./assets/css/navbar.css";
import "./assets/css/hero.css";
import "./assets/css/about.css";
import "./assets/css/skills.css";
import "./assets/css/projects.css";
import "./assets/css/certificates.css";
import "./assets/css/contact.css";
import "./assets/css/footer.css";
import "./assets/css/language.css";

function App() {
    return (
        <HelmetProvider>
            <ThemeProvider>
                <ProjectProvider>
                    <Navbar />
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <Certificates />
                    <Contact />
                    <Footer />
                    <ProjectModal />
                    <ScrollToTop />
                </ProjectProvider>
            </ThemeProvider>
        </HelmetProvider>
    );
}

export default App;