import wepy from 'wepy'
import rxwx from 'rxjs6-wx'
import { operators } from 'rxjs6-wx/rx'

export default class ApiService {
  // 获取币种列表
  getCurrencies() {
    return rxwx.Rx.of([
      {
        name: '人民币',
        code: 'CNY'
      },
      {
        name: '美元',
        code: 'USD'
      },
      {
        name: '日元',
        code: 'JPY'
      },
      {
        name: '欧元',
        code: 'EUR'
      },
      {
        name: '英镑',
        code: 'GBP'
      },
      {
        name: '韩元',
        code: 'KER'
      },
      {
        name: '港币',
        code: 'HKD'
      },
      {
        name: '澳大利亚元',
        code: 'AUD'
      },
      {
        name: '加拿大元',
        code: 'CAD'
      },
      {
        name: '阿尔及利亚第纳尔',
        code: 'DZD'
      },
      {
        name: '阿根廷比索',
        code: 'ARS'
      },
      {
        name: '爱尔兰镑',
        code: 'IEP'
      },
      {
        name: '埃及镑',
        code: 'EGP'
      },
      {
        name: '阿联酋迪拉姆',
        code: 'AED'
      },
      {
        name: '阿曼里亚尔',
        code: 'OMR'
      },
      {
        name: '奥地利先令',
        code: 'ATS'
      },
      {
        name: '澳门元',
        code: 'MOP'
      },
      {
        name: '百慕大元',
        code: 'BMD'
      },
      {
        name: '巴基斯坦卢比',
        code: 'PKR'
      },
      {
        name: '巴拉圭瓜拉尼',
        code: 'PYG'
      },
      {
        name: '巴林第纳尔',
        code: 'BHD'
      },
      {
        name: '巴拿马巴尔博亚',
        code: 'PAB'
      },
      {
        name: '保加利亚列弗',
        code: 'BGN'
      },
      {
        name: '巴西雷亚尔',
        code: 'BRL'
      },
      {
        name: '比利时法郎',
        code: 'BEF'
      },
      {
        name: '冰岛克朗',
        code: 'ISK'
      },
      {
        name: '博茨瓦纳普拉',
        code: 'BWP'
      },
      {
        name: '波兰兹罗提',
        code: 'PLN'
      },
      {
        name: '玻利维亚诺',
        code: 'BOB'
      },
      {
        name: '丹麦克朗',
        code: 'DKK'
      },
      {
        name: '德国马克',
        code: 'DEM'
      },
      {
        name: '法国法郎',
        code: 'FRF'
      },
      {
        name: '菲律宾比索',
        code: 'PHP'
      },
      {
        name: '芬兰马克',
        code: 'FIM'
      },
      {
        name: '哥伦比亚比索',
        code: 'COP'
      },
      {
        name: '古巴比索',
        code: 'CUP'
      },
      {
        name: '哈萨克坚戈',
        code: 'KZT'
      },
      {
        name: '荷兰盾',
        code: 'NLG'
      },
      {
        name: '加纳塞地',
        code: 'GHC'
      },
      {
        name: '捷克克朗',
        code: 'CZK'
      },
      {
        name: '津巴布韦元',
        code: 'ZWD'
      },
      {
        name: '卡塔尔里亚尔',
        code: 'QAR'
      },
      {
        name: '克罗地亚库纳',
        code: 'HRK'
      },
      {
        name: '肯尼亚先令',
        code: 'KES'
      },
      {
        name: '科威特第纳尔',
        code: 'KWD'
      },
      {
        name: '老挝基普',
        code: 'LAK'
      },
      {
        name: '拉脱维亚拉图',
        code: 'LVL'
      },
      {
        name: '黎巴嫩镑',
        code: 'LBP'
      },
      {
        name: '林吉特',
        code: 'MYR'
      },
      {
        name: '立陶宛立特',
        code: 'LTL'
      },
      {
        name: '卢布',
        code: 'RUB'
      },
      {
        name: '罗马尼亚新列伊',
        code: 'RON'
      },
      {
        name: '毛里求斯卢比',
        code: 'MUR'
      },
      {
        name: '蒙古图格里克',
        code: 'MNT'
      },
      {
        name: '孟加拉塔卡',
        code: 'BDT'
      },
      {
        name: '缅甸缅元',
        code: 'BUK'
      },
      {
        name: '秘鲁新索尔',
        code: 'PEN'
      },
      {
        name: '摩洛哥迪拉姆',
        code: 'MAD'
      },
      {
        name: '墨西哥比索',
        code: 'MXN'
      },
      {
        name: '南非兰特',
        code: 'ZAR'
      },
      {
        name: '挪威克朗',
        code: 'NOK'
      },
      {
        name: '葡萄牙埃斯库多',
        code: 'PTE'
      },
      {
        name: '瑞典克朗',
        code: 'SEK'
      },
      {
        name: '瑞士法郎',
        code: 'CHF'
      },
      {
        name: '沙特里亚尔',
        code: 'SAR'
      },
      {
        name: '斯里兰卡卢比',
        code: 'LKR'
      },
      {
        name: '索马里先令',
        code: 'SOS'
      },
      {
        name: '泰国铢',
        code: 'THB'
      },
      {
        name: '坦桑尼亚先令',
        code: 'TZS'
      },
      {
        name: '土耳其新里拉',
        code: 'TRY'
      },
      {
        name: '突尼斯第纳尔',
        code: 'TND'
      },
      {
        name: '危地马拉格查尔',
        code: 'GTQ'
      },
      {
        name: '委内瑞拉玻利瓦尔',
        code: 'VEB'
      },
      {
        name: '乌拉圭新比索',
        code: 'UYU'
      },
      {
        name: '西班牙比塞塔',
        code: 'ESP'
      },
      {
        name: '希腊德拉克马',
        code: 'GRD'
      },
      {
        name: '新加坡元',
        code: 'SGD'
      },
      {
        name: '新台币',
        code: 'TWD'
      },
      {
        name: '新西兰元',
        code: 'NZD'
      },
      {
        name: '匈牙利福林',
        code: 'HUF'
      },
      {
        name: '牙买加元',
        code: 'JMD'
      },
      {
        name: '义大利里拉',
        code: 'ITL'
      },
      {
        name: '印度卢比',
        code: 'INR'
      },
      {
        name: '印尼盾',
        code: 'IDR'
      },
      {
        name: '以色列谢克尔',
        code: 'ILS'
      },
      {
        name: '约旦第纳尔',
        code: 'JOD'
      },
      {
        name: '越南盾',
        code: 'VND'
      },
      {
        name: '智利比索',
        code: 'CLP'
      }
    ])
  }

  // 获取货币汇率
  getCurrencyExchangeRate(currencyCode1, currencyCode2) {
    return rxwx.Rx.of([
      {
        currencyF: 'CNY',
        currencyF_Name: '人民币',
        currencyT: 'USD',
        currencyT_Name: '美元',
        currencyFD: 1,
        exchange: '0.1439',
        result: '0.1439',
        updateTime: '2014-11-07 13:58:02'
      },
      {
        currencyF: 'USD',
        currencyF_Name: '美元',
        currencyT: 'CNY',
        currencyT_Name: '人民币',
        currencyFD: 1,
        exchange: '6.9498',
        result: 6.9498,
        updateTime: '2014-11-07 13:58:01'
      }
    ])
  }

  get(url, options = null) {
    return rxwx.request(Object.assign({}, {
      url: `${url}`,
      method: 'GET',
      header: this.getHttpHeader()
    }, options)).pipe(
      operators.map(this.extractData),
      operators.catchError(this.handleError)
    )
  }

  post(url, body = null, options = null) {
    return rxwx.request(Object.assign({}, {
      url: `${url}`,
      method: 'POST',
      header: this.getHttpHeader(),
      data: body
    }, options)).pipe(
      operators.map(this.extractData),
      operators.catchError(this.handleError)
    )
  }

  put(url, body = null, options = null) {
    return rxwx.request(Object.assign({}, {
      url: `${url}`,
      method: 'PUT',
      header: this.getHttpHeader(),
      data: body
    }, options)).pipe(
      operators.map(this.extractData),
      operators.catchError(this.handleError)
    )
  }

  delete(url, options = null) {
    return rxwx.request(Object.assign({}, {
      url: `${url}`,
      method: 'DELETE',
      header: this.getHttpHeader()
    }, options)).pipe(
      operators.map(this.extractData),
      operators.catchError(this.handleError)
    )
  }

  // 处理请求头, 主要带上 cookie
  getHttpHeader() {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': wepy.$store.getState().auth.api_token
    }
  }

  // 取出数据, 有错误就抛出
  extractData(resp) {
    console.log('extractData: ', resp)
    let error = null

    // 优先取服务器返回的错误
    if (resp && typeof resp.data !== 'undefined' &&
      typeof resp.data.code === 'number' &&
      resp.data.code !== 0 &&
      typeof resp.data.msg === 'string') {
      error = {
        statusCode: resp.statusCode,
        code: resp.data.code,
        message: resp.data.msg !== '' ? resp.data.msg : `网络错误`
      }
      throw error
    }

    // 然后服务器非正常返回的错误, 比如由错误的路由导致的 404
    if (resp && resp.statusCode !== 200) {
      error = {
        statusCode: resp.statusCode,
        message: resp.errMsg !== 'request:ok' ? resp.errMsg : `网络错误`
      }
      throw error
    }

    // 正常返回数据
    if (resp && resp.data && resp.data.data) {
      return resp.data.data
    }

    // 后台未返回数据, 但请求正确, 比如删除行程动作
    return null
  }

  // 接住各种请求错误, 显示给用户
  handleError(error) {
    console.log('handleError:', error)
    // 从 extractData 扔过来的
    // 服务器返回的错误消息处理
    if (error && typeof error.message === 'string') {
      throw new Error(error.message ? error.message : '网络错误')
    }

    // 服务器未返回任何数据, 需要后端修复
    throw new Error(error.errMsg ? error.errMsg : '网络错误')
  }
}
