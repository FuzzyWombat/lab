import React, { useRef, useEffect } from 'react';
import { loadRemote } from '@module-federation/enhanced/runtime';
//Lib Components
import { ErrorBoundary } from '@lab/shared';

export default () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        (async () => {
            const { mount } = (await loadRemote('Vue/VueApp', { from: 'runtime' })) as {
                mount: (element: HTMLDivElement) => void;
            };

            mount(ref.current as HTMLDivElement);
        })();
    }, []);

    return (
        <ErrorBoundary>
            <div ref={ref} />
        </ErrorBoundary>
    );
};
