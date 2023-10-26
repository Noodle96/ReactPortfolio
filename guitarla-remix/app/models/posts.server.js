// to posts
// http://localhost:1337/api/posts?populate=imagen
// http://localhost:1337/api/posts/id
export async function getPosts(){
	const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`);
	const resultado = await respuesta.json();
	return resultado;
}

// http://localhost:1337/api/posts?filters[url]=nameUrl&populate=imagen
export async function getPost(url){
	const respuesta = await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`);
	return await respuesta.json();
}