import { useRef, useState } from 'react'
import InputForm from '../general/input'
import { useRecoilState } from 'recoil'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import Atoms from '../states/atoms'
import { Modal } from '../general/modal'
import useSound from 'use-sound'
import { CancelButton, ConfirmButton } from '../general/buttons'

export default function AlarmModal() {
  const [{ showModal }, setState] = useRecoilState(Atoms)
  const cancelButtonRef = useRef(null)
  const [hour, setHour] = useState('')
  const [min, setMin] = useState('')
  const [play, { pause }] = useSound('/sound.mp3')

  const icon = (
    <BellAlertIcon
      className='h-6 w-6 text-blue-600 dark:text-red-900'
      aria-hidden='true'
    />
  )

  const handleChange = (e) => {
    if (e.target.name == 'Hora') {
      setHour(e.target.value)
    } else {
      setMin(e.target.value)
    }
  }

  const defineAlarm = (e) => {
    const d = new Date()
    const time = new Date(d.getFullYear(), d.getMonth(), d.getDate(), hour, min)
    setState((o) => ({ ...o, alarm: time }))
    handleClose()

    setTimeout(() => {
      setState((o) => ({ ...o, showModalDesactiveAlarm: true, stop : pause }))
      return play(e)
    }, Number(time - d))
  }

  const handleClose = () => setState((o) => ({ ...o, showModal: false }))

  return (
    <Modal
      state={showModal}
      title={'Defina uma alarme'}
      onClose={handleClose}
      icon={icon}
      button={<ConfirmButton name={'Confirmar'} onClick={defineAlarm} />}
      buttonTwo={<CancelButton name={'Cancelar'} onClick={handleClose} />}
    >
      <div className={'m-3 sm:w-1/2'}>
        <InputForm
          refProps={cancelButtonRef}
          title={'Hora'}
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
