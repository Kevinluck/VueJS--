<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text"
                 v-model="userName"
                 placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userError.errorMsg }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password"
                 v-model="password"
                 placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ pwdError.pwdErrorMsg }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="login">登录</a>
        </div>
      </div>
      <p>{{ errorTip }}</p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        userName: '',
        password: '',
        errorTip: ''
      }
    },
    computed: {
      userError () {
        let status;
        let errorMsg;

        if (!this.userName) {
          status = false;
          errorMsg = '用户名不能为空!';
        } else if (!/@/g.test(this.userName)) {
          status = false;
          errorMsg = '请输入正确的用户名!';
        } else {
          status = true;
          errorMsg = '';
        }
        // 防止第一次进入页面错误提示显示
        if (!this.userFlag) {
          errorMsg = '';
          this.userFlag = true;
        }
        return {
          status,
          errorMsg,
        }
      },
      pwdError () {
        let pwdStatus;
        let pwdErrorMsg;

        if (!this.password) {
          pwdStatus = false;
          pwdErrorMsg = '密码不能为空!';
        } else if (this.password.length < 6) {
          pwdStatus = false;
          pwdErrorMsg = '密码长度不能小于6位!';
        } else {
          pwdStatus = true;
          pwdErrorMsg = ''
        }
        if (!this.pwdFlag) {
          pwdErrorMsg = '';
          this.pwdFlag = true;
        }
        return {
          pwdStatus,
          pwdErrorMsg
        }
      }
    },
    methods: {
      login () {
        if (!this.userError.status || !this.pwdError.pwdStatus) {
          this.errorTip = '用户名或密码有误!';
          return;
        }
        axios.get('api/login')
          .then(res => {
            console.log(res);
            this.$emit('login-success', res.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    }
  }
</script>

<style>

</style>
