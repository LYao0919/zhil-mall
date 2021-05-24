<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 21:24:38
 * @LastEditTime: 2021-05-15 23:14:58
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/views/user/index.vue
-->
<template>
  <div class="user-box">
    <notLoggedIn />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import notLoggedIn from "./component/notLoggedIn.vue";
export default defineComponent({
  components: {
    notLoggedIn,
  },
  setup() {
    return {};
  },
});
</script>
<style lang="less" scoped>
</style>