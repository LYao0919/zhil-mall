<!--
 * @Author: 鲁遥
 * @Date: 2021-05-11 20:37:35
 * @LastEditTime: 2021-06-14 17:33:35
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-h5/src/views/detail/index.vue
-->
<template>
  <van-button @click="router.go(-1)" plain class="go-back" round type="default">
    <van-icon name="arrow-left" />
  </van-button>
  <!-- <van-nav-bar @click="router.go(-1)" title="" left-arrow /> -->

  <div class="detail" v-if="Object.keys(goodsDetail).length > 0">
    <!-- <van-swipe
      v-if="Object.keys(goodsDetail).length > 0"
      :autoplay="3000"
      lazy-render
    >
      <van-swipe-item v-for="image in goodsDetail.image" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe> -->

    <img class="goods-img" :src="goodsDetail.image" />
    <div class="info">
      <p class="goods-name">{{ goodsDetail.name }}</p>
      <p class="price">
        <span class="mall-price"> ¥ {{ goodsDetail.present_price }}</span>
        &nbsp;
        <del class="price">{{ goodsDetail.orl_price }}</del>
      </p>
    </div>
    <van-grid :column-num="2">
      <van-grid-item>运费 {{ goodsDetail.__v }} </van-grid-item>
      <van-grid-item>数量 {{ goodsDetail.amount }} </van-grid-item>
    </van-grid>
  </div>
  <van-tabs v-model:active="active">
    <van-tab title="详情" name="detail">
      <span v-html="goodsDetail.detail"></span>
    </van-tab>
    <van-tab title="评论" name="pl">内容 2</van-tab>
  </van-tabs>

  <!-- 加购 -->

  <van-action-bar class="cart-bar">
    <!-- <van-action-bar-icon icon="chat-o" text="客服" dot /> -->
    <!-- <van-action-bar-icon icon="shop-o" text="店铺" badge="12" /> -->
    <van-action-bar-icon
      icon="cart-o"
      text="购物车"
      badge="5"
      @click="
        router.push({
          name: 'Cart',
        })
      "
    />
    <van-action-bar-button @click="addCart" type="warning" text="加入购物车" />
    <van-action-bar-button type="danger" text="立即购买" />
  </van-action-bar>
</template>
<script lang="ts">
import { defineComponent, inject, onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Toast } from "vant";

export default defineComponent({
  setup() {
    const router = useRouter();
    const route = useRoute();
    const $API = <any>inject("$API");
    const goodsDetail = ref({});
    const activeName = ref("detail");
    let images = ref([]);

    function getDetail(params: any) {
      $API.getGoodsDetail({ id: params.id }).then((res) => {
        console.log(res);
        goodsDetail.value = res.data;
      });
    }

    function addCart() {
      $API.addCart({ id: route.params.id.toString() }).then((res) => {
        console.log(res);
        if (res.code == 200) {
          Toast.success(res.msg);
        } else {
          Toast.fail(res.msg);
        }
      });
    }

    onMounted(() => {
      getDetail({ id: route.params.id });
    });
    return {
      addCart,
      images,
      goodsDetail,
      activeName,
      router,
    };
  },
});
</script>
<style>
.main-tabbar {
  /* z-index: -1; */
}
</style>
<style lang="less" scoped>
.go-back {
  z-index: 1;
  position: fixed;
  top: 10px;
  left: 10px;
}
.detail {
  display: flex;
  flex-direction: column;

  .goods-img {
    width: 100%;
    align-items: center;
  }

  .info {
    padding: 10px;
    border-top: 1px solid #ccc;
    background: white;
    .goods-name {
      width: 100%;
      text-align: left;
      line-height: 20px;
      height: 40px;
      font-size: 14px;
      color: #333;
      margin: 0;
      white-space: normal;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: 2;
    }
    .price {
      width: 100%;
      text-align: left;
      margin: 0;
      .mall-price {
        color: #5f7e2e;
      }
      .price {
        color: #999;
        font-size: 10px;
      }
    }
  }
}
.cart-bar {
  z-index: 2;
}
</style>