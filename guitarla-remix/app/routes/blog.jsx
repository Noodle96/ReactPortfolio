import { useLoaderData } from '@remix-run/react';
import Post from '~/components/post';
import {getPosts} from '~/models/posts.server'

export async function loader(){
	const posts =  await getPosts(); 
	//console.log("posts");
	//console.log(posts);
	return posts.data;
}


function Blog() {
	const posts = useLoaderData(); // lee lo que return (loader)
	return (
		<main className="contenedot">
			<h2 className="heading">Blog</h2>
			<div className="blog">
				{
					posts.map(post =>(
						<Post
							key={post.id}
							post={post.attributes}
						/>
					))
				}
			</div>
		</main>
	)
}

export default Blog
