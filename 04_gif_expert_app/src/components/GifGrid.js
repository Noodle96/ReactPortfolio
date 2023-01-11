import React, { useState,useEffect,Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    // const [images, setImages] = useState([]);
    const {data,loading} = useFetchGifs();
    
    // useEffect(() => {
    //     getGifs(category)
    //         .then( imgs => setImages(imgs));
    // },[category]);

    // const [contador, setcontador] = useState(0);
    
    

    // getGifs();

    return (
        <Fragment>
            <h3>{category}</h3>
            {loading ? 'Cargando...': 'Data Cargada'}
            {/* <div className='card-grid'>
                
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
            </div> */}
        </Fragment>
    )
}
