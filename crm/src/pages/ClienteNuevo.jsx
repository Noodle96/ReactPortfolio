import React, { Fragment } from 'react'
import { useNavigate, Form} from 'react-router-dom';
import Formulario from '../components/Formulario';

export function action(){
    console.log('action llamado');
    return 'action llamado';
}

const ClienteNuevo = () => {

    // MANEJO DE PERICIONES HTTP

    const navigate = useNavigate();
    return (
        <Fragment>
            <h1 className="font-black text-4xl text-blue-700">Nuevo Cliente</h1>
            <p className="mt-3">Llena todos los campos para agregar un nuevo cliente</p>
            {/* BOTON PARA REGRESAR AL INICIO */}
            <div className='flex justify-end'>
                <button
                    className='bg-blue-700 text-white px-3 py-1 font-bold uppercase text-xs'
                    onClick={ () => navigate('/')}
                >
                    volver
                </button>
            </div>
            {/* FORMULARIO */}
            <div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-16 '>
                <Form
                    method='POST'
                >
                    <Formulario />
                    <input
                        type = "submit"
                        className = 'mt-5 w-full bg-blue-700 p-3 font-bold uppercase text-white text-sm'
                        value = "Registrar Cliente"
                    />
                </Form>
            </div>
        </Fragment>
    )
}

export default ClienteNuevo
