import { atom } from 'recoil'

interface IASAddState {
    name: string,
    location_id: number,
    teacher_id: string,
    head_name: string,
    head_gcn: string,
    day: string,
}

interface IStudentAddListState {
    student_id: number,
    gcn: string,
    name: string
}

export const studentAddListState = atom<IStudentAddListState[]>({
    key:'studentAddListState',
    default: []
})

export const asInitState = atom<IASAddState>({
    key: 'asInitState',
    default: {
        name: '',
        location_id:  -1,
        teacher_id: '',
        head_name: '',
        head_gcn: '',
        day: '',
    }
})

export const asAddTypeState = atom<string>({
    key: 'asAddTypeState',
    default: 'major'
})