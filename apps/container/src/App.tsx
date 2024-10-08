import React, { Suspense, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
/*
import { init } from '@module-federation/enhanced/runtime';

runtime can be placed inside of react tree and doesn't have to live outside of react
*/
//Custom Components
import Error from './components/common/Error';
import Spinner from './components/common/Spinner';
//Routes
import Root from './routes/Root';
import Home from './routes/Home';
import VueRemote from './routes/VueRemote';
import LegacyRemote from './routes/LegacyRemote';
//Salt Route to be worked on

//import SaltRemote from './routes/SaltRemote

export function App() {
    console.log('container: ', React.version);

    useEffect(() => {
        (async () => {
            await import('./mocks/browser');
        })();
    });

    const router = createBrowserRouter([
        {
            element: <Root />,
            errorElement: <Error />,
            children: [
                {
                    path: '/',
                    element: (
                        <Suspense fallback={<Spinner />}>
                            <Home />
                        </Suspense>
                    ),
                },
                {
                    path: '/legacy',
                    element: <LegacyRemote />,
                },
                {
                    path: '/quote',
                    element: <VueRemote />,
                },
                /*
                uncomment to add route
                {
                    path: '/lab,
                    element: <SaltRemote />,
                },

                */
            ],
        },
    ]);

    return <RouterProvider router={router} />;
}

export default App;
