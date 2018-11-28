// 显示正在加载
export function showLoading(message = '正在加载...') {
  wx.showLoading({
    title: message,
    mask: true
  })
}

// 隐藏正在加载
export function hideLoading() {
  wx.hideLoading()
}

// 显示 toast 信息
export function showToast(message) {
  wx.showToast({
    title: message,
    icon: 'none',
    duration: 2000
  })
}

// 货币格式化, 处理成有逗号的风格
export function formatCurrency(amountStr) {
  try {
    const amountArr = amountStr.split('.')
    if (amountArr[1]) {
      amountArr[0] = amountArr[0].replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
      return amountArr.join('.')
    }
    amountArr[0] = amountArr[0].replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,')
    return amountArr[0]
  } catch (e) {
    console.log(e)
  }
}
