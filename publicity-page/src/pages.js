/*
 * @Author: yaodongyi
 * @Date: 2019-08-28 12:08:15
 * @Description: 配置页面路由
 */
const component = url => `./src/pages${url}`; // 例: ./src/pages/home/index.js
/**
 * @param {String} name 路由名
 * @param {String} entry 入口文件
 * @param {Object} meta 用于seo检索的meta，Keywords～
 * @param {String} path 页面路径
 * @desc 每次添加页面都需重启dev，或者重新build。
 */
module.exports = [
  {
    name: 'index.html', // 路由名 👉 打开项目首页对应的名字，首页默认index.html，避免入口页缺失(如需修改请对应修改pwa及webpack默认入口设置)
    meta: {
      Keywords: '资讯,新闻,财经,房产,视频,NBA,科技,腾讯网,腾讯,QQ,Tencent'
    },
    entry: component('/index.js'), // 是否添加入口文件(可选)
    path: component('/index.html')
  },
  {
    name: 'home.html',
    meta: {
      Keywords: '财经'
    },
    entry: component('/home/index.js'),
    path: component('/home/index.html')
  },
  {
    name: 'info.html',
    meta: {
      Keywords: '新闻'
    },
    entry: component('/about/info/index.js'),
    path: component('/about/info/index.html')
  },
  {
    name: 'about.html',
    meta: {
      Keywords: '资讯'
    },
    entry: component('/about/index.js'),
    path: component('/about/about.html')
  }
];
