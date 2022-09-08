export const config = {
  USERS: [
    {
      // 想要发送的人的名字
      name: "老婆",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oKyBR5_lRMRspTA897bLvzf91ocs",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "AtGKJsgnhkl1vpdEbFJ1kv3g7KTnk_Y8OpeMgdVygaU",
      // 所在省份
      province: "湖南",
      // 所在城市
      city: "江永",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "https://v1.jinrishici.com/rensheng.txt"
    }, 
    {
      name: "测试", 
      id: "oKyBR56k-rhjK3X-fdetGTVfijEM",
      useTemplateId: "AtGKJsgnhkl1vpdEbFJ1kv3g7KTnk_Y8OpeMgdVygaU",
      province: "湖南",
      city: "江永",
      openUrl: "https://v1.jinrishici.com/rensheng.txt"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "86az3gc-BmHzRDqgQ-X1EFM0xTMyBLdWavKFan3aBR8",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "oKyBR56k-rhjK3X-fdetGTVfijEM",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "湖南",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "江永",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "乖乖", "year": "1999", "date": "10-31"},
     {"type": "生日", "name": "帆帆", "year": "2001", "date": "03-11"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    {"keyword": "love_day", date: "2021-01-26"},
    {"keyword": "tw_day", date: "2024-09-01"},
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    //{"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "加油宝宝，相信自己是！！姐就是女王，怕他她它啥，该做就去做大胆去做（正确的）。",
      "别健忘！上车下车记得摸摸口袋，看清楚东西！！",
      "如果一个人在外，要保护好自己！",
      "乖，我真的好爱好爱你啊",
      "如果你想我了，就抬头看看月亮，我也在想你",
      "每天站岗的时候我都在想你",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
