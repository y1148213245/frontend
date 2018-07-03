import component from '../candidate.vue'
const name = component.name;  // 组件标签名
const title = '参赛人组件';  // 组件title
const description = `参赛人组件`;  // 组件描述信息
const dev = {
  activityDetail: {
    work_activitydetail_10: {
      url: '',
    }
  }
};
const prod = {
  activityDetail: {
    work_activitydetail_10: {
      url: 'spc/cms/publish/list.do',
      keys: {},
      eventName_loadDate: 'loadSearchResult',
    }
  }
};
const platform = 'PC';
const pageType = ['list'];
const resourceType = ['book'];
export { name, title, dev, prod, description, platform, pageType, resourceType };