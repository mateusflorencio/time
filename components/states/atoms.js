import { atom } from 'recoil'

export default atom({
  key: 'appState',
  default: {
    showModal: false,
    mode: 'ligth',
    alarmHour: '0',
    alarmMin: '0',
    hour: false,
    alarm: false
  },
})
