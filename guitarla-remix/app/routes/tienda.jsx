import {useLoaderData} from '@remix-run/react'; 
import {getGuitarras} from '~/models/guitarras.server';
import Guitarra from '~/components/guitarra';


export async function loader(){
  const guitarras = await getGuitarras();
  console.log(guitarras);
  return guitarras.data;
}

function Tienda(){
  const guitarras = useLoaderData();
  // console.log(guitarras);
  return (
    <main className='contenedor'>
      <h2 className="heading">Nuestra Coleccion</h2>
      {
        guitarras.length && (
          <div className="guitarras-grid">
            {
              guitarras.map(guitarra => (
                <Guitarra  
                  
                />
                
              ))
            }
          </div>
        )
      }
    </main>
  )
}

export default Tienda