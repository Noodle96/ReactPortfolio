export async function getGuitarras(){
	const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
	const resultado = await respuesta.json();
	// console.log(resultado);
	// console.log('desde loader tienda');
	// console.log(process.env.API_URL);
	return resultado;
}

export async function getGuitarra(url){
	const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`);
	return await respuesta.json();
}