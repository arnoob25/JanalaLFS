import { useState, useEffect } from 'react';

export default function useMediaQuery(query) {
    const [matches, setMatches] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(query);

        const handleChange = (event) => {
            const newMatches = event.matches;
            setMatches(newMatches);
        };

        handleChange(mediaQuery); // Handle the initial match state

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [query]);

    return matches;
}