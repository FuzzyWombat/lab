import { createApp } from 'vue';
import App from './App.vue';

/*
 ** Index is the main entry for the stand alone application
 ** We don't want to export this file since it will be used as its own independant Application entry
 */
createApp(App).mount('#root');
