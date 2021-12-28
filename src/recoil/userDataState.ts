import { atom , selector  } from "recoil";
import locationApi from "../libs/api/location/locationApi";
import teacherApi from "../libs/api/teacher/teacherApi";

export const teacherState = atom<{teacher_id: string, teacher_name: string}>({
    key: 'teacherState',
    default: {
        teacher_id: '0',
        teacher_name: '홍길동'
    }
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
    get: async () => {
        let list = await teacherApi.getTeacherList()
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            console.log(err.response?.status, 'asd')
            return err
        })
        return list
    }
})

export const locationListState = selector({
    key: 'locationListState',
    get: async () => {
        let list = await locationApi.getLocationList()
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            return err
        })
        return list
    }
})