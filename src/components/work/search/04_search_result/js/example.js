/*
 * @Author: yan.chaoming 
 * @Date: 2018-01-04 16:44:27 
 * @Last Modified by: yan.chaoming
 * @Last Modified time: 2018-01-05 13:34:55
 */
const dev = {
  search: {
    search_result_04: {
    }
  }
};

const prod = {
  search: {
    search_result_04: {
      url: 'http://172.19.57.153/portal/api/spc/cms/publish/list.do',
      param: {
        conditions: "[{pub_site_id:'2'},{pub_status:'1'}]",
        groupBy: 'pub_resource_id',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        pageNo: '1',
        pageSize: '15',
        searchText: ''
      },
      pageSizes:[10, 20, 50, 100],
      eventName_loadDate:'loadSearchResult',
    }
  }
};