import request from '../../axios'

export default {
  getActivityList() {
    return request({
      url: '/after-school/list',
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`,
      },
    })
  },
  getActivityInfo(after_school_id: string) {
    return request({
      url: `/after-school/${after_school_id}`,
      method: 'get',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`,
      },
    })
  },
  postActivity(
    name: string,
    teacher_id: string,
    location_id: number,
    day: string
  ) {
    return request({
      url: '/after-school',
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`,
      },
      data: {
        name: name,
        teacher_id: teacher_id,
        location_id: location_id,
        day: day,
      },
    })
  },
  patchActivity(
    after_school_id: number,
    name?: string,
    teacher_id?: string,
    location_id?: number,
    day?: string
  ) {
    return request({
      url: `/after-school/${after_school_id}`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`,
      },
      data: {
        name: name,
        teacher_id: teacher_id,
        location_id: location_id,
        day: day,
      },
    })
  },
  deleteActivity(after_school_id: number) {
    return request({
      url: `/after-school/${after_school_id}`,
      method: 'delete',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`,
      },
    })
  },
  postActivityStudent(after_school_id: number, student_id: number) {
    return request({
      url: `/after-school/${after_school_id}/student`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`,
      },
      data: {
        student_id: student_id,
      },
    })
  },
  deleteActivityStudent(after_school_id: number, student_id: number) {
    return request({
      url: `/after-school/${after_school_id}/student`,
      method: 'post',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`,
      },
      data: {
        student_id: student_id,
      },
    })
  },
}
