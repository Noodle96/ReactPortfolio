import React from 'react'

const Formulario = () => {
  return (
    <div className=' md:w-1/2 lg:w-2/5'>
         <h2 className=' text-center font-black text-3xl'>
            Seguimiento Pacientes
        </h2>
        <p className=' text-base mt-5 text-center'>
            Añade Pacientes y {''}
            <span className='text-indigo-600 font-bold'>Administralos</span>
        </p>
    </div>
  )
}

export default Formulario;