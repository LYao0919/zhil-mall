<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 21:27:14
 * @LastEditTime: 2021-05-15 21:35:28
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/views/user/component/unregistered.vue
-->
<template>
  <div class="unregistered">
    <van-address-edit
      :area-list="areaList"
      show-postal
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, ref } from "vue";
import { areaList } from "@vant/area-data";

export default defineComponent({
  setup() {
    const searchResult = ref([]);

    function onSave() {}
    function onDelete() {}
    function onChangeDetail(val) {
      if (val) {
        searchResult.value = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        searchResult.value = [];
      }
    }

    return {
      onSave,
      onDelete,
      areaList,
      searchResult,
      onChangeDetail,
    };
  },
});
</script>
