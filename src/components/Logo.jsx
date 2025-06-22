import React from 'react'

const Logo = ({textColor = 'text-fuchsia-900'}) => {
  return (
    <div className={`text-base lg:text-xl font-bold tracking-widest leading-tighter flex items-center justify-center ${textColor}`}>
      <img
        src={'/logoIco.png'}
        alt='logo imgae'
        className='h-12 bg-cover'
      />
      Blo-docs
    </div>
  )
}

export default Logo