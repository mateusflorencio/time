import { useEffect, useState } from 'react'
import {
  BellAlertIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import AlarmModal from './alarm-modal'
import { useSetRecoilState } from 'recoil'
import Atoms from './atoms'

export default function Relogio() {
  const setState = useSetRecoilState(Atoms)
  const [time, setTime] = useState('00:00:00')
  const handle = useFullScreenHandle()

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <FullScreen handle={handle}>
      <section className='flex justify-center items-center w-full h-full bg-white flex-col '>
        <div className='text-red-600 text-4xl sm:text-6xl md:text-9xl font-roboto'>
          {time}
        </div>
        <div className='flex'>
          <BellAlertIcon
            className='block h-6 w-6 stroke-neutral-800 m-10 hover:fill-neutral-800 hover:scale-125 cursor-pointer transition ease-in-out duration-300'
            aria-hidden='true'
            onClick={() => setState((o) => ({ ...o, alarmeModalOpen: true }))}
          />
          {handle.active ? (
            <ArrowsPointingInIcon
              className='h-6 w-6 stroke-neutral-800 cursor-pointer mt-10 hover:scale-125 trasition ease-in-out duration-300'
              onClick={handle.exit}
            />
          ) : (
            <ArrowsPointingOutIcon
              className='h-6 w-6 stroke-neutral-800 cursor-pointer mt-10 hover:scale-125 trasition ease-in-out duration-300'
              onClick={handle.enter}
            />
          )}
          <AlarmModal />
        </div>
      </section>
    </FullScreen>
  )
}
