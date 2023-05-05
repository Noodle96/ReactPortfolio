import React, { Fragment } from 'react'
import {useLoaderData} from 'react-router-dom';
import Cliente from '../components/Cliente';
import {useNavigate} from 'react-router-dom';

export function loader(){
    // console.log('desde loader');
    const clientes = [
        {
            id: 1,
            nombre: 'Carol',
            telefono: 102013313,
            email: "carol@nyt.com",
            empresa: 'Analisis Matematico E.R'
        },
        {
            id: 2,
            nombre: 'Alicia',
            telefono: 138198313,
            email: "alicia@nyt.com",
            empresa: 'Analisis real E.R'
        },
        {
            id: 3,
            nombre: 'David',
            telefono: 31983913,
            email: "david@nyt.com",
            empresa: 'Inferencia E.R'
        },
        {
            id: 4,
            nombre: 'Dalia',
            telefono: 319381983,
            email: "dalia@nyt.com",
            empresa: 'AlgebraLineal E.R'
        },
        {
            id: 5,
            nombre: 'Jhoel',
            telefono: 1398198938,
            email: "jhoel@nyt.com",
            empresa: 'Algebra E.R'
        },
    ];
    return clientes;
}
const Index = () => {
    // This hook save the data of "loader"
    // This hook only exists in react router dom
    const datos = useLoaderData();
    const navigate = useNavigate();
    // console.log(datos);
    return (
        <Fragment>
            <h1 className="font-black text-4xl text-blue-700">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>
            <div className='flex justify-end'>
                <button
                    className='bg-green-500  text-white px-3 py-1 font-bold uppercase text-xs'
                    onClick={ () => navigate('/clientes/nuevo')}
                >
                    Nuevo Cliente
                </button>

            </div>


            {datos.length ? (
                <table className='w-full bg-white shadow mt-5 table-auto'>
                    <thead className='bg-blue-700 text-white'>
                        <tr>
                            <th className='p-2'>Cliente</th>
                            <th className='p-2'>Contacto</th>
                            <th className='p-2'>Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                        {datos.map( cliente => (
                            <Cliente
                                cliente={cliente}
                                key={cliente.id}
                            />
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-center mt-10">No Hay Clientes aún</p>
            )}

        </Fragment>
    )
}

export default Index
