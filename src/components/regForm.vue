<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input">
          <input type="text"
                 v-model="username"
                 placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userError.errorMsg }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input">
          <input type="text"
                 v-model="password"
                 placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ pwdError.pwdErrorMsg }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label"></span>
        <div class="g-form-input">
          <input type="text"
                 v-model="verifyPassword"
                 placeholder="请输入确认密码">
        </div>
        <span class="g-form-error">{{ verifyPwdError.verifyPwdErrorMsg }}</span>
      </div>
      <p>{{ errorTip }}</p>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="userRegister">注册</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  export default {
    data () {
      return {
        username: '',
        password: '',
        verifyPassword: '',
        errorTip: ''
      }
    },
    computed: {
      userError () {
        let status;
        let errorMsg;
        if (!this.username) {
          status = false;
          errorMsg = '用户名不能为空!';
        } else {
          status = true;
          errorMsg = '';
        }
        if (!this.usernameFlag) {
          errorMsg = '';
          this.usernameFlag = true;
        }
        return {
          status,
          errorMsg
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
          pwdErrorMsg = '';
        }
        if (!this.pwdFlag) {
          pwdErrorMsg = '';
          this.pwdFlag = true;
        }
        return {
          pwdStatus,
          pwdErrorMsg
        }
      },
      verifyPwdError () {
        let verifyPwdStatus;
        let verifyPwdErrorMsg;
        if (!this.verifyPassword) {
          verifyPwdStatus = false;
          verifyPwdErrorMsg = '确认密码不能为空!';
        } else if (this.verifyPassword !== this.password) {
          verifyPwdStatus = false;
          verifyPwdErrorMsg = '两次密码不一致!';
        } else {
          verifyPwdStatus = true;
          verifyPwdErrorMsg = '';
        }
        if (!this.verifyPwdFlag) {
          verifyPwdErrorMsg = '';
          this.verifyPwdFlag = true;
        }
        return {
          verifyPwdStatus,
          verifyPwdErrorMsg
        }
      }
    },
    methods: {
      userRegister () {
        if (!this.userError.status || !this.pwdError.pwdStatus || !this.verifyPwdError.verifyPwdStatus) {
          this.errorTip = '输入的信息有误!';
          return;
        }
        axios.post('api/login', {
          username: this.username,
          password: this.password,
          verifyPassword: this.verifyPassword
        })
          .then(res => {
            this.$emit('register-success');
          })
          .catch(error => {
            this.$emit('register-failed');
          });
      }
    }
  }
</script>

<style scoped>
  .dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
  }
  .dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
  }
  .dialog-close:hover {
    color: #4fc08d;
  }
</style>
