import { useEffect } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import AlarmModal from '../alarm-modal'
import { useRecoilState } from 'recoil'
import Atoms from '../atoms'
import { BellAlertIconComponent } from './components/icons'
import { HandleScreenComponent } from './components/handle-screen'

export default function Clock() {
  const [{ hour }, setState] = useRecoilState(Atoms)
  const handle = useFullScreenHandle()

  useEffect(() => {
    setInterval(() => {
      setState((o) => ({ ...o, hour: new Date().toLocaleTimeString() }))
    }, 1000)
  }, [])

  return (
    <FullScreen handle={handle}>
      <section className='flex justify-center items-center w-full h-full bg-transparent flex-col bg-white dark:bg-black '>
        <div className='text-red-600 text-4xl sm:text-6xl md:text-9xl font-roboto dark:text-orange-600'>
          {hour ? hour : 'Loading...'}
        </div>
        <div className='flex justify-center mt-10'>
          <BellAlertIconComponent setState={setState} />
          <HandleScreenComponent handle={handle} />
          <AlarmModal />
        </div>
      </section>
    </FullScreen>
  )
}
