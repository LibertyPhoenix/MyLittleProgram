Page({

  data: {
    imgUrls: [
      {
        id: 0,
        url: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        pagePath: "pages/JokeMode/index",
      },
      {
        id: 1,
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        pagePath: "pages/TeacherMode/index",
      },

      {
        id: 2,
        url: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        pagePath: "pages/MyMode/index",
      }
    ],

    musicUrls: [
      {
        id: 0,
        poster: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        name: '追光者',
        author: '岑宁儿',
        src: 'http://url.mcvmc.com/kuwo.php/25243084.mp3',
      },
      {
        id: 1,
        poster: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        name: '演员',
        author: '薛之谦',
        src: 'http://url.mcvmc.com/kuwo.php/6449273.mp3',
      },

      {
        id: 2,
        poster: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
        name: '一人饮酒醉',
        author: '高迪',
        src: 'http://url.mcvmc.com/kuwo.php/6536447.mp3',
      }
    ],

    indicatorDots: true,
    vertical: true,
    autoplay: true,
    interval: 2000,
    duration: 500,
    circular: true,
  },
  onLoad: function (options) {
    var self = this;
    wx.getSystemInfo({
      success: function (res) {
        self.setData({
          sysWidth: res.screenWidth
        });
        console.log(self.data.sysWidth);
        console.log(res.screenWidth);
      },
    })
  },

  // 根据swiper图片，点击跳转到详情页面
  onSwiperClick: function (event) {
    console.log(event);
    console.log(event.target.dataset.postId);
    // 切换tabbar
    wx.switchTab({
      url: "/" + event.target.dataset.postId,
    })
  },

  // 音乐列表点击监听，跳转到音乐详情页
  onMusicItemClick: function (event) {
    console.log(event);
    // 跳转到新页面
    wx.navigateTo({
      url: "musicInfo?id=" + event.currentTarget.dataset.index
      + "&poster=" + this.data.musicUrls[event.currentTarget.dataset.index].poster
      + "&name=" + this.data.musicUrls[event.currentTarget.dataset.index].name
      + "&author=" + this.data.musicUrls[event.currentTarget.dataset.index].author
      + "&src=" + this.data.musicUrls[event.currentTarget.dataset.index].src
    })
  },

  //视频列表点击监听，跳转到视频详情页
  onVideoItemClick: function (event) {
    console.log(event);
    // 跳转到新页面
    wx.navigateTo({
      url: "videoInfo?id=" + event.currentTarget.dataset.index
      + "&poster=" + this.data.musicUrls[event.currentTarget.dataset.index].poster
      + "&name=" + this.data.musicUrls[event.currentTarget.dataset.index].name
      + "&author=" + this.data.musicUrls[event.currentTarget.dataset.index].author
      + "&src=" + this.data.musicUrls[event.currentTarget.dataset.index].src
    })
  }



})