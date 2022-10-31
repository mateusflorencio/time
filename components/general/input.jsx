export default function InputForm({ title, placeholder, property, refProps, onChange }) {
  return (
    <div>
      <label
        htmlFor={title}
        className='block text-sm font-medium text-gray-700 dark:text-zinc-50 '
      >
        {title}
      </label>
      <div className='relative mt-1 rounded-md shadow-sm w-full'>
        <input
          name={title}
          ref={refProps}
          type={property.type}
          min={property.min}
          max={property.max}
          className='block w-full rounded-md ring-1 border-gray-500 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm 
          dark:bg-zinc-700 dark:ring-0'
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  )
}
