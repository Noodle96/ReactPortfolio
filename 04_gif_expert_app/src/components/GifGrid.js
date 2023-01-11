import React, { useState,useEffect } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    useEffect(() => {
        getGifs();
    },[]);
    // const [contador, setcontador] = useState(0);
    const [images, setImages] = useState([])
    const getGifs = async() => {
        const url = 'http://api.giphy.com/v1/gifs/search?q=gohan&limit=15&api_key=T7s9dmoxXTBiSi4c6Eh4ZHV6siNEBCpQ';
        const respuesta = await fetch(url);
        const {data} = await respuesta.json();
        // console.log(data);
        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url,
            };
        });
        console.log(gifs);
        setImages(gifs);
    }

    // getGifs();

    return (
        <div>
            {/* <h2>{contador}</h2> */}
            {/* <button onClick={()=>{setcontador(contador+1)}}>testbutton</button> */}
            <h3>{category}</h3>
            {
                images.map(img => (
                    // <li key={img.id}>{img.title}</li>
                    <GifGridItem 
                        key={img.id}
                        // img={img}
                        {...img}
                    />
                ))
            }
            
        </div>
    )
}
