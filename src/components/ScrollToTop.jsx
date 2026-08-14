import { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            const scrollY = window.scrollY || window.pageYOffset;
            // Mostra o botão após 300px de scroll
            if (scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        // Verifica imediatamente ao carregar
        toggleVisibility();

        window.addEventListener('scroll', toggleVisibility, { passive: true });

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <>
            {isVisible && (
                <button
                    className="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Voltar ao topo"
                    title="Voltar ao topo"
                >
                    <i className="fas fa-chevron-up"></i>
                </button>
            )}
        </>
    );
};

export default ScrollToTop;