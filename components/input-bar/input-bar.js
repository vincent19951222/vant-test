Component({
  properties: {},
  data: {
    inputValue: '',
    keyboardHeight: 0
  },
  methods: {
    onInput(e) {
      this.setData({ inputValue: e.detail.value })
    },
    onKeyboardHeightChange(e) {
      const { height } = e.detail
      // When keyboard opens, height > 0. When closed, height = 0.
      this.setData({ keyboardHeight: height })
    },
    onSend() {
      if (!this.data.inputValue.trim()) return;
      this.triggerEvent('send', { content: this.data.inputValue });
      this.setData({ inputValue: '' });
    },
    onQuickAction(e) {
      const text = e.currentTarget.dataset.text;
      this.triggerEvent('send', { content: text });
    }
  }
})