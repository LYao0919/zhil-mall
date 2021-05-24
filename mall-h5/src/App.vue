<!--
 * @Author: 鲁遥
 * @Date: 2021-05-08 15:26:56
 * @LastEditTime: 2021-05-15 21:12:27
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/App.vue
-->
<template>
  <div class="mall">
    <router-view class="view" />
    <van-tabbar
      class="main-tabbar"
      v-model="active"
      active-color="#ee0a24"
      inactive-color="#000"
    >
      <van-tabbar-item to="/" icon="home-o"></van-tabbar-item>
      <van-tabbar-item to="/category" icon="bars"></van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o"></van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<script lang="ts">
import { defineComponent, provide, ref } from "vue";
import { API } from "./../api/index";

export default defineComponent({
  name: "App",
  setup() {
    provide("$API", API);
    const active = ref(0);
    return {
      active,
    };
  },
});
</script>

<style scoped lang="less">
#app {
  //   font-family: fantasy, Avenir, Helvetica, Arial, sans-serif;
  //   -webkit-font-smoothing: antialiased;
  //   -moz-osx-font-smoothing: grayscale;
  //   text-align: center;
  // color: #2c3e50;
  //   margin: 0;
  //   padding: 0;
  // width: 100vw;
}
// .mall {
//   display: flex;
//   flex-direction: column;
//   .tabbar {
//     height: 50px;
//   }
//   .view {
//     flex: 1;
//   }
// }
</style>
