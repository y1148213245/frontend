/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-05 13:36:35 
 * @Last Modified by: song
 * @Last Modified time: 2018-03-12 14:17:16
 */
export default {
  name: 'search',
  search: {
    search_result_04: {
      url:  'spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_site_id:'2'},{pub_status:'1'},{pub_resource_type:'BOOK'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '10',
        searchText: ''
      },
      pageSizes:[10, 20, 50, 100],
      eventName_loadDate:'loadSearchResult',
      isShowTotalCountTag:true,
      detailHref:'./bookdetail.html?pubId=',
    }
  },
  rankCard: {
    rank_01: {
      rules:[
        {
          title:'综合排序',
          orderBy:'pub_a_order asc pub_lastmodified desc id asc',
        },
        {
          title:'按人气',
          orderBy:'pub_read_num desc',
        },
        {
          title:'按最新',
          orderBy:'BOOK_PUBDATE desc',
        }
      ],
      eventName:'loadSearchResult',
    },
  }
};