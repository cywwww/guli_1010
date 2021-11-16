import request from '@/utils/request'

export default{
  // 分页显示所有讲师
  getPlayAuth(vid) {
    return request({
      url: `/eduvod/video/getPlayAuth/${vid}`,
      method: 'get'
    })
  }
}
