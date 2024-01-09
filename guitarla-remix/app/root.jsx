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
import { useEffect, useState } from 'react';
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
	// Si en caso JSON.parse(localStorage.getItem('carrito'))  sea null entonces asignar a carritoLs un [].
	const carritoLS = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('carrito')) ?? []:[];
	const [carrito, setCarrito] = useState(carritoLS);
	//	locale storage 
	//outside call localStorage => not defined
	useEffect(() => {
		//inside call localStorage => correct
		// Se ejecuta una sola vez  enla parte del cliente(navegador) de remix
		localStorage.setItem('carrito', JSON.stringify(carrito))
	}, [carrito])
	
	const agregarCarrito = guitarra => {
		// console.log("agregando ...", guitarra);
		//setCarrito([...carrito,guitarra]);
		if(carrito.some(guitarraState => guitarraState.id === guitarra.id)){
			// console.log('guitarra existente');
			const carritoActualizado = carrito.map(guitarraNueva => {
				if(guitarraNueva.id === guitarra.id){
					guitarraNueva.cantidad = guitarra.cantidad;
				}
				return guitarraNueva;
			});
			//añadir al carrito
			setCarrito(carritoActualizado);
		}else{
			setCarrito([...carrito, guitarra]);
		}
	}
	const actualizarCantidadInCarrito = guitarra => {
		const carritoActualizado = carrito.map(guitarraState => {
			if(guitarraState.id === guitarra.id){
				guitarraState.cantidad = guitarra.cantidad;
			}
			return guitarraState;
		})
		setCarrito(carritoActualizado);
	}
	const eliminarGuitarra = id => {
		// console.log("eliminando guitarra: ", id);
		const carritoActualizado = carrito.filter(guitarraState => guitarraState.id != id);
		setCarrito(carritoActualizado);
	}
	return (
		<Document>
			<Outlet
				context={
					{
						//mensajeCarta: "Princess",
						//costElixir: 3,
						agregarCarrito,
						carrito,
						actualizarCantidadInCarrito,
						eliminarGuitarra,
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
