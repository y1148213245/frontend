/**
 * Created by qinff on 2018/1/11.
 */

export default {
  name: 'authorservice',
  crumbs:{
    url:'./index.html',
    showWord:{
      location:'您的位置',
      index:'首页'
    },
    getCrumbdOn:'setCrumbs',  //面包屑事件监听
    getCrumbdEmit:'setCrumbs',  //面包屑事件触发
    crumbType:[{ //面包屑
      name: 'authorservice',
      title: '投稿方式',
    }]
  },
  colChangeOn:'colChange', //导航事件监听
  colChangeEmit:'colChange', //导航事件触发
  submission: {
    queryEditorList: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/list.do',
      params: {
        conditions: '[{pub_col_id:226}]',
        pageNo: '1',
        pageSize: '15',
        orderBy: 'pub_a_order asc pub_lastmodified desc id asc',
        searchText: '',
        groupBy: 'pub_resource_id'
      }
    }
  }
}
