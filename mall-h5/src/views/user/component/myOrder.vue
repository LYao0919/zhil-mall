<!--
 * @Author: 鲁遥
 * @Date: 2021-06-14 14:02:56
 * @LastEditTime: 2021-06-14 14:32:49
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-h5/src/views/user/component/myOrder.vue
-->
<template>
  <div class="my-order">
    <p>我的订单</p>
    <van-grid :column-num="5">
      <van-grid-item icon="cash-back-record" text="待支付" />
      <van-grid-item icon="newspaper-o" text="待发货" />
      <van-grid-item icon="logistics" text="待收货" />
      <van-grid-item icon="edit" text="待评价" />
      <van-grid-item icon="thumb-circle-o" text="已完成" />
    </van-grid>
  </div>
</template>

<style lang="less" scoped>
.my-order {
  width: 90%;
  margin: auto;
  padding: 10px;
  background: white;
  p {
    margin: 10px 0;
  }
}
</style>
