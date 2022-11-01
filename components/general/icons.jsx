import {
  BellAlertIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  PlayIcon,
  StopIcon,
  PauseIcon,
} from '@heroicons/react/24/outline'

export const BellAlertIconComponent = ({ onClick }) => (
  <BellAlertIcon
    className='block h-6 w-6 stroke-neutral-800 hover:fill-neutral-800 mr-5 hover:scale-125 cursor-pointer
    transition ease-in-out duration-300 dark:text-orange-600 dark:stroke-white dark:hover:fill-white'
    aria-hidden='true'
    onClick={onClick}
  />
)

export const ArrowsPointingInIconComponent = ({ onClick }) => (
  <ArrowsPointingInIcon
    className='h-6 w-6 stroke-neutral-800 cursor-pointer ml-5  hover:scale-125 trasition ease-in-out duration-300 dark:stroke-white dark:hover:fill-white'
    onClick={onClick}
  />
)

export const ArrowsPointingOutIconComponent = ({ onClick }) => (
  <ArrowsPointingOutIcon
    className='h-6 w-6 stroke-neutral-800 cursor-pointer ml-5  hover:scale-125 trasition ease-in-out duration-300 dark:stroke-white dark:hover:fill-white'
    onClick={onClick}
  />
)

export const PlayIconComponent = ({ onClick }) => (
  <PlayIcon
    className='h-6 w-6 stroke-neutral-800 cursor-pointer ml-5  hover:scale-150 hover:stroke-green-600 hover:fill-green-600 trasition ease-in-out duration-300 dark:stroke-white dark:hover:fill-white'
    onClick={onClick}
  />
)

export const StopIconComponent = ({ onClick }) => (
  <StopIcon
    className='h-6 w-6 stroke-neutral-800 cursor-pointer ml-5  hover:scale-150 hover:stroke-red-600 hover:fill-red-600 trasition ease-in-out duration-300 dark:stroke-white dark:hover:fill-white'
    onClick={onClick}
  />
)

export const PauseIconComponent = ({ onClick }) => (
  <PauseIcon
    className='h-6 w-6 stroke-neutral-800 cursor-pointer ml-5  hover:scale-150 hover:stroke-zinc-600 hover:fill-red-600 trasition ease-in-out duration-300 dark:stroke-white dark:hover:fill-white'
    onClick={onClick}
  />
)
