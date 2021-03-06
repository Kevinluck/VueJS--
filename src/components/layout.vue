<template>
  <div @click="resetComponent">
    <div class="app-head">
      <div class="app-head-inner">
        <router-link :to="{path: '/'}">
          <img src="../assets/logo.png">
        </router-link>
        <div class="head-nav">
          <ul class="nav-list">
            <li>{{ username }}</li>
            <li v-if="username === ''" @click="showLogDialog">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username === ''" @click="showRegDialog">注册</li>
            <li v-if="username !== ''" @click="showLogoutDialog">退出</li>
            <li class="nav-pile">|</li>
            <li @click="showAboutDialog">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="app-content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <pb-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>about</p>
    </pb-dialog>
    <pb-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form @register-success="registerSuccess" @register-failed="registerFailed"></reg-form>
    </pb-dialog>
    <pb-dialog :is-show="isShowRegSuccess" @on-close="closeDialog('isShowRegSuccess')">
      注册成功!
    </pb-dialog>
    <pb-dialog :is-show="isShowRegFailed" @on-close="closeDialog('isShowRegFailed')">
      注册失败!
    </pb-dialog>
    <pb-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @login-success="loginSuccess"></log-form>
    </pb-dialog>
    <pb-dialog :is-show="isShowLogoutDialog" @on-close="closeDialog('isShowLogoutDialog')">
      <p>是否确认退出？</p>
      <p>
        <a class="button" @click="defineLogout">确定</a>
        <a class="button" @click="cancelLogout">取消</a>
      </p>
    </pb-dialog>
  </div>
</template>

<script>
import Dialog from './base/dialog';
import LogForm from './logForm';
import RegForm from './regForm';
import { eventBus } from '../eventBus';
export default {
  components: {
    PbDialog: Dialog,
    LogForm,
    RegForm,
  },
  data () {
    return {
      isShowAboutDialog: false,
      isShowRegDialog: false,
      isShowLogDialog: false,
      isShowRegSuccess: false,
      isShowRegFailed: false,
      isShowLogoutDialog: false,
      username: '',
    }
  },
  mounted () {
    if (this.$session.get('username')) {
      this.username = this.$session.get('username');
    }
  },
  methods: {
    closeDialog (attr) {
      this[attr] = false;
    },
    showAboutDialog () {
      this.isShowAboutDialog = true;
    },
    showRegDialog () {
      this.isShowRegDialog = true;
    },
    showLogDialog () {
      this.isShowLogDialog = true;
    },
    loginSuccess (data) {
      this.closeDialog('isShowLogDialog');
      this.username = data.username;
    },
    registerSuccess () {
      this.closeDialog('isShowRegDialog');
      this.isShowRegSuccess = true;
    },
    registerFailed () {
      this.closeDialog('isShowRegDialog');
      this.isShowRegFailed = true;
    },
    resetComponent () {
      eventBus.$emit('reset-component');
    },
    showLogoutDialog () {
      this.isShowLogoutDialog = true;
    },
    defineLogout () {
      this.isShowLogoutDialog = false;
      this.$session.remove('username');
      this.username = '';
      this.$router.push('/');
    },
    cancelLogout () {
      this.isShowLogoutDialog = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  body {
    background: #f0f2f5;
    font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    font-size: 14px;
    color: #444;
  }
  .app-head {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }
  .app-head-inner {
    width: 1200px;
    margin: 0 auto;
  }
  .head-logo {
    float: left;
  }
  .app-head-inner img {
    width: 50px;
    margin-top: 20px;
  }
  .head-nav {
    float: right;
  }
  .head-nav ul {
    overflow: hidden;
  }
  .head-nav li {
    cursor: pointer;
    float: left;
  }
  .nav-pile {
    padding: 0 10px;
  }
  .app-foot {
    text-align: center;
    height: 80px;
    width: 100%;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }
  .container {
    width: 1200px;
    margin: 0 auto;
  }
  .hr {
    height: 1px;
    width: 100%;
    background: #ddd;
  }
  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }
  .button:hover {
    background: #4fc08d;
  }
  .g-form {

  }
  .g-form-line {
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input {
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px;
  }
  .g-form-error {
    color: red;
    padding-left: 15px;
  }
</style>
