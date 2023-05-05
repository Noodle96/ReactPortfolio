import React from 'react'
import {Outlet, Link, useLocation} from 'react-router-dom';
const Layaout = () => {
    const location = useLocation();
    console.log(location);
    return (
        <div className='md:flex md:min-h-screen'>
            <aside className=' md:w-1/4 bg-red-500  px-5 py-10'>
                <h2 className=' text-2xl font-black text-center text-white'>CRM - Clientes</h2>
                <Link 
                    className={`${location.pathname === '/' ? 'text-blue-700 ' : 'text-white'} text-lg block mt-2 hover:text-blue-700 font-black`}
                    to="/"
                >Clientes</Link>
                <Link
                    className={`${location.pathname === '/clientes/nuevo' ? 'text-blue-700' : 'text-white'} text-lg block mt-2 hover:text-blue-700 font-black`}
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
