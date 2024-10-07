import React, { useEffect } from 'react';
import { init } from '@module-federation/enhanced/runtime';
//Custom Components
import VueLoader from '../components/VueLoader';
import LegacyLoader from '../components/LegacyLoader';
//Lib Components
import { ErrorBoundary } from '@lab/shared';

export function App() {
    /*
  init({
    name: 'container',
    remotes: [
        {name: 'Quotes', entry: `http://localhost:3001/mf-manifest.json`},
        {name: 'Legacy', entry: `http://localhost:3002/mf-manifest.json`}
    ],
    shared: {},
    plugins: []
})
    */

    return (
        <ErrorBoundary>
            <VueLoader />
            <LegacyLoader />
        </ErrorBoundary>
    );
}

export default App;
