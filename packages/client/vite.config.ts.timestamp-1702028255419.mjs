// ../client/vite.config.ts
import { defineConfig } from "file:///C:/Users/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB/Desktop/Projects/GitHub/Pixel-Bros/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB/Desktop/Projects/GitHub/Pixel-Bros/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dotenv from "file:///C:/Users/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB/Desktop/Projects/GitHub/Pixel-Bros/node_modules/dotenv/lib/main.js";
import { VitePWA } from "file:///C:/Users/%D0%94%D0%B0%D0%BD%D0%B8%D0%BB/Desktop/Projects/GitHub/Pixel-Bros/node_modules/vite-plugin-pwa/dist/index.js";
dotenv.config({ path: "../../.env.sample" });
var vite_config_default = defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3e3
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT
  },
  ssr: {
    format: "cjs"
  },
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      strategies: "injectManifest"
    })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vY2xpZW50L3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcXHUwNDE0XHUwNDMwXHUwNDNEXHUwNDM4XHUwNDNCXFxcXERlc2t0b3BcXFxcUHJvamVjdHNcXFxcR2l0SHViXFxcXFBpeGVsLUJyb3NcXFxccGFja2FnZXNcXFxcY2xpZW50XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTRcdTA0MzBcdTA0M0RcdTA0MzhcdTA0M0JcXFxcRGVza3RvcFxcXFxQcm9qZWN0c1xcXFxHaXRIdWJcXFxcUGl4ZWwtQnJvc1xcXFxwYWNrYWdlc1xcXFxjbGllbnRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLyVEMCU5NCVEMCVCMCVEMCVCRCVEMCVCOCVEMCVCQi9EZXNrdG9wL1Byb2plY3RzL0dpdEh1Yi9QaXhlbC1Ccm9zL3BhY2thZ2VzL2NsaWVudC92aXRlLmNvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCdcclxuaW1wb3J0IGRvdGVudiBmcm9tICdkb3RlbnYnXHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnXHJcbmRvdGVudi5jb25maWcoeyBwYXRoOiAnLi4vLi4vLmVudi5zYW1wbGUnIH0pXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogTnVtYmVyKHByb2Nlc3MuZW52LkNMSUVOVF9QT1JUKSB8fCAzMDAwLFxyXG4gIH0sXHJcbiAgZGVmaW5lOiB7XHJcbiAgICBfX1NFUlZFUl9QT1JUX186IHByb2Nlc3MuZW52LlNFUlZFUl9QT1JULFxyXG4gIH0sXHJcbiAgc3NyOiB7XHJcbiAgICBmb3JtYXQ6ICdjanMnLFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcclxuICAgICAgc3RyYXRlZ2llczogJ2luamVjdE1hbmlmZXN0JyxcclxuICAgIH0pLFxyXG4gIF0sXHJcbn0pXHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBZ2EsU0FBUyxvQkFBb0I7QUFDN2IsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sWUFBWTtBQUNuQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxPQUFPLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUczQyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixRQUFRO0FBQUEsSUFDTixNQUFNLE9BQU8sUUFBUSxJQUFJLFdBQVcsS0FBSztBQUFBLEVBQzNDO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixpQkFBaUIsUUFBUSxJQUFJO0FBQUEsRUFDL0I7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFFBQVE7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixRQUFRO0FBQUEsTUFDTixjQUFjO0FBQUEsTUFDZCxZQUFZO0FBQUEsSUFDZCxDQUFDO0FBQUEsRUFDSDtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
