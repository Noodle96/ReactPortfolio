// to curso
// http://localhost:1337/api/curso
// http://localhost:1337/api/curso?populate=imagen
export async function getCurso(){
	const respuesta = await fetch(`${process.env.API_URL}/curso?populate=imagen`);
	return await respuesta.json();
}