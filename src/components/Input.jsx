import React from 'react'

const Input = React.forwardRef(function Input({
    label,
    type = "text",
    classname = '',
    ...props
}, ref) {
    const id = React.useId()

    return (
        <div className='w-full grid grid-cols-1 gap-2'>
            {
                label && <label
                    className='inline-block mb-1 pl-1 font-semibold text-fuchsia-950'
                    htmlFor={id}
                >
                    {label}
                </label>
            }
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white text-fuchsia-950 font-semibold text-base outline-none focus:bg-gray-50 duration-200 burder border-urple-700 w-full ${classname}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})
export default Input