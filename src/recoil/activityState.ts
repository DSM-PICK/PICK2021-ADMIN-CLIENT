import { atom, selector, selectorFamily } from 'recoil'
import activityApi from '../libs/api/activity/activityApi';

interface activityState {
    major_id: number,
    major_name: string,
    location_name: string,
    head_name: string
}

export const activityListState = atom({
    key: 'majorListState',
    default: []
})

export const activitySelector = selector({
    key: 'majorListSeletor',
    get: async () => {
        let list = await activityApi.getActivityList()
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            return err
        })
        return list
    },
})

export const activityInfoState = atom({
    key: 'activityInfoState',
    default: []
})