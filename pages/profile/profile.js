Page({
  data: {
    userInfo: {
      name: '张三',
      role: '产品研发部 • 高级设计师',
      avatar: '' // Placeholder
    },
    stats: {
      history: 128,
      favorites: 12
    },
    menuItems: [
      { icon: 'bell', title: '消息通知', url: '' },
      { icon: 'setting-o', title: '通用设置', url: '' },
      { icon: 'question-o', title: '帮助与反馈', url: '' }
    ]
  },

  onLoad() {
    //
  },

  onShow() {
    if (this.getTabBar && this.getTabBar()) {
      this.getTabBar().init()
    }
  },

  onAvatarError() {
    this.setData({
      'userInfo.avatar': ''
    })
  },

  onMenuClick(e) {
    const { title } = e.currentTarget.dataset
    wx.showToast({
      title: `点击了${title}`,
      icon: 'none'
    })
  },

  onLogout() {
    wx.showModal({
      title: '提示',
      content: '确定要退出登录吗？',
      success(res) {
        if (res.confirm) {
          wx.showToast({
            title: '已退出',
            icon: 'none'
          })
        }
      }
    })
  }
})
