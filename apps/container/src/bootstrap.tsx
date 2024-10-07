import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {init} from '@module-federation/enhanced/runtime'
//Custom Components
import App from './app/app';

init({
    name: 'container',
    remotes: [
        {name: 'Quotes', entry: `http://localhost:3001/mf-manifest.json`},
        {name: 'Legacy', entry: `http://localhost:3002/mf-manifest.json`}
    ],
    shared: {},
    plugins: []
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
