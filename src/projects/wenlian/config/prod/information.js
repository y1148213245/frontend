/**
 * Created by qinff on 2018/1/9.
 */
export default {
  name: 'information',
  information_info_content: {
    queryDetail: {
      url: CONFIG.BASE_URL + 'spc/cms/publish/detail.do',
      params: {
        pubId: '2715',
        loginName: ''
      }
    },
    collectOrLike: {
      url: CONFIG.BASE_URL + 'collection/addCollect.do',
      params: {
        loginName: '',
        pubId: '',
        operateType: '',
        siteId: ''
      }
    }
  }
}
