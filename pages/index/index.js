const app = getApp()

Page({
  data: {
    messages: [
      {
        type: 'bot',
        content: '👋 你好，我是你的智能办公助手\n我可以帮你处理文档、查询制度、撰写周报，或者回答任何关于公司业务的问题。',
        isWelcome: true,
        suggestions: [
          { category: '人事', text: '年假怎么算？' },
          { category: '财务', text: '报销流程' }
        ]
      },
      {
        type: 'time',
        content: '今天 10:23'
      },
      {
        type: 'user',
        content: '帮我生成一份关于上季度市场推广活动的总结周报，重点突出ROI提升。'
      },
      {
        type: 'bot',
        content: '好的，已为您生成 Q3 市场推广总结草稿：\n• **核心指标**：总投入 ¥50W，带来线索 1,200 条。\n• **ROI 表现**：相比 Q2 提升了 15%，主要得益于精准渠道投放。\n• **亮点项目**：企业数字化转型白皮书下载量突破新高。\n您可以直接复制使用，或告诉我需要补充哪些细节。',
        isRich: true
      }
    ],
    inputValue: '',
    quickActions: [
      { icon: 'sparkles', text: '润色周报', color: '#1890ff' },
      { icon: 'description', text: '差旅制度', color: '#64748b' },
      { icon: 'calender', text: '会议室预定', color: '#64748b' },
      { icon: 'chart-trending-o', text: '数据分析', color: '#64748b' }
    ],
    safeAreaBottom: 0
  },

  onLoad() {
    const { safeArea } = wx.getWindowInfo()
    this.setData({
      safeAreaBottom: (wx.getWindowInfo().screenHeight - safeArea.bottom) || 0
    })
  },

  onShow() {
    this.getTabBar().init()
  },

  onInput(e) {
    this.setData({
      inputValue: e.detail.value
    })
  },

  onSend() {
    if (!this.data.inputValue.trim()) return
    
    const newMessage = {
      type: 'user',
      content: this.data.inputValue
    }

    this.setData({
      messages: [...this.data.messages, newMessage],
      inputValue: ''
    })

    // Simulate bot response
    setTimeout(() => {
      this.setData({
        messages: [...this.data.messages, {
          type: 'bot',
          content: '收到您的消息。这是一个演示回复。'
        }]
      })
    }, 1000)
  },

  onQuickAction(e) {
    const action = e.currentTarget.dataset.action
    this.setData({
      inputValue: action
    })
  }
})
