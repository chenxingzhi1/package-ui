import DefaultTheme from "vitepress/theme";
import "element-plus/dist/index.css";
import ElementPlus from "element-plus"
import { AntDesignContainer } from '@vitepress-demo-preview/component'
import '@vitepress-demo-preview/component/dist/style.css'

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
      app.use(ElementPlus);
      app.component('demo-preview', AntDesignContainer)
  },
};
