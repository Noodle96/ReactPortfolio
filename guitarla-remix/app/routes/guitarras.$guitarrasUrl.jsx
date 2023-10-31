import { useState } from 'react';
import { useLoaderData, useOutletContext} from '@remix-run/react';
import {getGuitarra} from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css';



export async function loader({params}){
    //console.log(params); // { guitarrasUrl: 'urlName' }
    const {guitarrasUrl} = params;
    //console.log(guitarrasUrl); // urlName
    const guitarra = await getGuitarra(guitarrasUrl);
    console.log("Terminal: Desde await getGuitarra() in loader of guitarras$file");
    console.log(guitarra);
    //console.log(guitarra.data[0].attributes.nombre);
    if(guitarra.data.length === 0){
        console.log("file.$name data vacio");
        throw new Response('',{
            status: 404,
            statusText: 'Guitarra no encontrada',
        });
    }
    return guitarra;
}

export function meta({data}){
  // solo se llama meta cuando data tenga informacion
  //console.log("desde meta");
  //console.log(data);
  // return [];
  // if(!data || Object.keys(data).length === 0){
  //   return [
    
  //     {title: `Guitarla - guitarra no encontrada`},
  //     {description: `Guitarras venta de guitarras - guitarra no encontrada`},
    
  //   ];
  // }
  //console.log("Desde data");
  //console.log(data.data);
  return [
    
      {title: `Guitarla - ${data.data[0].attributes.nombre}`},
      {description: `Guitarras venta de guitarras - ${data.data[0].attributes.nombre}`},
    
  ];
}

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ];
}


function GuitarrasUrl() {
    // const data = useOutletContext();
    // console.log(data);
    const {agregarCarrito} = useOutletContext();
    const [cantidad, setCantidad] = useState(0);
    const guitarra = useLoaderData();
    console.log("In Console");
    //console.log(guitarra);
    console.log(guitarra.data[0].attributes.nombre);
    const {nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;

    const handleSubmit = e => {
        e.preventDefault();
        if(cantidad < 1){
            alert("Debe de seleccionar una cantidad positiva");
            return;
        }
        const guitarraObjeto = {
            id: guitarra.data[0].id,
            imagen: imagen.data.attributes.url,
            nombre,
            precio,
            cantidad,
        }
        console.log(guitarraObjeto);
        agregarCarrito(guitarraObjeto);
    }



    return (
        <main className='contenedor guitarra'>
            <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} className="imagen" />
            <div className="contenido">
                <h3>{nombre}</h3>
                <p className="texto">{descripcion}</p>
                <p className="precio">${precio}</p>
                <form onSubmit={handleSubmit} className="formulario">
                    <label htmlFor="cantidad">Cantidad</label>
                    <select
                      onChange={ e => setCantidad(+e.target.value)}
                        // onChange={ e => setCantidad(parseInt(e.target.value))}
                        id="cantidad"
                    >
                        <option value="0">-- Selecciones --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                    <input type="submit" value="Agregar al carrito" />
                </form>
            </div>
        </main>
    )
}

export default GuitarrasUrl