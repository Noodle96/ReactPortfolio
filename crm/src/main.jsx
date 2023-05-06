import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Layaout from './components/Layaout';
import ClienteNuevo, { action as clienteNuevoAction} from './pages/ClienteNuevo';
import Index, {loader as clientesLoader} from './pages/Index';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Layaout />,
        children : [
            {
                index: true,
                element: <Index />,
                loader:  clientesLoader
            },
            {
                path:'/clientes/nuevo',
                element: <ClienteNuevo />,
                action: clienteNuevoAction
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* //instead of <App /> => <RouterProvider />*/}
        <RouterProvider
            router={router}
        />
    </React.StrictMode>,
)
