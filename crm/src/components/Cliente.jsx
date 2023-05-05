import React from 'react'

const Cliente = ({cliente}) => {
    const {id, nombre, telefono, email, empresa} = cliente;
    return (
        <tr>
            <td className='p-4'>
                {nombre}
            </td>
        </tr>
    )
}

export default Cliente