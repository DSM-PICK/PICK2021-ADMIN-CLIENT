import { atom, selector } from 'recoil'
import majorApi from '../libs/api/major/majorApi'

// interface majorState {
//     major_id: number,
//     major_name: string,
//     location_name: string,
//     head_name: string
// }

export const majorListState = atom({
    key: 'majorListState',
    default: []
})

export const majorListSelector = selector({
    key: 'majorListSeletor',
    get: async ({get}) => {
        let list = await majorApi.getMajorList()
        .then((res) => {
            return res.data;
        })
        .catch((res) => {
            return res.data
        })
        return list
    },
})