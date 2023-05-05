import React, { Fragment } from 'react'
import { useNavigate} from 'react-router-dom';
const ClienteNuevo = () => {
    const navigate = useNavigate();
    return (
        <Fragment>
            <h1 className="font-black text-4xl text-blue-700">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los campos para agregar un nuevo cliente</p>
            <div className='flex justify-end'>
                <button
                    className='bg-blue-800 text-white px-3 py-1 font-bold uppercase text-xs'
                    onClick={ () => navigate('/')}
                >
                    volver
                </button>
            </div>
            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10'>
                <p>formulario aqui</p>
            </div>
        </Fragment>
    )
}

export default ClienteNuevo
