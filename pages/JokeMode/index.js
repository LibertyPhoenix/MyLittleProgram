// pages/CourseListMode/index.js
const jokeUrl = require('../../config').jokeUrl
var pageNum = 1

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  onLoad: function (options) {
    var self = this
    wx.request({
      url: jokeUrl,
      data: {
        page: pageNum,
        pagesize: '5',
        sort: 'asc',
        time: '1410000537',
        key: '89822028bcf5fa05d0d74949a8ab3e10'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        self.setData({
          jokeList: res.data.result.data
        });
      },
      fail: function (res) {
        console.log(res)
      }
    })
  },

  //滚动到底部触发事件  
  ScrollToBottom: function (e) {
    pageNum = pageNum + 1;
    var self = this
    wx.request({
      url: jokeUrl,
      data: {
        page: pageNum,
        pagesize: '10',
        sort: 'asc',
        time: '1410000537',
        key: '89822028bcf5fa05d0d74949a8ab3e10'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        var jokeList = self.data.jokeList.concat(res.data.result.data);  
        self.setData({
          jokeList: jokeList
        });
      },
      fail: function (res) {
        console.log(res)
      }
    })
    
  }

})
