import request from '../../axios'

export default {
    getMajorList(){
        return request({
            url: '/major/list',
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
        })
    },
    postMajor(major_name: string, head_name: string, head_gcn: string, location_id: number, teacher_id: string){
        return request({
            url: '/major',
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data: {
                major_name: major_name,
                head_name: head_name,
                head_gcn: head_gcn,
                location_id: location_id,
                teacher_id:teacher_id
            }
        })
    },
    getMajorInfo(major_id : number){
        return request({
            url: `/major/${major_id}`,
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            }
        })
    },
    postMajorMember(major_id: number, student_id: number){
        return request({
            url: '/major/member',
            method: 'post',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {
                major_id: major_id,
                student_id: student_id
            }
        })
    },
    deleteMajorStudent(student_id: number){
        return request({
            url: '/major/member',
            method: 'delete',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {
                student_id: student_id
            }
        })
    },
    patchMajorHead(major_id: number, student_id: number){
        return request({
            url: '/major/head',
            method: 'patch',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {
                major_id: major_id,
                student_id: student_id
            }
        })
    },
    deleteMajor(major_id: number){
        return request({
            url: `/major/${major_id}`,
            method: 'delete',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            }
        })
    },
    patchMajorName(major_id: number, major_name: string){
        return request({
            url: `/major/${major_id}`,
            method: 'patch',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {
                major_name: major_name,
            }
        })
    },
    patchMajorChangeLocation(major_id: number, location_id: number){
        return request({
            url: `/major/${major_id}/location`,
            method: 'patch',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            },
            data : {
                location_id: location_id,
            }
        })
    }
}