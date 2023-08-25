import { resolve } from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteMockServe } from "vite-plugin-mock"
const pathResolve = (dir) => resolve(__dirname, dir);
// https://vitejs.dev/config/

export default defineConfig(({ command }) =>{
  console.log(command+'----');
  return {
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
  })
  ],
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
