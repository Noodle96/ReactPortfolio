import { useLoaderData } from '@remix-run/react';
import {getGuitarra} from '~/models/guitarras.server';
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
  console.log(guitarra.data[0].attributes.nombre);
  return (
	<div>GuitarrasUrl</div>
  )
}

export default GuitarrasUrl