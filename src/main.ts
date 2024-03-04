import { ViteSSG } from 'vite-ssg/single-page'
import './assets/main.css'
import App from './App.vue'

export const createApp =  ViteSSG(App,({app}) => {
  // app.use(I18NextVue, { i18next });
});