import { atom } from 'recoil'

export const asModifyState = atom({
    key: 'asModifyState',
    default: {
        asId: 0,
        isModity: false,
        title: '',
        location_id: -1,
        teacher_id: '',
        studentList: [],
        day: ''
    }
})