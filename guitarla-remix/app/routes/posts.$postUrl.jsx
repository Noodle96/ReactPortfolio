import { useLoaderData } from '@remix-run/react';
import { getPost } from '~/models/posts.server';
import styles from '~/styles/blog.css';
import {formatearFecha} from '~/utils/helpers';


export async function loader({params}){
	//console.log(params);
	const {postUrl} = params;
	const post = await getPost(postUrl);
	if(post.data.length === 0){
		throw new Response('', {
			status: 404,
			statusText: 'Post No Encontrado',
		});
	}
	return post;
}


export function meta({data}){
	return [
		{title: `Guitarla - ${data.data[0].attributes.titulo}`},
		{description: `Guitarras venta de guitarras - ${data.data[0].attributes.titulo}`},
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

export default function PostUrl() {
	const post = useLoaderData();
	//console.log(post);
	const {titulo, contenido, imagen, publishedAt} = post?.data[0]?.attributes;
	return (
		<article className="contenedor post mt-3">
			<img src={imagen?.data?.attributes?.url} alt={`Imagen del post ${titulo}`} className="imagen" />
			<div className="contenido">
				<h3>{titulo}</h3>
				<p className="fecha">{formatearFecha(publishedAt)}</p>
				<p className="texto">{contenido}</p>
			</div>
		</article>	
	);
}
