import React, { useRef, useEffect, useState } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
//Lib Components
import { ErrorBoundary } from '@lab/shared';
//Custom Components
import Spinner from '../components/common/Spinner';
import Fallback from '../components/common/FallBack';

export default () => {
    const [loading, setLoading] = useState(true);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            const { mount } = (await loadRemote('Vue/VueApp', { from: 'runtime' })) as {
                mount: (element: HTMLDivElement) => void;
            };

            mount(ref.current as HTMLDivElement);
        })();
        
        setLoading(false);
    }, []);

    return (
        <ErrorBoundary fallback={<Fallback />}>
            {loading ? <Spinner /> : <div className='flex flex-col h-full' ref={ref} />}
        </ErrorBoundary>
    );
};
