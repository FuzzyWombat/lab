import { createApp } from 'vue';
import App from './App.vue';

// Mount is exported as this is what will be used in the federated module to mount the VUE app into the DOM from React ref
export const mount = (element: HTMLElement) => {
    const app = createApp(App);

    app.mount(element);
};

export default mount;
