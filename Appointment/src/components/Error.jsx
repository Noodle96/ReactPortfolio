import React from 'react'

const Error = ({mensaje}) => {
  return (
    <div className=' bg-red-500 uppercase text-white text-center text-xs p-3 font-bold mb-3 rounded-md'>
        <p>{mensaje}</p>
    </div>
  )
}

export default Error
