import { atom , selector  } from "recoil";
import teacherApi from "../libs/api/teacher/teacherApi";

interface IStudentAddListState {
    student_id: number,
    gcn: string,
    name: string
}

export const studentState = atom({
    key: 'studentState',
    default: ''
})

export const studentAddListState = atom<IStudentAddListState[]>({
    key:'studentAddListState',
    default: []
})

export const studentDataState = selector({
    key: 'studentDataState',
    get: async ({get}) => {
        const name: any = get(studentState);
        let list = await teacherApi.getStudentSearch(name)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
        return list
    }
})

export const teacherState = atom<string>({
    key: 'teacherState',
    default: ''
})

export const teacherInfoState = selector({
    key: 'teacherInfoState',
    get: async ({get}) => {
        const teacher_id: any = get(teacherState);
        let list = await teacherApi.getTeacherInfo(teacher_id)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
        return list
    }
})

export const teacherDataState = selector({
    key: 'teacherDataState',
    get: async ({get}) => {
        let list = await teacherApi.getTeacherList()
        .then((res) => {
            return res.data.teachers
        })
        .catch((err) => {
            return err
        })
        return list
    }
})
