import React from 'react'
import  './SearchResult.css'

const SearchResult = ({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) => {
    return (
        <div className='searchResult'>
            <img 
                className='searchResult__image'
                src={img} 
                alt={'asdasd'}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
             />
             <div className='searchResult__info'>
                <p>Private rooms of {location}</p>
                <h1>{title}</h1>
                <p>{description}</p>
                <h3>                                                                                                                                                                                                                                    
                    Star : {star}
                </h3>
                <h4>
                    {price}
                </h4>
                <h5>
                    {total}
                </h5>
             </div>
        </div>                                                                                                                                                                                                                                                                     
    )
}

export default SearchResult
