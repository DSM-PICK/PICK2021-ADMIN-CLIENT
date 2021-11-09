import request from '../../axios'

export default {
    getActivityList(){
        return request({
            url: '/after-school/list',
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            }
        })
    },
    postActivityCreate(name: string, teacher_id: string, location_id: number, day: string){
        return request({
            url: '/after-school',
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`
            },
            data : {
                name: name,
                teacher_id: teacher_id,
                location_id: location_id,
                day: day
            }
        })
    },
    patchActivityChange(after_school_id: number, name?: string, teacher_id?: string, location_id?: number, day?: string){
        return request({
            url: `/after-school/${after_school_id}`,
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`
            },
            data : {
                name: name,
                teacher_id: teacher_id,
                location_id: location_id,
                day: day
            }
        })
    },
    deleteActivityDel(after_school_id: number){
        return request({
            url: `/after-school/${after_school_id}`,
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`
            }
        })
    },
    postActivityStudentAdd(after_school_id: number, student_id: number){
        return request({
            url: `/after-school/${after_school_id}/student`,
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`
            },
            data : {
                student_id: student_id
            }
        })
    },
    deleteActivityStudentDel(after_school_id: number, student_id: number){
        return request({
            url: `/after-school/${after_school_id}/student`,
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-acess-token')}`
            },
            data : {
                student_id: student_id
            }
        })
    },
}