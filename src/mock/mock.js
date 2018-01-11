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
    href: 'http://xxx.xxx.com'
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


