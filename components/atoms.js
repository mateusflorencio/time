import { atom } from 'recoil'


export const Atoms = atom({
  key: 'appState',
  default: {
    alarmModal: {
      open: false
    }
  }
})