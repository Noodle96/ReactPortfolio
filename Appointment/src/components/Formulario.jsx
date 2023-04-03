import React from 'react'
import { useState } from 'react';

const Formulario = () => {
    const [mascota, setMascota] = useState('');
    const [propietario, setPropietatio] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e) =>{
        e.preventDefault();
        if([mascota.trim(),propietario.trim(),email.trim(),fecha.trim(),sintomas.trim()].includes('')){
            setError(true);
            return;
        }
        setError(false);
    }

    return (
        <div className=' md:w-1/2 lg:w-2/5 mx-3'>
            <h2 className=' text-center font-black text-3xl'>
                Seguimiento Pacientes
            </h2>
            <p className=' text-xl mt-5 text-center mb-10'>
                Añade Pacientes y {''}
                <span className='text-indigo-600 font-black'>Administralos</span>
            </p>
            <form onSubmit={handleSubmit} action="#" className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>
                {error &&
                    <div className=' bg-red-500 uppercase text-white text-center text-xs p-3 font-bold mb-3 rounded-md'>
                        <p>
                            Todos los Campos son Obligatorios
                        </p>
                    </div>
                }
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>
                        Mascota:
                    </label>
                    <input
                        id='mascota'
                        type="text"
                        placeholder='Nombre Mascota'
                        className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
                        value= {mascota}
                        onChange = {(e) => setMascota(e.target.value)}
                    />
                </div>{/* END ROW */}
                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>
                        Propietario:
                    </label>
                    <input
                        id='propietario'
                        type="text"
                        placeholder='Nombre del propietario'
                        className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
                        value= {propietario}
                        onChange = {(e) => setPropietatio(e.target.value)}
                    />
                </div>{/* END ROW */}
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>
                        Email:
                    </label>
                    <input
                        id='email'
                        type="email"
                        placeholder='Email del propietario - # Emergencia'
                        className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
                        value= {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </div>{/* END ROW */}
                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>
                        Fecha Alta:
                    </label>
                    <input
                        id='alta'
                        type="date"
                        className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
                        value= {fecha}
                        onChange = {(e) => setFecha(e.target.value)}
                    />
                </div>{/* END ROW */}
                <div className='mb-5'>
                    <label htmlFor='sintomas' className='block text-gray-700 uppercase font-bold'>
                        Sintomas:
                    </label>
                    <textarea
                        name="" 
                        id="sintomas"
                        rows= '8'
                        className='border-2 w-full p-2 m-2 placeholder-gray-400 rounded-md'
                        placeholder='Describe los sintomas'
                        value= {sintomas}
                        onChange = {(e) => setSintomas(e.target.value)}
                    >
                    </textarea>
                </div>{/* END ROW */}
                <input
                    type="submit"
                    value="Agregar Paciente"
                    className=' bg-indigo-600 w-full p-3 text-white uppercase
                                hover:bg-indigo-700 font-bold cursor-pointer transition-all'
                />
            </form>
        </div>
  )
}

export default Formulario;