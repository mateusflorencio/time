import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export function Modal({ state, onClose, children, title, icon, button, buttonTwo }) {
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={state} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={onClose}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
        </Transition.Child>
        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg'>
                <div className='bg-white dark:bg-zinc-800  px-4 pt-5 pb-4 sm:p-6 sm:pb-4'>
                  <div className='sm:flex sm:items-start'>
                    <div className='mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 dark:bg-red-300 sm:mx-0 sm:h-10 sm:w-10'>
                      { icon }
                    </div>
                    <div className='mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-50'
                      >
                        {title}
                      </Dialog.Title>
                      <div className='mt-2 flex-col sm:flex-row flex flex-row w-full'>
                        {children}
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 dark:bg-zinc-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  {button}
                  {buttonTwo}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
