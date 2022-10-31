import { useEffect } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import AlarmModal from './modal/alarm-modal'
import DescativeAlarm from './modal/desactive-alarm-modal'
import { useRecoilState } from 'recoil'
import Atoms from './states/atoms'
import {
  ArrowsPointingInIconComponent,
  ArrowsPointingOutIconComponent,
  BellAlertIconComponent,
} from './general/icons'

export default function Clock() {
  const [{ hour, showModalDesactiveAlarm }, setState] = useRecoilState(Atoms)
  const handle = useFullScreenHandle()

  useEffect(() => {
    setInterval(() => {
      setState((o) => ({ ...o, hour: new Date().toLocaleTimeString('en-GB') }))
    }, 1000)
  }, [])

  return (
    <FullScreen handle={handle}>
      <section className='flex justify-center items-center w-full h-full bg-transparent flex-col bg-white dark:bg-black '>
        <div className='text-red-600 text-4xl sm:text-6xl md:text-9xl font-roboto dark:text-orange-600'>
          {hour ? hour : 'Loading...'}
        </div>
        <div className='flex justify-center mt-10'>
          <BellAlertIconComponent
            onClick={() => setState((o) => ({ ...o, showModal: true }))}
          />
          {handle.active ? (
            <ArrowsPointingInIconComponent onClick={handle.exit} />
          ) : (
            <ArrowsPointingOutIconComponent onClick={handle.enter} />
          )}
          <AlarmModal />
          <DescativeAlarm show = {showModalDesactiveAlarm}/>
        </div>
      </section>
    </FullScreen>
  )
}
