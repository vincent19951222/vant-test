Component({
  data: {
    selected: 0,
    color: "#94a3b8",
    selectedColor: "#1890ff",
    list: [{
      pagePath: "/pages/index/index",
      text: "问答",
      iconPath: "/assets/chat.svg",
      selectedIconPath: "/assets/chat-active.svg"
    }, {
      pagePath: "/pages/knowledge/knowledge",
      text: "知识库",
      iconPath: "/assets/book.svg",
      selectedIconPath: "/assets/book-active.svg"
    }, {
      pagePath: "/pages/profile/profile",
      text: "我的",
      iconPath: "/assets/user.svg",
      selectedIconPath: "/assets/user-active.svg"
    }]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
    }
  }
})