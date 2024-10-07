import React, { Suspense } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
/*
import { init } from '@module-federation/enhanced/runtime';

runtime can be placed inside of react tree and doesn't have to live outside of react
*/
//Custom Components
import Error from '../components/common/Error';
import Spinner from '../components/common/Spinner';
import VueRemote from '../components/Remotes/VueRemote';
import LegacyRemote from '../components/Remotes/LegacyRemote';
//Routes
import Root from '../routes/Root';
import Home from '../routes/Home';

export function App() {
    console.log('container: ', React.version);

    const router = createBrowserRouter([
        {
            element: <Root/>,
            errorElement: <Error/>,
            children: [
                {
                    path: '/',
                    element: (<Suspense fallback={<Spinner/>}><Home/></Suspense>)
                },
                {
                    path: '/legacy',
                    element: <LegacyRemote/>
                },
                {
                    path: '/quote',
                    element: <VueRemote/>
                }
            ]
        }
    ])

    return (
        <RouterProvider router={router}/>
    );
}

export default App;
