<template>
  <div>
    <status-dialog :is-show="isShowCheckDlg" @on-close="closeCheckDialog">
      请检查你的支付状态！
      <div class="button" @click="closeCheckDialog">
        支付成功
      </div>
      <div class="button" @click="closeCheckDialog">
        支付失败
      </div>
    </status-dialog>
    <status-dialog :is-show="isShowSuccessDlg" @on-close="toOrderList('success')">
      购买成功！
    </status-dialog>
    <status-dialog :is-show="isShowFailedDlg" @on-close="toOrderList('failed')">
      购买失败！
    </status-dialog>
  </div>
</template>

<script>
import Dialog from './base/dialog';
import axios from 'axios';
export default {
  components: {
    statusDialog: Dialog
  },
  props: {
    orderId: null,
    isShowCheckDlg: {
      type: Boolean,
      default: false
    }
    /*isShowSuccessDlg: {
      type: Boolean,
      default: false
    },
    isShowFailedDlg: {
      type: Boolean,
      default: false
    }*/
  },
  data () {
    return {
      isShowSuccessDlg: false,
      isShowFailedDlg: false
    }
  },
  methods: {
    closeCheckDialog () {
      axios.post('api/checkOrder', {
        orderId: this.orderId
      })
        .then(() => {
          this.isShowSuccessDlg = true;
          this.$emit('on-close-check-dlg');
        })
        .catch(error => {
          this.isShowFailedDlg = true;
          this.$emit('on-close-check-dlg');
        });
    },
    toOrderList (status) {
      if (status === 'success') {
        this.isShowSuccessDlg = false;
      } else if (status === 'failed') {
        this.isShowFailedDlg = false;
      }
      this.$router.push({path: '/orderList'});
    }
  }
}
</script>

<style scoped>

</style>
