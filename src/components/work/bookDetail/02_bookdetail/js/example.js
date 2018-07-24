/**
 * Created by song 2018/1/9
 * 图书详情页 图书详细信息
 */

import component from "../bookDetailContent.vue";


const name = component.name;

const title = "图书详情组件"; // 组件title

const description = `图书详情组件`;

const dev = {
  book_detail: {
    book_detail_02: {
      relatedBook:{
        staticText:{
          packUpAll:"收起全部",
          showAll:"显示全部",
          bookAbstract:"图书简介",
          authorAbstract:"作者简介",
          contents:"目录"
        }
      },
      buyBookUrl: 'http://book.dangdang.com/', // 购买纸书 跳转至当当网首页
      probationUrl: '/ebook/read.jsp', //试读地址
      showInfoList: [{ // 控制显示/隐藏图书的其他信息 比如：出版时间、出版社、ISBN、版次...
        title: "出版时间:", // 固定显示内容
        key: "pubTime", // 接口字段名
        filter: true // 过滤器 这里只有出版时间需要过滤器
      }, {
        title: "出版社:",
        key: "BOOK_PRESS_NAME",
        filter: false
      }, {
        title: "ISBN:",
        key: "isbn",
        filter: false
      }, {
        title: "版次:",
        key: "bookVersion",
        filter: false
      }, {
        title: "备注:",
        key: "BOOK_REMARK",
        filter: false
      }, {
        title: "页数:",
        key: "pageNums",
        filter: false
      },
        {
        title: "字数:",
        key: "bookWords",
        filter: false
      }],
      staticText : {
        yourPosition: "您的位置：",
        homePage: "首页",
        cathyebk: "电子书城",
        noCover: "暂无封面",
        eBookPrice: "电子书价格：",
        onSale: "促销：",
        priceReduction: "满额减",
        paperBookPrice: "纸书定价：￥",
        buyPaperBook: "购买纸书",
        freeTrials: "免费试读",
        addToShoppingCart:"加入购物车",
        noDate: "暂无日期",
        productDetails: "商品详情",
        noPriceNoBookInfo: "无价格，不是书，不可加购物车",
        pleaseLogin: "请登录",
        yuan:"￥"
      }
    },
  }
};

const prod = {
  book_detail: {
    book_detail_02: {
      relatedBook:{
        staticText:{
          packUpAll:"收起全部",
          showAll:"显示全部",
          bookAbstract:"图书简介",
          authorAbstract:"作者简介",
          contents:"目录"
        }
      },
      buyBookUrl: 'http://book.dangdang.com/', // 购买纸书 跳转至当当网首页
      probationUrl: '/ebook/read.jsp', //试读地址
      showInfoList: [{ // 控制显示/隐藏图书的其他信息 比如：出版时间、出版社、ISBN、版次...
        title: "出版时间:", // 固定显示内容
        key: "pubTime", // 接口字段名
        filter: true // 过滤器 这里只有出版时间需要过滤器
      }, {
        title: "出版社:",
        key: "BOOK_PRESS_NAME",
        filter: false
      }, {
        title: "ISBN:",
        key: "isbn",
        filter: false
      }, {
        title: "版次:",
        key: "bookVersion",
        filter: false
      }, {
        title: "备注:",
        key: "BOOK_REMARK",
        filter: false
      }, {
        title: "页数:",
        key: "pageNums",
        filter: false
      }, {
        title: "字数:",
        key: "bookWords",
        filter: false
      }],
      showItem:[],//'audio'显示音频附件
      staticText:{
        yourPosition: "您的位置：",
        homePage: "首页",
        cathyebk: "电子书城",
        noCover: "暂无封面",
        eBookPrice: "电子书价格：",
        onSale: "促销：",
        priceReduction: "满额减",
        paperBookPrice: "纸书定价：￥",
        buyPaperBook: "购买纸书",
        freeTrials: "免费试读",
        addToShoppingCart:"加入购物车",
        noDate: "暂无日期",
        productDetails: "商品详情",
        noPriceNoBookInfo: "无价格，不是书，不可加购物车",
        pleaseLogin:"请登录",
        yuan:"￥"
      }
    }
  }
};

const platform = 'PC';
const pageType = ['detail'];
const resourceType = ['book'];

export {
  name,
  title,
  dev,
  prod,
  description,
  platform,
  pageType,
  resourceType
};
