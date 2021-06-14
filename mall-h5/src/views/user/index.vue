<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 21:24:38
 * @LastEditTime: 2021-06-14 13:49:48
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-h5/src/views/user/index.vue
-->
<template>
  <div class="user-box">
    <loggedIn v-if="userInfo && userInfo.userId" />
    <notLoggedIn v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import notLoggedIn from "./component/notLoggedIn.vue";
import loggedIn from "./component/loggedIn.vue";
export default defineComponent({
  components: {
    notLoggedIn,
    loggedIn,
  },
  setup() {
    let userInfo = ref(JSON.parse(localStorage.getItem("user")) || {});
    console.log(userInfo, 98765);

    return { userInfo };
  },
});
</script>
<style lang="less" scoped>
</style>