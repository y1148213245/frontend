/*
 * @Author: yan.chaoming
 * @Date: 2017-12-26 09:23:33
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-19 14:01:15
 */

import * as interfaces from "../common/interfaces.js";
import {Get, Post,_axios} from "@common";

let timer = null;

let state = {
	CONFIG: null,
	member: {},  //用户信息
	cartTotalAmount: 0, // 购物车商品总数
};

let getters = {
	[interfaces.GET_MEMBER]: state => state.member,
	[interfaces.GET_MEMBER_ISLOGIN]: (state) => state.member['loginName'],
	[interfaces.GET_TOTAL_AMOUNT]: (state) => state.cartTotalAmount,
};

let mutations = {
	[interfaces.SET_MEMBER]: (state, member) => {
		state.member = member;
	},
	updateMember: function (state, member) {
		state.member = member;
	}
};

let actions = {
	[interfaces.ACTION_LOGIN]({commit}, params) {
		return Post(BASE_URL + "login.do", params.member).then(function (rep) {
			let datas = rep.data
			if (datas.data && (datas.data.checkStatus == "1" || datas.data.checkStatus == 1)) {
				commit("updateMember", datas.data);
				if (params.isAutomaticLogin) {
					window.localStorage.setItem('token',datas.token);
				}else{
					sessionStorage.setItem('token',datas.token)
				}
			}
			return rep;
		});
	},
	[interfaces.ACTION_REGISTER]: function ({}, user) {
		return Post(BASE_URL + "/user/registerSys.do?loginName=" + user.loginName + "&passWord=" + user.password);
	},
	[interfaces.ACTION_REGISTER_EMAIL]: function ({}, user) {
		return Post(BASE_URL + '/user/registerSys1.do?loginName=' + user.loginName +'&passWord=' + user.checkPass + '&email=' + user.email);
	},
	[interfaces.ACTION_REGISTER_MOBILE]:({},params) => {
		return Get(BASE_URL + '/user/registerBindMobileNum.do?mobileNum=' + params.mobileNum + '&loginName=' + params.loginName + '&passWord=' + params.checkPass);
	},
	[interfaces.ACTION_KEEP_SESSION]: ({commit}) => {
		if(!timer)
			timer = window.setInterval(keepSession(commit), 600000);
		return keepSession(commit);
	},
	[interfaces.ACTION_LOGOUT]: function () {
		return Get( BASE_URL + '/logout.do');
	},
	getTotalAmount({commit, state}, amount) {
		state.cartTotalAmount = amount;
	},
	[interfaces.ACTION_CHECK_USERINFO]:({},params) => {
		return Get(BASE_URL + '/user/checkUserInfo.do?checkText=' + params.text + '&checkType=' + params.type);
	},
	[interfaces.ACTION_SEND_MOBILE_NUM]:({},params) => {
		return Get(BASE_URL + '/user/sendToMobile.do?mobileNum=' + params.mobileNum)
	}
	
};

var keepSession = function (commit) {
	return Get(BASE_URL + 'checkToken.do')
		.then(function (rep) {
			let datas = rep.data;
			let _member = datas.data || {};
			commit("updateMember", _member);
			return _member
		});
};

export default {
	namespaced: true,
	name: "login",
	state,
	getters,
	actions,
	mutations
};
