import { atom } from 'recoil'

export const asMoveState = atom({
    key: 'asMoveState',
    default: {
        isChange: false,
        studentId: -1,
        nowAsName: '',
        afterAsName: '',
        afterAsId: -1,
        type: '',
    }
})