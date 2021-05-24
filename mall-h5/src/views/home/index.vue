<!--
 * @Author: 鲁遥
 * @Date: 2021-05-08 15:56:36
 * @LastEditTime: 2021-05-24 21:03:29
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/views/home/index.vue
-->
<template>
  <div>
    <!-- 搜索 -->
    <div class="home-header">
      <router-link :to="{ name: 'Category' }">
        <van-icon name="bars" class="bars" size="30px"
      /></router-link>
      <router-link :to="{ name: 'Search' }" style="flex: 1">
        <van-search
          class="search"
          shape="round"
          :disabled="true"
          background="#697b5f"
          placeholder="请输入搜索关键词"
        />
      </router-link>
    </div>
    <!-- 轮播 -->
    <van-swipe class="my-swipe" :autoplay="2000" indicator-color="#999">
      <van-swipe-item v-for="(item, index) in homeData.slides">
        <img :src="item.image" alt="" />
      </van-swipe-item>
    </van-swipe>
    <!-- 类别 -->
    <van-grid class="category-box" column-num="5">
      <van-grid-item v-for="(item, index) in homeData.category" :key="index">
        <van-image :src="item.image">
          <span>{{ item.mallCategoryName }}</span>
        </van-image>
      </van-grid-item>
    </van-grid>
    <!-- 通知 -->
    <div>
      <!-- <van-notice-bar scrollable text="技术是开发它的人的共同灵魂。" /> -->
      <van-notice-bar v-if="homeData.advertesPicture">
        <van-image :src="homeData.advertesPicture.PICTURE_ADDRESS" />
      </van-notice-bar>
    </div>
    <!-- 推荐商品 -->
    <div class="recommend-box">
      <p class="title">推荐商品</p>
      <van-grid :border="true" :column-num="3">
        <van-grid-item
          v-for="(item, index) in homeData.recommend"
          @click="selGoods(item)"
        >
          <van-image :src="item.image" />
          <p class="goods-name">{{ item.goodsName }}</p>
          <p class="price">
            <span class="mall-price"> ¥ {{ item.mallPrice }}</span> &nbsp;
            <del class="price">{{ item.price }}</del>
          </p>
        </van-grid-item>
      </van-grid>
    </div>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, inject, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const $API = inject("$API");
    const searchVal = ref("");
    const homeData = ref({});
    const router = useRouter();

    function init() {
      $API.initData();
      $API.getHome().then((res) => {
        console.log(res);
        homeData.value = res.data[0];
      });
    }

    function onSearch() {
      console.log(searchVal.value);
      $API
        .searchGoods({ name: searchVal.value })
        .then((res) => {
          console.log(res);
        })
        .finally((_) => {
          console.log(_);
        });
    }

    function selGoods(goods) {
      console.log(goods);
      router.push({
        path: `/detail/${goods.goodsId}`,
      });
    }
    onMounted(() => {
      init();
    });
    return { searchVal, homeData, onSearch, selGoods };
  },
});
</script>

<style lang="less" scoped>
.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #697b5f;
  .bars {
    width: 30px;
    color: white;
    margin-left: 10px;
  }
  .search {
    flex: 1;
  }
}
.my-swipe {
  .van-swipe-item {
    text-align: center;
    img {
      height: 200px;
    }
  }
}

.category-box {
  .van-image {
    display: flex;
    // justify-content: center;
    flex-direction: column;
    align-items: center;
    &:deep(img) {
      width: 50px;
    }
    span {
      font-size: 10px;
    }
  }
}

.recommend-box {
  margin-bottom: 50px;
  .title {
    margin: 10px;
  }
  .goods-name {
    width: 100%;
    text-align: left;
    line-height: 20px;
    height: 40px;
    font-size: 10px;
    color: #666;
    margin-bottom: 0;
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
</style>
