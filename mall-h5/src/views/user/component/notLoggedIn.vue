<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 23:14:04
 * @LastEditTime: 2021-05-30 22:25:20
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /zhil-mall/mall-h5/src/views/user/component/notLoggedIn.vue
-->

<template>
  <div class="not-loggend-in">
    <van-nav-bar @click-left="router.go(-1)" title="" left-arrow />
    <van-row class="user-portrait" justify="center">
      <van-image
        round
        width="100px"
        height="100px"
        src="https://img.yzcdn.cn/vant/cat.jpeg"
      />
      <p class="title">知了，更懂你</p>
    </van-row>

    <van-form class="user-info" @submit="onSubmit">
      <van-field
        v-model="state.tel"
        name="tel"
        type="tel"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />

      <!-- <van-field
        v-model="state.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      /> -->
      <van-field
        v-model="state.pwd"
        type="password"
        name="pwd"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 26px 0">
        <van-button block type="primary" native-type="submit">
          登 陆
        </van-button>
      </div>
    </van-form>

    <router-link class="register" to="/register">去注册</router-link>
  </div>
</template>
<script lang="ts">
import Vue, { defineComponent, inject, reactive } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  setup() {
    let router = useRouter();
    let $API = inject("$API");
    const state = reactive({
      tel: "",
      pwd: "",
    });

    function onSubmit(values) {
      console.log("submit", values);
      $API
        .register(values)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
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
.not-loggend-in {
  .user-portrait {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;

    .title {
      margin: 10px;
    }
  }
  .user-info {
    margin: auto;
    width: 90vw;
  }

  .register {
    float: right;
    margin-right: 5vw;
    font-size: 14px;
    color: red;
    border-bottom: 1px solid red;
  }
}
</style>
