
export const getGifs = async(category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=9&api_key=T7s9dmoxXTBiSi4c6Eh4ZHV6siNEBCpQ`;
    const respuesta = await fetch(url);
    const {data} = await respuesta.json();
    // console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
            type:img.type,
            username:img.username
        };
    });
    // console.log('hello');
    // console.log(gifs);
    return gifs;
    
    // setImages(gifs);
}