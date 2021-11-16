import request from '@/utils/request'

export default{
  // 分页显示所有讲师
  getPageList(page, limit) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  getTeacherFrontInfo(teacherId) {
    return request({
      url: `/eduservice/teacherfront/getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
  }
}
