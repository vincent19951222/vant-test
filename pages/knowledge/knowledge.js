Page({
  data: {
    categories: [
      { icon: 'friends-o', name: '人事行政', color: '#3b82f6', bg: '#eff6ff' },
      { icon: 'desktop-o', name: 'IT服务', color: '#4f46e5', bg: '#eef2ff' },
      { icon: 'balance-o', name: '财务报销', color: '#f97316', bg: '#fff7ed' },
      { icon: 'orders-o', name: '规章制度', color: '#10b981', bg: '#ecfdf5' }
    ],
    recommendedDocs: [
      { 
        title: '2025年员工手册 v2.0', 
        meta: '更新于 3天前 • 人力资源部', 
        isNew: true, 
        icon: 'orders-o',
        color: '#3b82f6',
        bg: '#dbeafe'
      },
      { 
        title: '信息安全合规指南', 
        meta: '更新于 1周前 • IT安全部', 
        isNew: false, 
        icon: 'shield-o',
        color: '#16a34a',
        bg: '#dcfce7'
      }
    ],
    faqList: [
      {
        id: 1,
        question: '如何申请VPN远程访问？',
        meta: 'IT服务 • 1234次阅读',
        rankColor: '#fb923c'
      },
      {
        id: 2,
        question: '加班餐补报销标准是什么？',
        meta: '财务报销 • 890次阅读',
        rankColor: '#cbd5e1'
      },
      {
        id: 3,
        question: '年终绩效考核什么时候开始？',
        meta: '人事行政 • 650次阅读',
        rankColor: '#cbd5e1'
      }
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

  onSearch(e) {
    console.log('Search:', e.detail)
  },

  onViewAll() {
    wx.showToast({
      title: '查看全部',
      icon: 'none'
    })
  }
})
