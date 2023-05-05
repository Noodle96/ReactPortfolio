import React from 'react'
import {Outlet} from 'react-router-dom';
const Layaout = () => {
return (
    <div className='md:flex md:min-h-screen'>
        <aside className=' md:w-1/4 bg-blue-600 px-5 py-10'>
            <h2 className=' text-2xl font-black text-center text-white'>CRM - Clientes</h2>
        </aside>
        <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
            <Outlet />
        </main>
    </div>
)
}

export default Layaout
