import React, { useEffect } from 'react';
import { init } from '@module-federation/enhanced/runtime';
//Custom Components
import VueLoader from '../components/VueLoader';
import LegacyLoader from '../components/LegacyLoader';
//Lib Components
import { ErrorBoundary } from '@lab/shared';

export function App() {
    console.log('container: ', React.version);

    return (
        <ErrorBoundary>
            <VueLoader />
            <LegacyLoader />
        </ErrorBoundary>
    );
}

export default App;
