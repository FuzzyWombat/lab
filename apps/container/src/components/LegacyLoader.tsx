import React, {Suspense, lazy} from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
import { ErrorBoundary } from '@lab/shared';

const LegacyRemote = lazy(() => loadRemote('Legacy/Test', {from: 'runtime'}) as any) 


export default () => {

  return (<ErrorBoundary><Suspense><LegacyRemote /></Suspense></ErrorBoundary>);
};