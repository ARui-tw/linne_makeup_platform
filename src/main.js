import { createApp } from "vue";
import VueCookies from "vue-cookies";
import "./tailwind.css";
import App from "./App.vue";
import { router } from "./routes.js";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import api from "./api";

const app = createApp(App);

app
  .use(router)
  .use(store)
  .use(VueAxios, axios)
  .use(VueCookies, { expire: "2m" })
  .use(api);

app.mount("#app");
