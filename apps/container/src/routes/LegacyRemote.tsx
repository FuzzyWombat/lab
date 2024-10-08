import React, { Suspense, lazy } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
//Shared Lib
import { ErrorBoundary } from '@lab/shared';
//Custom Components
import Spinner from '../components/common/Spinner';
import Fallback from '../components/common/FallBack';

const LegacyRemote = lazy(
    () =>
        loadRemote('Legacy/Test', { from: 'runtime' }) as Promise<{
            default: React.ComponentType<Record<string, unknown>>;
        }>
);

export default () => {
    return (
        <ErrorBoundary fallback={<Fallback />}>
            <Suspense fallback={<Spinner />}>
                <LegacyRemote />
            </Suspense>
        </ErrorBoundary>
    );
};
