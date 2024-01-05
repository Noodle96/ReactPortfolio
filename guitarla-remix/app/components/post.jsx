import { Link } from "@remix-run/react";
import {formatearFecha} from '~/utils/helpers';
export default function Post({post}) {
    //console.log(post);
    const {titulo, contenido, imagen ,url, publishedAt} = post;
    // console.log("prueba desde post");
    // console.log(titulo);
    // console.log(contenido);
    // console.log(imagen);
    // console.log(url);
    // console.log(publishedAt);
    return (
        <article className="post">
            {/* <img src={imagen.data.attributes.formats.small.url} alt={`Posts ${titulo}`} className="imagen" /> */}
            <img src={imagen.data.attributes.formats.small.url} alt={`Posts ${titulo}`} className="imagen" />
            <div className="contenido">
                <h3>{titulo}</h3>
                <p className="fecha">{formatearFecha(publishedAt)}</p>
                <p className="resumen">{contenido}</p>
                {/* <p className="url">{url}</p> */}
                <Link className="enlace" to={`/posts/${url}`}>Leer Post</Link>
            </div>
        </article>
    )
}
