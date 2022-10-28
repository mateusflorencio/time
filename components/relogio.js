import { useEffect, useState } from 'react'

export default function Relogio() {
  const [time, setTime] = useState('00:00:00')

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString())
    }, 1000)
  }, [])

  return (
    <section className='flex justify-center items-center w-full h-full'>
      <div className='text-orange-500 text-4xl sm:text-6xl md:text-9xl font-roboto'>{time}</div>
    </section>
  )
}
