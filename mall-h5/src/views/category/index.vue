<!--
 * @Author: 鲁遥
 * @Date: 2021-05-10 21:41:09
 * @LastEditTime: 2021-05-15 20:14:44
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/views/category/index.vue
-->


 <template>
  <div class="category">
    <van-tree-select
      v-if="categoryData[activeIndex]"
      v-model:main-active-index="activeIndex"
      height="calc(100vh - 50px)"
      :items="categoryData"
    >
      <template #content>
        <van-tabs
          v-model:active="activeMallSubId"
          swipeable
          swipe-threshold="3"
        >
          <van-tab
            v-for="(item, index) in categoryData[activeIndex].bxMallSubDto"
            :title="item.mallSubName"
            :name="item.mallSubId"
            :key="index"
          >
            <ul>
              <li
                @click="selGoods(good)"
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
            </ul>
          </van-tab>
        </van-tabs>
      </template>
    </van-tree-select>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, onMounted, ref, watch } from "vue";
import { Router, useRouter } from "vue-router";

export default defineComponent({
  setup() {
    const activeIndex = ref(0);
    const activeMallSubId = ref("");
    const $API = inject("$API");
    const categoryData = ref([]);
    const goodsData = ref([]);
    const router: Router = useRouter();
    console.log(router);

    watch(activeMallSubId, (val, oldval) => {
      getGoods(val);
    });

    function selGoods(goods) {
      console.log(goods);
      router.push({
        path: `/detail/${goods.id}`,
      });
    }
    function getGoods(id) {
      $API.getGoods({ mallSubId: id }).then((res) => {
        goodsData.value = res.data;
      });
    }
    function init() {
      $API.getHome().then((res: { data: { category: any[] }[] }) => {
        res.data[0].category.forEach((item) => {
          item.text = item.mallCategoryName;
        });
        categoryData.value = res.data[0].category;
        // console.log(categoryData.value, " categoryData.value");
      });
    }

    onMounted(() => {
      init();
    });
    return {
      activeIndex,
      categoryData,
      activeMallSubId,
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

// .category {
//   margin-bottom: 50px;
// }
</style>
