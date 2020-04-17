//index.js
const productList  = require('../../utils/product-list.js');
const app = getApp();


Page({
  data: {
    background: ['/images/banner1.jpg', '/images/banner2.png', '/images/banner3.jpg'],
    indicatorDots: false,
    vertical: false,
    autoplay: true,
    circular: false,
    interval: 5000,
    duration: 1000,
    previousMargin: 0,
    nextMargin: 0,
    todayDate: null,
    productList: [],
    authCode: ''
  },

  onLoad: function() {
    const date = new Date();
    const todayDate= date.toLocaleDateString();
    
    console.log(app, 'authCode');
    
    this.setData({todayDate, productList: [...productList], authCode: app.authCode});
  },
  gotoKnowledge: function() {
    wx.navigateTo({
      url: '/pages/knowledge/knowledge'
    })
  }

})
