import React, { Fragment } from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
import PropTypes from 'prop-types';


export const GifGrid = ({category}) => {
    const {data:imagesName,loading} = useFetchGifs(category);
    return (
        <Fragment>
            <h3 className='card animate__animated animate__backInDown'>{category}</h3>
            {loading && <p>Loading...</p>}
            <div className='card-grid'>
                
                {
                    imagesName.map(img => (
                        // <li key={img.id}>{img.title}</li>
                        <GifGridItem 
                            key={img.id}
                            //img={img}
                            {...img}
                            // title={img.title}
                            // url={img.url}
                        />
                    ))
                }
            </div>
        </Fragment>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}