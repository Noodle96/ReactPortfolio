import {
	Meta,
	Links,
	Outlet,
	Scripts,
	LiveReload,
	useRouteError,
	isRouteErrorResponse,
	Link,
} from '@remix-run/react'
import styles from '~/styles/index.css';
import Header from '~/components/header.jsx'
import Footer from '~/components/footer';
import { useState } from 'react';
// export function meta() {
//     return (
//         [
//             {charset: 'utf-8'},
//             {title: 'GuitarLA - Remix'},
//             {viewport: "width=device-width,initial-scale=1"}
// 		]
//     )
// }


export function meta() {
    const error = useRouteError();
    if (error?.status === 404) {
        return ([
            {
                title: `GuitarLA - 404`,
            },
            {
                description: `Contenido no encontrado`
            }
        ])
    }
 
    return [
        { charset: "utf-8" },
        { title: "GuitarLA - Remix" },
        { name: "viewport", content: "width=device-width,initial-scale=1" },
        { description: 'Venta de guitarras, blog de música y más!' }
    ];
}



export  function links(){
	return[
		{
			rel: 'stylesheet',
			href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.googleapis.com',
		},
		{
			rel: 'preconnect',
			href: 'https://fonts.gstatic.com',
			crossOrigin: "true",
		},
		{
			rel: 'stylesheet',
			href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap',
		},
		{
			rel: 'stylesheet',
			href: styles,
		},
	];
}
export default function App(){
	const [carrito, setCarrito] = useState([]);
	const agregarCarrito = guitarra => {
		// console.log("agregando ...", guitarra);
		setCarrito([...carrito,guitarra]);
	}
	return (
		<Document>
			<Outlet
				context={
					{
						//mensajeCarta: "Princess",
						//costElixir: 3,
						agregarCarrito
					}
				}
			/>	
		</Document>
	) 
}

function Document({children}) {
    return (
        <html lang="es">
            <head>
                 <Meta />
				 <Links />
            </head>
            <body>
				<Header />
                {children}
				<Footer />
				<Scripts />
				<LiveReload />
            </body>
        </html>
    )
}


/*Manage Errors*/

export function ErrorBoundary(){
	const error = useRouteError();
	if(isRouteErrorResponse(error)){
		return(
			<Document>
				<p className="error">{error.status} {error.statusText}</p>
				<Link to="/" className='error-enlace'>Volver página principal</Link>
			</Document>
		);
	}
}
