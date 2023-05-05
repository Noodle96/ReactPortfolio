import React from 'react'
import {Outlet, Link, useLocation} from 'react-router-dom';
const Layaout = () => {
    const location = useLocation();
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className=' md:w-1/4 bg-blue-600 px-5 py-10'>
                <h2 className=' text-2xl font-black text-center text-white'>CRM - Clientes</h2>
                <Link 
                    className={`${location.pathname === '/' ? 'text-blue-300' : 'text-white'} text-lg block mt-2 hover:text-blue-300 text-white`}
                    to="/"
                >Clientes</Link>
                <Link
                    className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-300' : 'text-white'} text-lg block mt-2 hover:text-blue-300 text-white`}
                    to="/clientes/nuevo"
                >Nuevo Cliente</Link>
            </aside>
            <main className='md:w-3/4 p-10 md:h-screen overflow-scroll'>
                <Outlet />
            </main>
        </div>
    )
}

export default Layaout
