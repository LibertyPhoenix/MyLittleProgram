// pages/CourseHistoryMode/index.js
const teacherListUrl = require('../../config').teacherListUrl
const picHost = require('../../config').picHost
var pageNum = 1

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData();
  },

  loadData: function () {
    var self = this
    var teacherList
    wx.request({
      url: teacherListUrl,
      data: {
        platform: 'mobile',
        token: '9nP5TDjIS8N1gKPGeFXH8wHA5jonr8XO',
        selectedChildId: '7836',
        startTime: '1509724800',
        endTime: '1520416000',
        page: pageNum,
        pageSize: '10'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新

        console.log(res.data.data.rows)

        var data = pageNum === 1 ? res.data.data.rows : self.data.teacherList.concat(res.data.data.rows);

        var isNull = res.data.data.rows.size === 0

        self.setData({
          teacherList: data,
          picHost: picHost,
          isHideLoadMore: false,
          isNull: isNull

        });
      },
      fail: function (res) {

        wx.hideNavigationBarLoading() //完成停止加载
        wx.stopPullDownRefresh() //停止下拉刷新

        console.log(res)
      }
    })

  },
  // 点击item跳转到详情页
  onItemClick: function (e) {
    // console.log(this.data.teacherList);
    // console.log(e.currentTarget.dataset.index);
    // 传参至下个页面 teacherId teacherName
    wx.navigateTo({
      url: 'TeacherInfo?teacherId=' + 
      this.data.teacherList[e.currentTarget.dataset.index].teacherId + 
      '&teacherName=' + 
      this.data.teacherList[e.currentTarget.dataset.index].abbrName +
      '&imgUrl=' + picHost +
      this.data.teacherList[e.currentTarget.dataset.index].avatar
    })

  },


  // 下拉刷新
  onPullDownRefresh: function () {
    wx.showNavigationBarLoading() //在标题栏中显示加载
    var self = this,
      pageNum = 1;

    //1.5秒后 加载数据
    setTimeout(function () {
      self.loadData();
    }, 1500);

  },
  // 加载更多
  onReachBottom: function () {
    pageNum = pageNum + 1;
    self = this,
      //1.5秒后 加载数据
      setTimeout(function () {
        self.setData({
          isHideLoadMore: true
        });
        self.loadData();
      }, 1500);
  }
})