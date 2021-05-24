
/*
 * @Author: 鲁遥
 * @Date: 2021-05-08 15:26:56
 * @LastEditTime: 2021-05-10 16:15:47
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/vite.config.ts
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import styleImport from 'vite-plugin-style-import';



// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://localhost:3000',
  //       changeOrigin: true,
  //     }
  //   }
  // },
  resolve: {
    // alias: [{ find: /^~/, replacement: '' }, ],
    alias: { '@': path.resolve(__dirname, 'src') },
  },
  plugins: [vue(),
    // styleImport({
    //   libs: [
    //     {
    //       libraryName: 'vant',
    //       esModule: true,
    //       resolveStyle: (name) => `vant/es/${name}/style`,
    //     },
    //   ],
    // }),
  ],


  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true,
  //       // 覆盖样式变量
  //       modifyVars: {
  //         'hack': `true; @import "${path.join(__dirname, './src/assets/css/vant.theme.less')}";`,
  //       },
  //     },
  //   },
  // },

})



