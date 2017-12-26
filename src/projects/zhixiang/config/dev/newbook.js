/**
 * Created by song on 2017/12/14.
 * 书目下载
 */

export default {
	name: "newbook",
	list_pic: {
		horizontal_list_03: {
			queryItemList:{
				url: '../data/ui_list_pic_03.json',
				param: {
					conditions: '[{pub_resource_type:"BOOK"},{pub_col_id:"48"},{pub_status:"1"},{BOOK_BOOK_CASCADID:"#{cascadeId}",op:"lk"},{pub_site_id:"' + SITE_CONFIG.siteId + '"}]',
					orderBy: "pub_a_order asc pub_lastmodified desc id asc",
					pageNo: "1",
					pageSize: "15",
					searchText: null
				}
			},
			toBookDetailUrl:"./bookdetail.html",
			moreType:{
				url: "./recommend.html",
				pubColId: 48,
				type: "selling"
			},
			styleType: "show5"
		}
	},
	components: {
		categoryList: {
			url: "/data/components_bestsale_categoryList.json"
		}
	}
};
