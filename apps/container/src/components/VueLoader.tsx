import React, { useRef, useEffect} from 'react';
import {loadRemote} from '@module-federation/enhanced/runtime'

export default () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async()=> {
        const {mount} = await loadRemote('Quotes/QuotesApp', {from: 'runtime'}) as {mount: (element: HTMLDivElement) => void}

        mount(ref.current as HTMLDivElement);
    })();
  }, []);

  return <div ref={ref} />;
};