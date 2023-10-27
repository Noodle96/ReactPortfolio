// rfce
import { useLoaderData } from "@remix-run/react";
import { Fragment } from "react";
import { getGuitarras } from "~/models/guitarras.server";
import { getPosts } from "~/models/posts.server";
import ListadoGuitarras from "~/components/listadoGuitarras";
import ListadoPosts from "~/components/listadoPosts";
import stylesGuitarra from '~/styles/guitarras.css'
import stylePosts from '~/styles/blog.css'

export function links(){
  return[
    {
      rel: 'stylesheet',
      href: stylesGuitarra,
    },
    {
      rel: 'stylesheet',
      href: stylePosts,
    }
  ];
}


export async function loader(){
    // const guitarras = await getGuitarras();
    // console.log(guitarras);
    // const posts = await getPosts();
    // console.log(posts);

    // best performance
    const [guitarras,posts] = await Promise.all([
        getGuitarras(),
        getPosts(),
    ]);
    // console.log("Desde loader");
    // console.log(guitarras);
    // console.log(posts);
    return {
        //guitarras.data, error
        guitarras: guitarras.data,
        posts: posts.data,
    };
}

export function meta(){

}


function Index() {
    const {guitarras, posts} = useLoaderData();
    // console.log("Desde index");
    // console.log(guitarras);
    // console.log(posts);
    return (
        <Fragment>
            <main className='contenedor'>
                <ListadoGuitarras
                    guitarras={guitarras}
                />
            </main>
            <section className="contenedor">
                <ListadoPosts
                    posts={posts}
                />
            </section>
        </Fragment>
    )
}

export default Index