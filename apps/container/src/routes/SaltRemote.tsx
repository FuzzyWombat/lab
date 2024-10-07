//Uncomment code and change necesary fields to point to remote from salt-nested-route

/*
import React, { Suspense, lazy } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
//Shared Lib
import { ErrorBoundary } from '@lab/shared';
//Custom Components
import Fallback from '../components/common/FallBack';

const SaltRemote = lazy(
    () =>
        loadRemote('<REMOTE_APP_NAME/MODULE_NAME>', { from: 'runtime' }) as Promise<{
            default: React.ComponentType<Record<string, unknown>>;
        }>
);

export default () => {
    return (
        <ErrorBoundary fallback={<Fallback />}>
            <Suspense>
                <SaltRemote />
            </Suspense>
        </ErrorBoundary>
    );
};
*/