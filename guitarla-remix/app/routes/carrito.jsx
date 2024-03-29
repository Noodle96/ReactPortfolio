
import styles from '~/styles/carrito.css';
import { useOutletContext } from '@remix-run/react';
import { useEffect, useState } from 'react';
import { ClientOnly } from 'remix-utils/client-only';
export function meta() {
    return (
        [
            {title: 'GuitarLA - carrito de compras'},
            {description: 'seccion carrito de compras'}
		]
    )
}

export function links(){
	return [
		{
			rel: 'stylesheet',
			href: styles,
		}
	];
}
export default function Carrito() {
	const [total, setTotal] = useState(0);
	const {carrito,actualizarCantidadInCarrito,eliminarGuitarra} = useOutletContext();
	// console.log('====================================');
	// console.log("Desde carrito");
	console.log(carrito);
	// console.log('====================================');
	useEffect(() => {
		const calculoTotal = carrito.reduce((total, producto) => 
			total + (producto.cantidad* producto.precio)
		, 0);
		setTotal(calculoTotal)
	}, [carrito]);
	
	return (
		<main className="contenedor">
			<h1 className="heading">Carrito de compras</h1>
			<div className="contenido">
				<div className="carrito">
					<h2>Articulos</h2>
					{carrito?.length === 0 ? 'Carrito Vacio' : (
						carrito.map(producto => (
							<div key={producto.id} className='producto'>
								<div>
									<img src={producto.imagen} alt={`imagen ${producto.nombre}`} />
								</div>
								<div>
									<p className="nombre">{producto.nombre}</p>
									<p className="cantidad">Cantidad:</p>
									<select
										value={producto.cantidad}
										className="select"
										onChange={e => actualizarCantidadInCarrito({
											cantidad : e.target.value,
											id: producto.id,
										})}
									>
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
									<p className="precio">Precio: <span>$ {producto.precio}</span></p>
									<p className="subtotal">Subtotal: <span>$ {producto.precio*producto.cantidad}</span>  </p>
								</div>
								<button
									type='button'
									className='btn_eliminar'
									onClick={()=> eliminarGuitarra(producto.id)}
								>
									X
								</button>
							</div>
						))
					)
					}
				</div>
				<aside className="resumen">
					<h3>Resumen del pedido</h3>
					<p>Total a pagar: $ {total}</p>
				</aside>
			</div>
		</main>
  )
}
