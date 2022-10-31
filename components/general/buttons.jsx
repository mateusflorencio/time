export const ConfirmButton = ({ name, onClick }) => (
  <button
    type='button'
    className='inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base
      font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
    onClick={onClick}
  >
    {name}
  </button>
)

export const CancelButton = ({ name, onClick }) => (
  <button
    type='button'
    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white  px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
  dark:border-none dark:text-red-500 dark:bg-zinc-800 dark:hover:bg-red-900 dark:hover:text-white'
    onClick={onClick}
  >
    {name}
  </button>
)
