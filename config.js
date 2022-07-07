module.exports = {
  port: 3000, //启动端口
  DB_URL: 'mongodb://127.0.0.1:27017/meituan', //数据库地址
  notifyUrl: 'http://192.168.0.103:3000/v1/notify_url', //支付异步通知地址
  synNotifyUrl: 'http://39.108.3.12', //客户端同步跳转
  sessionStorageURL: 'mongodb://127.0.0.1:27017/session', //数据库存放session地址
  Bucket: 'gylzj', //七牛云bucket
  AccessKey: '6YS88q_ztYVC12gIasBZh8TkffyeiAYODDPLdl3R', //七牛云accessKey
  SecretKey: 'WljsnFWAuZXMuehXJfpPUpY8ONZRX6EIa8SJgLRC', //七牛云secretKey
  tencentkey: '6J4BZ-PXX62-UMVUE-CPFH5-YFWT5-ERBTT', //腾讯位置secreKey
  tencentkey2: '', //腾讯位置服务secreKey
  wechatAppid: '', // 微信小程序appid
  wecahatSecret: '' // 微信小程序密钥
}
