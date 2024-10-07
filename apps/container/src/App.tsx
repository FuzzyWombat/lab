import React, { Suspense } from 'react';
import { SaltProvider } from '@salt-ds/core';
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
                uncomment and place Salt Remote here

                go to Root component and add path to Navigation Bar Array to link component
                {
                    path:,
                    element: ,
                },

                */
            ],
        },
    ]);

    return (
        <SaltProvider>
            <RouterProvider router={router} />
        </SaltProvider>
    );
}

export default App;
