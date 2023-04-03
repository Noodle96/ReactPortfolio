import React from 'react'

const Paciente = () => {
  return (
    <div className='m-3 bg-white shadow-md px-5 py-10 rounded-xl'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {' '}
            <span className='font-normal normal-case'>Jr Snike</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: {' '}
            <span className='font-normal normal-case'>Russell</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {' '}
            <span className='font-normal normal-case'>test@test.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: {' '}
            <span className='font-normal normal-case'>01-01-0000</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas Alta: {' '}
            <span className='font-normal normal-case'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptatibus ex nobis asperiores quia. Consequuntur porr
                o magnam animi minima facilis? Error nemo unde a tempor
                ibus quibusdam quae incidunt voluptatibus et possimus.
            </span>
        </p>
        </div>
  )
}

export default Paciente
