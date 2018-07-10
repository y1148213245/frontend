/**
 * Created by song 2018/3/19
 * 购物车图标组件 获取购物车数量
 */

import component from "../carticon.vue";


const name = component.name; // 组件标签名

const title = "购物车图标组件"; // 组件title

const description = `购物车图标组件，显示购物车数量`; // 组件描述信息

const dev = {
  navigation: {
    navigation_02: {
      toCartUrl: '../pages/shoppingcart.html', // 去购物车
      tips: "我的购物车",  // 中间的提示文字 可以为空
      toLoginUrl: '../pages/login.html', // 去登陆
      staticText : {
        systemPrompt: "系统提示",
        OK:"确定",
        pleaseLoginFirst: "请您先登录"
      }
    }
  }
};

const prod = {
  navigation: {
    navigation_02: {
      toCartUrl: '../pages/shoppingcart.html', // 去购物车
      tips: "我的购物车",  // 中间的提示文字 可以为空
      toLoginUrl: '../pages/login.html', // 去登陆
      staticText : {
        systemPrompt: "系统提示",
        OK:"确定",
        pleaseLoginFirst: "请您先登录"
      }
    }
  }
};

const platform = 'PC';
const pageType = ['index'];
const resourceType = ['others'];

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
