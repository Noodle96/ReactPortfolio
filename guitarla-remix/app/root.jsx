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
export function meta() {
    return (
        [
            {charset: 'utf-8'},
            {title: 'GuitarLA - Remix'},
            {viewport: "width=device-width,initial-scale=1"}
		]
    )
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
	return (
		<Document>
			<Outlet />	
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