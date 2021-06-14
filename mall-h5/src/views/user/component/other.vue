<!--
 * @Author: 鲁遥
 * @Date: 2021-06-14 14:31:26
 * @LastEditTime: 2021-06-14 14:40:15
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-h5/src/views/user/component/other.vue
-->
<template>
  <div class="other">
    <van-grid :gutter="8" :column-num="2">
      <van-grid-item icon="like-o" text="我的收藏" />
      <van-grid-item icon="location-o" text="收货地址" />
    </van-grid>
  </div>
</template>
<style lang="less" scoped>
.other {
  //   width: 90%;
  margin: 10px auto;
}
</style>