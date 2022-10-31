import { useRef } from 'react'
import InputForm from '../general/input'
import { useRecoilState } from 'recoil'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import Atoms from '../states/atoms'
import { Modal } from '../general/modal'

export default function AlarmModal() {
  const [{ showModal }, setState] = useRecoilState(Atoms)
  const cancelButtonRef = useRef(null)

  const handleChange = (e) => {
    if (e.target.name === 'Hora') {
      setState((o) => ({ ...o, alarmHour: e.target.value }))
    } else {
      setState((o) => ({ ...o, alarmMin: e.target.value }))
    }
  }

  return (
    <Modal
      state={showModal}
      onClose={() => setState((o) => ({ ...o, showModal: false }))}
      title={'Defina uma alarme'}
      icon={
        <BellAlertIcon
          className='h-6 w-6 text-blue-600 dark:text-red-900'
          aria-hidden='true'
        />
      }
    >
      <div className={'m-3 sm:w-1/2'}>
        <InputForm
          refProps={cancelButtonRef}
          title={'Hora '}
          placeholder={'HH'}
          property={{ type: 'number', min: '0', max: '23' }}
          onChange={handleChange}
        />
      </div>
      <div className={'m-3 sm:w-1/2'}>
        <InputForm
          title={'Minuto'}
          placeholder={'MM'}
          property={{ type: 'number', min: '0', max: '59' }}
          onChange={handleChange}
        />
      </div>
    </Modal>
  )
}
