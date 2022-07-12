import { atom } from 'recoil'

export const accountState = atom<{ isOpen: boolean }>({
  key: 'accountState',
  default: {
    isOpen: false,
  },
})
