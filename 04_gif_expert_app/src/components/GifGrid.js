import React from 'react'

export const GifGrid = ({category}) => {
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
    }

    getGifs();

    return (
        <div>
            <h3>{category}</h3>
        </div>
    )
}
