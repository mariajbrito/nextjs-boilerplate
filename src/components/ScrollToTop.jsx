import { useLocation } from 'react-router-dom';
import { useEffect, useLayoutEffect } from 'react';

// useLayoutEffect nao existe na renderizacao do servidor e emitiria um aviso no
// build de pre-renderizacao. No browser mantem-se, para evitar salto visivel.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useIsomorphicLayoutEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname]);

    return null;
}

export default ScrollToTop;
