//app.js
App({
  
  onLaunch: function () {
    const _thisBind = this;
    wx.login({
      complete: (res) => {},
      success: (res)=> {
        if (res.code) {
          _thisBind.authCode = res.code;
          wx.getUserInfo({
            complete: (res) => {
              console.info(res, 'getUserInfo');
            },
            success: (res)=> {
              console.info('success')
            }
          })
          // wx.getSetting({//得到接口授权信息
          //   complete: (res) => {},
          //   success: (res)=> {
          //     console.log(res,'getSetting')
          //   }
          // });
        }
      },
      fail: (err)=> {
        wx.showToast({
          title: '没有拿到auth code!',
          icon: 'none',
          duration: 3000
        });
      }
    });
    
    
    
  },
  globalData:  {//全局
  }
});
