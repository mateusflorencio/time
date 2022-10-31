import { atom } from 'recoil'

export default atom({
  key: 'appState',
  default: {
    showModalDesactiveAlarm: false,
    showModal: false,
    mode: 'ligth',
    hour: false,
    alarm: false,
    stop: null
  },
})
