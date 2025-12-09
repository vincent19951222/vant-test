const app = getApp()

Page({
  data: {
    messages: [
      {
        role: 'assistant',
        content: '👋 你好，我是你的智能办公助手\n我可以帮你处理文档、查询制度、撰写周报，或者回答任何关于公司业务的问题。'
      }
    ],
    scrollIntoView: ''
  },

  onLoad() {
    this.setData({
      search: this.search.bind(this)
    })
  },

  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  },

  search: function (value) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([{text: '搜索结果', value: 1}])
      }, 200)
    })
  },

  selectResult: function (e) {
    console.log('select result', e.detail)
  },

  onSend(e) {
    const content = e.detail.content;
    if (!content) return;

    const newMsg = { role: 'user', content };
    const messages = this.data.messages.concat([newMsg]);

    this.setData({
      messages,
      scrollIntoView: `msg-${messages.length - 1}`
    });

    // Mock AI Response
    setTimeout(() => {
      this.addAssistantMessage("好的，我已收到您的请求：\n" + content + "\n\n正在为您处理中...");
    }, 1000);
  },

  addAssistantMessage(content) {
    const newMsg = { role: 'assistant', content };
    const messages = this.data.messages.concat([newMsg]);
    this.setData({
      messages,
      scrollIntoView: `msg-${messages.length - 1}`
    });
  }
})