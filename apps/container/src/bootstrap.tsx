import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { SaltProvider } from '@salt-ds/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { init } from '@module-federation/enhanced/runtime';
//Custom Components
import App from './App';
// Import Styles
import './styles/index.css';
import '@salt-ds/theme/index.css';

//Custom Font Styles
import '@fontsource/open-sans/300.css';
import '@fontsource/open-sans/300-italic.css';
import '@fontsource/open-sans/400.css';
import '@fontsource/open-sans/400-italic.css';
import '@fontsource/open-sans/500.css';
import '@fontsource/open-sans/500-italic.css';
import '@fontsource/open-sans/600.css';
import '@fontsource/open-sans/600-italic.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/open-sans/700-italic.css';
import '@fontsource/open-sans/800.css';
import '@fontsource/open-sans/800-italic.css';
import '@fontsource/pt-mono';

init({
    name: 'container',
    remotes: [
        { name: 'Vue', entry: `http://localhost:3001/mf-manifest.json` },
        { name: 'Legacy', entry: `http://localhost:3002/mf-manifest.json` },
        //Remote entry goes here?
    ],
    shared: {},
    plugins: [],
});

const queryClient = new QueryClient({ defaultOptions: { queries: { staleTime: 2 * 1000, gcTime: Infinity } } });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <StrictMode>
        <SaltProvider>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </SaltProvider>
    </StrictMode>
);
