import React from 'react'

const HeaderMenu = ({ title }) => {
  return (
    <div className='flex justify-center text-center'>
      <h3 className='font-bold text-2xl p-8'>{title}</h3>
    </div>
  )
}

export default HeaderMenu