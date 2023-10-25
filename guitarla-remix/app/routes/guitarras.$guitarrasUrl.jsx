import { useLoaderData } from '@remix-run/react';
import {getGuitarra} from '~/models/guitarras.server';
import styles from '~/styles/guitarras.css';

export function links(){
  return [
    {
      rel: 'stylesheet',
      href: styles,
    }
  ];
}

export async function loader({params}){
  //console.log(params); // { guitarrasUrl: 'urlName' }
  const {guitarrasUrl} = params;
  //console.log(guitarrasUrl); // urlName
  const guitarra = await getGuitarra(guitarrasUrl);
  console.log("Terminal: Desde await getGuitarra() in loader of guitarras$file");
  console.log(guitarra.data[0].attributes.nombre);
  return guitarra;
}


function GuitarrasUrl() {
  const guitarra = useLoaderData();
  console.log("In Console");
  //console.log(guitarra);
  console.log(guitarra.data[0].attributes.nombre);
  const {nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  return (
    <main className='contenedor guitarra'>
      <img src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} className="imagen" />
      <div className="contenido">
        <h3>{nombre}</h3>
        <p className="texto">{descripcion}</p>
        <p className="precio">${precio}</p>
      </div>
    </main>
  )
}

export default GuitarrasUrl