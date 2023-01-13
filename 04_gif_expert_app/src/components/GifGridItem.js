import React from 'react'
import PropTypes from 'prop-types';
// {id,title,url,type,username}
export const GifGridItem = ({title,url}) => {
    // console.log({id,title,url});
    return (
        <div className='card animate__animated animate__bounce'>
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>

        // <Fragment>
        //     <div className="wrapper">
        //         <div className="product-img">
        //         <img src={url} alt={title} />
        //         </div>
        //         <div className="product-info">
        //             <div className="product-text">
        //                 <h1 >{title}</h1>
        //                 <h2>{type}</h2>
        //                 <p>{username}  </p>

        //             </div>
        //             <div className="product-price-btn">
        //                  <p><span>Free</span></p>
        //                  <button type="button">Download</button>
        //              </div>
        //         </div>
        //     </div>
        // </Fragment>
    )
}


GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}


