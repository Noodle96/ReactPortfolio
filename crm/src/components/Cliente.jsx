import React from 'react'

const Cliente = ({cliente}) => {
    const {id, nombre, telefono, email, empresa} = cliente;
    return (
        <tr className="border-b">
            <td className='p-6 space-y-0.5 '>
                <p className="text-base  text-gray-800">{nombre}</p>
                <p className='text-green-400 font-black '>{empresa}</p>
            </td>

            <td className="p-6">
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Email: </span>{email} </p>
                <p className="text-gray-600"> <span className="text-gray-800 uppercase font-bold">Tel: </span>{telefono} </p>
            </td>

            <td className="p-6 flex gap-10 justify-end">
                <button
                    type="button"
                    className="text-blue-600 hover:text-blue-700 uppercase font-bold text-xs"
                    // onClick={() => navigate(`/clientes/${id}/editar`) }
                >
                    Editar
                </button>
                <button
                    type="submit"
                    className="text-red-600 hover:text-red-700 uppercase font-bold text-xs "
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente