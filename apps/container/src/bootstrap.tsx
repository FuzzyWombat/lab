import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import {init} from '@module-federation/enhanced/runtime'
//Custom Components
import App from './app/app';

init({
    name: 'container',
    remotes: [
        {name: 'Quotes', entry: `${process.env.REACT_APP_REMOTE_VUE}/mf-manifest.json`}
    ],
    shared: {}
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
