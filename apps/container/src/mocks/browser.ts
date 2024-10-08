// src/mocks/browser.js
import { setupWorker } from 'msw/browser';
//customHandlers
import { handlers } from './handlers';

const worker = setupWorker(...handlers);

worker.start();
