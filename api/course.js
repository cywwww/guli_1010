import request from '@/utils/request'

export default{
  // 查询热门课程和名师
  getCourseList(page, size, searchObj) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseList/${page}/${size}`,
      method: 'post',
      data: searchObj
    })
  },
  // 查询所有分类的方法
  getAllSubject() {
    return request({
      url: `/eduservice/subject/getAllSubject`,
      method: 'get'
    })
  },
  // 课程详情的方法
  getCourseInfo(courseId) {
    return request({
      url: `/eduservice/coursefront/getFrontCourseInfo/${courseId}`,
      method: 'get'
    })
  }
}
