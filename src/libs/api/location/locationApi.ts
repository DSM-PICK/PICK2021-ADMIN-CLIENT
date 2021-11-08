import request from '../../axios'

export default {
    getLocationList(){
        return request({
            url: '/location/list',
            method: 'get',
            headers : {
                Authorization: `Bearer ${localStorage.getItem('admin-access-token')}`
            }
        })
    },
}