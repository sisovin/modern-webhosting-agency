// This file serves as a fallback for the App Router
// It might help with navigation issues if there are any problems with the App Router

import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        // Log navigation events to help debug routing issues
        console.log('Current path:', router.pathname);

        // Fix for the about page navigation
        if (router.pathname === '/about' && window.location.pathname !== '/about') {
            router.push('/about', undefined, { shallow: false });
        }
    }, [router.pathname]);

    return <Component {...pageProps} />;
}
