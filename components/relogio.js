import { useEffect, useState } from 'react'
import { BellAlertIcon } from '@heroicons/react/24/outline'
import AlarmModal from './alarm-modal'
import { useSetRecoilState } from 'recoil'
import Atoms from './atoms'

export default function Relogio() {
  const setState = useSetRecoilState(Atoms)
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <section className='flex justify-center items-center w-full h-full bg-black flex-col '>
      <div className='text-orange-500 text-4xl sm:text-6xl md:text-9xl font-roboto'>
        {time}
      </div>
      <div>
        <BellAlertIcon
          className='block h-6 w-6 stroke-white mt-10 hover:fill-white hover:scale-125 cursor-pointer transition ease-in-out duration-300'
          aria-hidden='true'
          onClick={() => setState((o) => ({ ...o, alarmeModalOpen: true }))}
        />
        <AlarmModal />
      </div>
    </section>
  )
}
