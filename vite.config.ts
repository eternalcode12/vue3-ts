import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import Components from "unplugin-vue-components/vite";
import ElementPlus from "unplugin-element-plus/vite";
import AutoImport from "unplugin-auto-import/vite";
import WindiCSS from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "src"),
        },
        extensions: [".mjs", ".js", ".ts", ".jsx", ".tsx", ".json"],
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `@use "src/assets/css/element.scss`,
            }
        }
    },
    plugins: [
        vue(),
        ElementPlus(),
        WindiCSS(),
        AutoImport({
            imports: ["vue", "vue-router", "vuex"],
        }),
        Components({
            resolvers: [ElementPlusResolver()],
        }),
    ],
});