export default function InputForm({ title, placeholder, property, refProps }) {
  return (
    <div>
      <label
        htmlFor='price'
        className='block text-sm font-medium text-gray-700'
      >
        {title}
      </label>
      <div className='relative mt-1 rounded-md shadow-sm w-full'>
        <input
          ref={refProps}
          type={property.type}
          min={property.min}
          max={property.max}
          className='block w-full rounded-md ring-1 border-gray-500 p-3 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm'
          placeholder={placeholder}
        />
      </div>
    </div>
  )
}
