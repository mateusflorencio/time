import { atom } from 'recoil'

export default atom({
  key: 'appState',
  default: {
    alarmeModalOpen: false,
  },
})
