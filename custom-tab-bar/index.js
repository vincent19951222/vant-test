Component({
  data: {
    active: 'index'
  },
  methods: {
    onChange(event) {
      this.setData({ active: event.detail });
      wx.switchTab({
        url: `/pages/${event.detail}/${event.detail}`,
      });
    },
    init() {
      const page = getCurrentPages().pop();
      const route = page ? page.route.split('/')[1] : 'index';
      this.setData({ active: route });
    }
  }
});
