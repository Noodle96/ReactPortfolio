import React, { Fragment } from 'react'
import {useLoaderData} from 'react-router-dom';
export function loader(){
    // console.log('desde loader');
    const clientes = [
        {
            id: 1,
            nombre: 'Juan',
            telefono: 102013313,
            email: "juan@nyt.com",
            empresa: 'No Yellow Team'
        },
        {
            id: 2,
            nombre: 'Karen',
            telefono: 138198313,
            email: "karen@nyt.com",
            empresa: 'No Yellow Team'
        },
        {
            id: 3,
            nombre: 'Josue',
            telefono: 31983913,
            email: "josue@nyt.com",
            empresa: 'No Yellow Team'
        },
        {
            id: 4,
            nombre: 'Miguel',
            telefono: 319381983,
            email: "miguelnyt.comm",
            empresa: 'No Yellow Team'
        },
        {
            id: 5,
            nombre: 'Pedro',
            telefono: 1398198938,
            email: "pedro@nyt.com",
            empresa: 'No Yellow Team'
        },
    ];
    return clientes;
}
const Index = () => {
    // const datos = useLoaderData();
    // console.log(datos);
    return (
        <Fragment>
            <h1 className="font-black text-4xl text-blue-700">Clientes</h1>
            <p className="mt-3">Administra tus Clientes</p>
        </Fragment>
    )
}

export default Index
