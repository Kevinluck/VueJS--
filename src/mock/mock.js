import Mock from 'mockjs';

Mock.mock(/getNewsList/, [
    {
      title: '91助手',
      url: 'http://weixin.com'
    },
    {
      title: '产品助手',
      url: 'http://twitter.com',
      hot: true
    },
    {
      title: '智能地图',
      url: 'http://maps.com'
    },
    {
      title: '团队语音',
      url: 'http://phone.com'
    }
]);

Mock.mock(/getSlideList/, [
  {
    src: require('../assets/slideShow/pic1.jpg'),
    title: 'xxx1',
    href: 'detail/analysis'
  },
  {
    src: require('../assets/slideShow/pic2.jpg'),
    title: 'xxx2',
    href: 'detail/count'
  },
  {
    src: require('../assets/slideShow/pic3.jpg'),
    title: 'xxx3',
    href: 'detail/publish'
  },
  {
    src: require('../assets/slideShow/pic4.jpg'),
    title: 'xxx4',
    href: 'detail/forecast'
  }
]);

Mock.mock(/login/, {
  username: 'Tim',
  userId: '123321'
});

Mock.mock(/register/, {
  status: 1
});

Mock.mock(/productList/, [
  {
    name: '数据统计',
    path: 'count',
    icon: require('../assets/images/1.png'),
    active: false
  },
  {
    name: '数据预测',
    path: 'forecast',
    active: false
  },
  {
    name: '流量分析',
    path: 'analysis',
    active: false
  },
  {
    name: '广告发布',
    path: 'publish',
    active: false
  }
]);

Mock.mock(/getPrice/, {
  amount: 888
});

Mock.mock(/getBankInfo/, [
  {
    id: 201,
    label: '招商银行',
    name: 'zhaoshang'
  },
  {
    id: 301,
    label: '中国建设银行',
    name: 'jianshe'
  },
  {
    id: 601,
    label: '浦发银行',
    name: 'pufa'
  },
  {
    id: 1101,
    label: '交通银行',
    name: 'jiaotong'
  },
  {
    id: 101,
    label: '中国工商银行',
    name: 'gongshang'
  },
  {
    id: 401,
    label: '中国农业银行',
    name: 'nongye'
  },
  {
    id: 1201,
    label: '中国银行',
    name: 'zhongguo'
  },
  {
    id: 501,
    label: '中信银行',
    name: 'zhongxin'
  }
]);

Mock.mock(/createOrder/, {
  orderId: '78098sfsaf'
});

Mock.mock(/checkOrder/, {});

Mock.mock(/getOrderList/, [
  {
    "orderId": "ddj123",
    "product": "数据统计",
    "version": "高级版",
    "period": "1年",
    "buyNum": 2,
    "date": "2016-10-10",
    "amount": "500元"
  },
  {
    "orderId": "yuj583",
    "product": "流量分析",
    "version": "户外版",
    "period": "3个月",
    "buyNum": 1,
    "date": "2016-5-2",
    "amount": "2200元"
  },
  {
    "orderId": "pmd201",
    "product": "广告发布",
    "version": "商铺版",
    "period": "3年",
    "buyNum": 12,
    "date": "2016-8-3",
    "amount": "7890元"
  }
]);

/*Mock.mock('/getBuyTypes/', [
    {
      label: '入门版',
      value: 0
    },
    {
      label: '中级版',
      value: 1
    },
    {
      label: '高级版',
      value: 2
    }
]);*/
