import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";
import router from "./router";
import { VueToggles } from "vue-toggles";
 
// Composables
import { createApp } from "vue";

const app = createApp(App);
app.use(router);

registerPlugins(app);

app.mount("#app");
