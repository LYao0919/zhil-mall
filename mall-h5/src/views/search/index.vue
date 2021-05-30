<!--
 * @Author: 鲁遥
 * @Date: 2021-05-24 20:41:48
 * @LastEditTime: 2021-05-30 19:15:26
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /zhil-mall/mall-h5/src/views/search/index.vue
-->
<template>
  <div class="search">
    <van-search
      class="search"
      shape="round"
      v-model="searchVal"
      background="#697b5f"
      placeholder="请输入搜索关键词"
      @search="onSearch"
    />

    <ul>
      <li
        @click="selGoods(good)"
        v-if="goodsData.length > 0"
        class="good"
        v-for="(good, ind) in goodsData"
        :key="ind"
      >
        <img :src="good.image" alt="" />
        <div>
          <p class="goods-name">{{ good.name }}</p>
          <p class="price">
            <span class="mall-price"> ¥ {{ good.present_price }}</span>
            &nbsp;
            <del class="price">{{ good.orl_price }}</del>
          </p>
        </div>
      </li>
      <li v-else>
        <van-empty description="暂无数据" />
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Search",
  setup() {
    let searchVal = ref("");
    const $API = inject("$API");
    const goodsData = ref([]);
    const router = useRouter();

    function selGoods(goods) {
      console.log(goods);
      router.push({
        path: `/detail/${goods.id}`,
      });
    }
    function onSearch() {
      searchVal.value &&
        $API
          .searchGoods({ name: searchVal.value })
          .then((res: { data: any[] }) => {
            goodsData.value = res.data;
          })
          .finally((_: any) => {
            console.log(_);
          });
    }

    return {
      onSearch,
      searchVal,
      goodsData,
      selGoods,
    };
  },
});
</script>
<style lang="less" scoped>
li.good {
  overflow: hidden;
  padding: 10px;
  img {
    border: 1px solid #ebedf0;
    float: left;
    width: 30%;
    margin-right: 10px;
  }
  div {
    overflow: hidden;
  }
}

.goods-name {
  width: 100%;
  text-align: left;
  line-height: 20px;
  height: 40px;
  font-size: 10px;
  color: #666;
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
</style>
