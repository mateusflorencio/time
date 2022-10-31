
import { BellAlertIcon } from '@heroicons/react/24/outline'

export const BellAlertIconComponent = ({ setState }) => (
  <BellAlertIcon
    className='block h-6 w-6 stroke-neutral-800 hover:fill-neutral-800 mr-5 hover:scale-125 cursor-pointer
    transition ease-in-out duration-300 dark:text-orange-600 dark:stroke-white dark:hover:fill-white'
    aria-hidden='true'
    onClick={() => setState((o) => ({ ...o, alarmeModalOpen: true }))}
  />
)
