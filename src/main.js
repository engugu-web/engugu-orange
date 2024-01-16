import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "./assets/base.scss";
//引入element plus
import ElementPlus from "element-plus";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";

const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component);
}
app.use(router);

app.use(ElementPlus, {
  locale: zhCn,
});
app.config.globalProperties.globalInfo = {
  bodyWidth: 1300,
};
app.mount("#app");
