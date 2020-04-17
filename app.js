//app.js
App({
  
  onLaunch: function () {
    const _thisBind = this;
    wx.login({
      complete: (res) => {},
      success: (res)=> {
        if (res.code) {
          _thisBind.authCode = res.code;
          wx.getSetting({
            complete: (res) => {},
            success: (res)=> {
              if (res.authSetting['scope.userInfo']) {
                wx.getUserInfo({
                  success: (res)=> {
                    console.info(res)
                  }
                });
              }
            }
          });
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
