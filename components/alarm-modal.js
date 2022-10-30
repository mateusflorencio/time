import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { BellAlertIcon } from '@heroicons/react/24/outline'

import InputForm from './select/input-forms'

import { useRecoilState } from 'recoil'
import Atoms from './atoms'

export default function AlarmModal() {
  const [{ alarmeModalOpen }, setState] = useRecoilState(Atoms)
  const cancelButtonRef = useRef(null)

  return (
    <Transition.Root show={alarmeModalOpen} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        initialFocus={cancelButtonRef}
        onClose={() => setState((o) => ({ ...o, alarmeModalOpen: false }))}
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
                      <BellAlertIcon
                        className='h-6 w-6 text-blue-600 dark:text-red-900'
                        aria-hidden='true'
                      />
                    </div>
                    <div className='mt-3 w-full text-center sm:mt-0 sm:ml-4 sm:text-left'>
                      <Dialog.Title
                        as='h3'
                        className='text-lg font-medium leading-6 text-gray-900 dark:text-gray-50'
                      >
                        Defina uma alarme
                      </Dialog.Title>
                      <div className='mt-2 flex-col sm:flex-row flex flex-row w-full'>
                        <div className={'m-3 sm:w-1/2'}>
                          <InputForm
                            refProps={cancelButtonRef}
                            title={'Hora '}
                            placeholder={'HH'}
                            property={{ type: 'number', min: '0', max: '23' }}
                          />
                        </div>
                        <div className={'m-3 sm:w-1/2'}>
                          <InputForm
                            title={'Minuto'}
                            placeholder={'MM'}
                            property={{ type: 'number', min: '0', max: '59' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='bg-gray-50 dark:bg-zinc-900 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'>
                  <button
                    type='button'
                    className='inline-flex w-full justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm'
                    onClick={() =>
                      setState((o) => ({ ...o, alarmeModalOpen: false }))
                    }
                  >
                    Confirma
                  </button>
                  <button
                    type='button'
                    className='mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white  px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm
                    dark:border-none dark:text-red-500 dark:bg-zinc-800 dark:hover:bg-red-900 dark:hover:text-white'
                    onClick={() =>
                      setState((o) => ({ ...o, alarmeModalOpen: false }))
                    }
                  >
                    Cancelar
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
