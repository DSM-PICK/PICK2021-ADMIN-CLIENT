import request from '../../axios'

export default {
    postRegister(id : string, name: string, password: string, code: string){
        return request({
            url: '/teacher/register',
            method: 'post',
            data: {
                id: id,
                name: name,
                password: password,
                code: code
            }
        })
    },
    postLogin(id: string, password: string){
        return request({
            url: '/teacher/login',
            method: 'post',
            data: {
                id: id,
                password: password
            }
        })
    },
    putRefreshToken(){
        return request({
            url: '/teacher/auth',
            method: 'put',
            data: {
                refresh_token: `${localStorage.getItem('admin-refresh-token')}`
            }
        })
    },
    patchChangePassword(password : string, teacher_id: string){
        return request({
            url: '/teacher/password',
            method: 'patch',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data: {
                password: password,
                teacher_id: teacher_id
            }
        })
    },
    patchChangeName(name: string, teacher_id: string){
        return request({
            url: '/teacher/name',
            method: 'patch',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data: {
                name: name,
                teacher_id: teacher_id
            }
        })
    },
    getTeacherList(){
        return request({
            url: '/teacher/list',
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {}
        })
    },
    getTeacherInfo(teacher_id : number){
        return request({
            url: `/teacher/${teacher_id}/information`,
            method: 'patch',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {}
        })
    },
    getStudentSearch(name : string){
        return request({
            url: `/teacher/student?name=${name}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {}
        })
    },
}