import { atom } from 'recoil'

export default atom({
  key: 'appState',
  default: {
    showModal: false,
    mode: 'ligth',
    alarm: { hour: '0', min: '0' },
    hour: false,
  },
})
