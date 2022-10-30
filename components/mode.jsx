import Atom from './atoms'
import { useRecoilState } from 'recoil'

import { SunIcon } from '@heroicons/react/24/outline'

export default function Mode() {
  const [{ mode }, setState] = useRecoilState(Atom)

  const handleMode = () => {
    if (mode === 'light') {
      setState((o) => ({ ...o, mode: 'dark' }))
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      setState((o) => ({ ...o, mode: 'light' }))
    }
  }

  return (
    <SunIcon
      className='block h-6 w-6 stroke-white hover:fill-black hover:stroke-black cursor-pointer'
      onClick={() => handleMode()}
    />
  )
}
