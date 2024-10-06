import React, {Suspense, lazy} from 'react';
import { importRemote } from '@module-federation/utilities';
import { ErrorBoundary } from '@lab/shared';


export default () => {
 const LegacyRemote: React.LazyExoticComponent<any> = lazy(async() => await importRemote({
    url: 'http://localhost:3002',
    scope: 'fatboy',
    module: './Test'
 }))

 console.log(LegacyRemote)
  return (<ErrorBoundary><Suspense><LegacyRemote /></Suspense></ErrorBoundary>);
};