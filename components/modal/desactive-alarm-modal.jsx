import { useRecoilState } from 'recoil'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import Atoms from '../states/atoms'
import { Modal } from '../general/modal'
import { ConfirmButton } from '../general/buttons'

export default function AlarmModal() {
  const [{ alarm, showModalDesactiveAlarm, stop }, setState] =
    useRecoilState(Atoms)
  const handleClose = () => {
    stop()
    return setState((o) => ({ ...o, showModalDesactiveAlarm: false }))
  }

  return (
    <Modal
      state={showModalDesactiveAlarm}
      onClose={() =>
        setState((o) => ({ ...o, showModalDesactiveAlarm: false }))
      }
      title={'Alarme'}
      icon={
        <BellAlertIcon
          className='h-6 w-6 text-blue-600 dark:text-red-900'
          aria-hidden='true'
        />
      }
      button={<ConfirmButton name={'Entendi'} onClick={handleClose} />}
    >
      <div className=''>
        <div className='dark:text-white mt-5'>
          Alarme foi as: {alarm && alarm.toLocaleTimeString()}{' '}
        </div>
        <div className='dark:text-white mt-2'>
          Agora são:{new Date().toLocaleTimeString()}
        </div>
      </div>
    </Modal>
  )
}
