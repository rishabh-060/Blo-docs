import React from 'react'

const Loader = ({text, highlightText}) => {
  return (
    <div className='h-screen w-screen flex flex-col-reverse items-center justify-center gap-3 bg-purple-200'>
      <p className='text-lg lg:text-xl text-gray-800 font-semibold tracking-wide'>{text} <span className='text-xl lg:text-2xl font-medium tracking-widest text-gray-900'>{highlightText}</span></p>
      
      <div className='border border-l-4 border-r-4 border-t-0 border-b-0 animate-spin rounded-full p-5 border-gray-600'></div>
    </div>
  )
}

export default Loader