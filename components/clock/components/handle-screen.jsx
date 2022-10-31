import {
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
} from '@heroicons/react/24/outline'

export const HandleScreenComponent = ({ handle }) => (
  <>
    {handle.active ? (
      <ArrowsPointingInIcon
        className='h-6 w-6 stroke-neutral-800 cursor-pointer ml-5  hover:scale-125 trasition ease-in-out duration-300 dark:stroke-white dark:hover:fill-white'
        onClick={handle.exit}
      />
    ) : (
      <ArrowsPointingOutIcon
        className='h-6 w-6 stroke-neutral-800 cursor-pointer ml-5  hover:scale-125 trasition ease-in-out duration-300 dark:stroke-white dark:hover:fill-white'
        onClick={handle.enter}
      />
    )}
  </>
)
