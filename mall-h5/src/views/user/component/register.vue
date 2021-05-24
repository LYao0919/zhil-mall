<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 23:50:31
 * @LastEditTime: 2021-05-16 00:10:28
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall/mall-h5/src/views/user/component/register.vue
-->
<template>
  <div class="register">
    <van-nav-bar
      @click-left="router.go(-1)"
      title="用户注册"
      left-text=""
      left-arrow
    />
    <van-form class="user-info" @submit="onSubmit">
      <van-field
        v-model="state.tel"
        type="tel"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="state.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 26px 0">
        <van-button block type="primary" native-type="submit">
          注 册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, reactive } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";

export default defineComponent({
  components: {
    [Toast.name]: Toast,
  },
  setup() {
    let router = useRouter();
    const state = reactive({
      username: "",
      tel: "",
      password: "",
    });

    function onSubmit(values) {
      console.log("submit", values);
      Toast.success("注册成功");
    }

    return {
      state,
      router,
      onSubmit,
    };
  },
});
</script>
<style lang="less" scoped>
.register {
  .title {
    margin: 10px;
  }
  .user-info {
    width: 90vw;
    margin: 50px auto auto auto;
  }
}
</style>