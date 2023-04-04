import React from 'react'
import Paciente from './Paciente'

const ListadoPacientes = ({pacientes, setPacienteToEdit, eliminarPaciente}) => {

    
    return (
        <div className=' md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-scroll'>
            {pacientes && pacientes.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Listado de Pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Adminitra tus{' '}
                        <span className=' text-indigo-600 font-bold'>
                            Pacientes y Citas
                        </span>
                    </p>
                    {
                        pacientes.map(paciente => (
                            <Paciente
                                key={paciente.id}
                                paciente = {paciente}
                                setPacienteToEdit={setPacienteToEdit}
                                eliminarPaciente = {eliminarPaciente}
                            />
                        ))
                    }
                </>
            ) : (
                <>
                    <h2 className='font-black text-3xl text-center'>No hay pacientes</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Cominenza agregando pacientes{' '}
                        <span className=' text-indigo-600 font-bold'>
                            y apareceran en este lugar
                        </span>
                    </p>
                </>
            ) }
        </div>
  )
}

export default ListadoPacientes
