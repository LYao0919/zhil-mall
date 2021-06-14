<!--
 * @Author: 鲁遥
 * @Date: 2021-05-15 23:50:31
 * @LastEditTime: 2021-06-14 13:46:22
 * @LastEditors: your name
 * @Description: 
 * @FilePath: /mall-h5/src/views/user/component/register.vue
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
        name="tel"
        label="手机号"
        placeholder="手机号"
        :rules="[
          { required: true, message: '请填写手机号' },
          { pattern: /^1[3456789]\d{9}$/, message: '手机号码格式错误！' },
        ]"
      />

      <van-field
        v-model="state.name"
        name="name"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
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
          注 册
        </van-button>
      </div>
    </van-form>
  </div>
</template>
<script lang="ts">
import { defineComponent, inject, reactive } from "vue";
import { useRouter } from "vue-router";
import { Toast } from "vant";

export default defineComponent({
  components: {
    [Toast.name]: Toast,
  },
  setup() {
    let router = useRouter();
    const $API = inject("$API");
    const state = reactive({
      name: "",
      tel: "",
      pwd: "",
    });

    function onSubmit(values) {
      values.type = "register";
      $API
        .loginAndRegister(values)
        .then((res) => {
          if (res.code == 400) Toast.fail(res.msg);
          if (res.code == 0) {
            Toast.success("登陆成功");
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("token", res.token);
          }
          router.go(-1);
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