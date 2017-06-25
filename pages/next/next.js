// next.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    next_txt: 'next_page',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://japi.juhe.cn/joke/content/list.from', //仅为示例，并非真实的接口地址
      // data: {
      //   sort: 'desc',
      //   page: 1,
      //   pagesize: 10,
      //   time: '1498389614',
      //   key: '89822028bcf5fa05d0d74949a8ab3e10'
      // },
   data:'key=89822028bcf5fa05d0d74949a8ab3e10&page=2&pagesize=10&sort=asc&time=1418745237',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        next_txt: 'success'
      }
    })
  }

},

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})