import React, { useState,useEffect,Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    const {data:imagesName,loading} = useFetchGifs(category);


    // const [contador, setcontador] = useState(0);
    
    

    // getGifs();

    return (
        <Fragment>
            <h3>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                
                {
                    imagesName.map(img => (
                        // <li key={img.id}>{img.title}</li>
                        <GifGridItem 
                            key={img.id}
                            // img={img}
                            {...img}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}
