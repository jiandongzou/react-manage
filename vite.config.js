import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from "vite-plugin-mock"
import {createHtmlPlugin} from 'vite-plugin-html'
const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/

export default defineConfig(({ command }) =>{
  console.log(command+'----');
  return {
    base:command === 'build'?'/react-manage/':'',
  plugins: [
    react(),
    viteMockServe({
      ignore: /^_/,
      mockPath: './src/mock',
      localEnabled:  command === 'serve', // 开发环境
      prodEnabled:  command === 'build',
      injectCode: `
          import { setupProdMockServer } from './src/mock/_index';
          setupProdMockServer();
      `,
      watchFiles: true, // 监听文件内容变更
      injectFile: resolve("src/main.jsx"), 
      //injectFile: 'src/main.jsx',
      supportTs: false     //如果使用 js发开，则需要配置 supportTs 为 false
  }),
  createHtmlPlugin({
    minify: true,
    inject: {
      data: {
        title: '后台管理系统'
      }
    }
  }),
  ],
  build:{
  // rollup 配置
  rollupOptions: {
    output: {
      chunkFileNames: 'static/js/[name]-[hash].js', // 引入文件名的名称
      entryFileNames: 'static/js/[name]-[hash].js', // 包的入口文件名称
      assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 资源文件像 字体，图片等
      manualChunks(id) {
        // 如果不同模块使用的插件基本相同那就尽可能打包在同一个文件中，减少http请求，如果不同模块使用不同插件明显，那就分成不同模块打包。这是一个矛盾体。
        // 这里使用的是最小化拆分包。如果是前者可以直接选择返回'vendor'。
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString(); //让打开那个页面，加载那个页面的js ，让之间的关联足够小
          // return 'vendor'   如果不同模块使用的插件基本相同那就尽可能打包在同一个文件中，减少http请求;
        }
      }
    }
  },
  },
  css: {
    preprocessorOptions: {
      // 全局样式引入
      less: {
        additionalData: '@import "./src/theme/variables.less";',
        javascriptEnabled: true
      }
    }
  },
  resolve: {
    alias: {
      "@": pathResolve("./src"), // 新增
    },
  }
}
})
