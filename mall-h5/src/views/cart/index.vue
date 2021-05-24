<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 20:44:12
 * @LastEditTime: 2021-05-16 00:10:54
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/views/cart/index.vue
-->

<template>
  <div class="cart">
    <van-nav-bar @click-left="onClickLeft" title="购物车 🛒" left-arrow />
    <div v-for="item in 10">
      <van-card
        class="good-item"
        price="2.00"
        desc="描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息描述信息"
        title="商品标题"
        thumb="https://img.yzcdn.cn/vant/ipad.jpeg"
      >
        <template #tags>
          <van-tag plain type="danger">标签</van-tag>
          <van-tag plain type="danger">标签</van-tag>
        </template>
        <template #footer>
          <van-stepper v-model="value" />
          <van-button class="del-good" size="mini"> 删除 </van-button>
        </template>
      </van-card>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    let value = ref(1);
    let router = useRouter();

    function onClickLeft() {
      console.log(router);

      router.go(-1);
    }
    return {
      value,
      onClickLeft,
    };
  },
});
</script>
<style lang="less" scoped>
.cart {
  margin-bottom: 50px;
  .good-item {
    > .van-card__header {
      border: 1px solid;
    }
    .del-good {
      float: left;
    }
  }
}
</style>