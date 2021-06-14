<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 23:14:04
 * @LastEditTime: 2021-06-14 20:19:02
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-h5/src/views/user/component/notLoggedIn.vue
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
        :rules="[
          { required: true, message: '请填写手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
        ]"
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
import { defineComponent, inject, reactive } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";
export default defineComponent({
  setup() {
    let router = useRouter();
    let $API = inject("$API");
    const state = reactive({
      tel: "",
      pwd: "",
    });

    function onSubmit(values) {
      values.type = "login";
      $API
        .loginAndRegister(values)
        .then((res) => {
          console.log(res, 876543);
          if (res.code == 400) Toast.fail(res.msg);

          if (res.code == 0) {
            Toast.success("登陆成功");
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("token", res.token);
            router.go(0);
          }
        })
        .catch((err) => {});
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
