<!--
 * @Author: 鲁遥
 * @Date: 2021-05-30 19:05:29
 * @LastEditTime: 2021-06-14 14:31:05
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-h5/src/views/user/component/loggedIn.vue
-->


<template>
  <div class="not-loggend-in">
    <van-nav-bar @click-left="router.go(-1)" title="" left-arrow />
    <van-row class="user-portrait" justify="center">
      <van-image
        round
        width="100px"
        height="100px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <p class="title">{{ userInfo.name }}</p>
    </van-row>
    <myOrder />
    <other />
    <!-- <router-link class="register" to="/register">去注册</router-link> -->
  </div>
</template>
<script lang="ts">
import {
  defineAsyncComponent,
  defineComponent,
  inject,
  reactive,
  ref,
} from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default defineComponent({
  components: {
    myOrder: defineAsyncComponent(() => import("./myOrder.vue")),
    other: defineAsyncComponent(() => import("./other.vue")),
  },
  setup() {
    let router = useRouter();
    let $API = inject("$API");

    let userInfo = ref(JSON.parse(localStorage.getItem("user")) || {});

    return {
      userInfo,
      router,
    };
  },
});
</script>
<style lang="less" scoped>
.not-loggend-in {
  .user-portrait {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    .title {
      margin: 10px;
    }
  }
  .user-info {
    margin: auto;
    width: 90vw;
  }

  .register {
    float: right;
    margin-right: 5vw;
    font-size: 14px;
    color: red;
    border-bottom: 1px solid red;
  }
}
</style>
