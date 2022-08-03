import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// windi
import "virtual:windi.css";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component);
}
app.mount('#app')
