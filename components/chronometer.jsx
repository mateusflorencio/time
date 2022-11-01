import { useEffect, useState } from 'react'
import { FullScreen, useFullScreenHandle } from 'react-full-screen'
import {
  PauseIconComponent,
  PlayIconComponent,
  StopIconComponent,
  ArrowsPointingInIconComponent,
  ArrowsPointingOutIconComponent
} from './general/icons'

export default function Chronometer() {
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const [time, setTime] = useState(0)

  const handle = useFullScreenHandle()

  const handleStart = () => {
    setIsActive(true)
    setIsPaused(false)
  }

  const handlePauseResume = () => {
    setIsPaused(!isPaused)
  }

  const handleReset = () => {
    setIsActive(false)
    setTime(0)
  }

  useEffect(() => {
    let interval = null

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  }, [isActive, isPaused])

  return (
    <FullScreen handle={handle}>
      <section className='flex justify-center items-center w-full h-full bg-transparent flex-col bg-white dark:bg-black '>
        <div className='text-red-600 text-4xl sm:text-6xl md:text-9xl font-roboto dark:text-orange-600'>
            {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
            {('0' + Math.floor((time / 1000) % 60)).slice(-2)}:
            {('0' + ((time / 10) % 100)).slice(-2)}
        </div>
        <div className='flex justify-center mt-10'>
          <PlayIconComponent onClick={handleStart} />
          <PauseIconComponent onClick={handlePauseResume} />
          <StopIconComponent onClick={handleReset} />

          {handle.active ? (
            <ArrowsPointingInIconComponent onClick={handle.exit} />
          ) : (
            <ArrowsPointingOutIconComponent onClick={handle.enter} />
          )}
        </div>
      </section>
    </FullScreen>
  )
}
