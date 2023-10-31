import {
	Link,
	useLocation,
} from '@remix-run/react';
import imagenCarrito from '../../public/img/carrito.png';

export default function Navegacion() {
	const location = useLocation();
	// console.log(location);
  return (
	<nav className="navegacion">
		<Link to="/" className={location.pathname === '/'? 'active':''}>
			Inicio
		</Link>
		<Link to="nosotros" className={location.pathname === '/nosotros'? 'active':''}>
			Nosotros
		</Link>
		<Link to="tienda" className={location.pathname === '/tienda'? 'active':''}>
			Tienda
		</Link>
		<Link to="blog" className={location.pathname === '/blog'? 'active':''}>
			Blog
		</Link>
		<Link to="carrito">
			<img src={imagenCarrito} alt="imagen carrito" />
		</Link>

	</nav>
  )
}
