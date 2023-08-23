import {Link,} from '@remix-run/react';
import logo from '../../public/img/logo.svg';
import Navegacion from '~/components/navegacion';
function Header() {
	return (
		<header className='header'>
			<div className="contenedor barra">
				<Link to = "/">
					<img src={logo} alt="logotipo guitarla" className='logo'/>
				</Link>
				<Navegacion />
			</div>
		</header>
	)
}

export default Header
