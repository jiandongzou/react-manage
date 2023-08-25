# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-启动过程如果遇到解决vite-plugin-mock (if (!require.cache) { ^ReferenceError: require is not defined})报错

在node_modules\vite-plugin-mock\dist\index.mjs文件中添加以下代码

import { createRequire } from 'module'

const require = createRequire(import.meta.url)