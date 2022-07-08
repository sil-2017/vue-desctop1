import { createApp, VueElement } from 'vue'
import App from './App.vue'
// import router from './router'
import components from '@/components/UI';
import sections from '@/components';
import './assets/style.scss';
import VMask from './components/directives/VMask';

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

sections.forEach(component => {
    app.component(component.name, component)
});

app.directive('mask', VMask);
app.mount('#app');

// .use(router)