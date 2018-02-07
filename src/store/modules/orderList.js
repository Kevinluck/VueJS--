import axios from 'axios';

const state = {
  orderList: [],
  params: {}
};

const getters = {
  /*getOrderList: function (state) {
    return state.orderList;
  }*/
  getOrderList: state => state.orderList
};

const actions = {
  fetchOrderList ({ commit, state }) {
    axios.post('api/getOrderList', state.params)
      .then(res => {
        commit('updateOrderList', res.data);
      })
      .catch(error => {
        console.log(error);
      })
  }
};

const mutations = {
  updateOrderList (state, list) {
    state.orderList = list;
  },
  // 解构赋值
  updateParams (state, {key, val}) {
    state.params[key] = val;
    //console.log(state.params);
  }
  /*updateParams (state, obj) {
    state.params[obj.key] = obj.value;
  }*/
};


export default {
  state,
  getters,
  actions,
  mutations
}
