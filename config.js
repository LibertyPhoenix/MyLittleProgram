/**
 * 小程序配置文件
 */

// 聚合数据
var host = "japi.juhe.cn"

// 美小线上数据
var uskidHost = "api.uskid.com"

// 美小图片前缀

var picHost = "https://static.uskid.com"


var config = {

    // 下面的地址配合云端 Server 工作
    host,
    uskidHost,
    picHost,

    // 笑话
    jokeUrl: `https://${host}/joke/content/list.from`,

    // 模拟图片数据
    teacherListUrl: `https://${uskidHost}/child/teachers`,


    // http://api.uskid.com/child/teachers?platform=mobile&token=9nP5TDjIS8N1gKPGeFXH8wHA5jonr8XO&selectedChildId=7836&startTime=1509724800&endTime=1510416000&page=1&pageSize=10

};

module.exports = config
