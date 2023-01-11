import React, { useState,useEffect,Fragment } from 'react'
import { getGifs } from '../helpers/getGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    useEffect(() => {
        getGifs(category)
            .then( imgs => setImages(imgs));
    },[category]);
    // const [contador, setcontador] = useState(0);
    const [images, setImages] = useState([])
    

    // getGifs();

    return (
        <Fragment>
            <h3>{category}</h3>
            <div className='card-grid'>
                {/* <h2>{contador}</h2> */}
                {/* <button onClick={()=>{setcontador(contador+1)}}>testbutton</button> */}
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
        </Fragment>
    )
}
