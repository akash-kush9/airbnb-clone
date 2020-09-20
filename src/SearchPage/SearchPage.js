import React from 'react'
import './SearchPage.css'
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult/SearchResult'
const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p> 
                25 stays - 26 august to 30 august - 2 guest
                </p>
                <h1>
                    Stays nearly
                </h1>
                <Button variant="outlined">
                    Cancellation Flexibility
                </Button>
                <Button variant="outlined">
                    Type of place
                </Button>
                <Button variant="outlined">
                    Price
                </Button>
                <Button variant="outlined">
                    Rooms and beds
                </Button>
                <Button variant="outlined">
                    More filters
                </Button>
                <SearchResult
                        img = 'https://i.pinimg.com/originals/43/e3/76/43e37654b0146741bff4b49fe5c2ccac.jpg' 
                        location = 'tokyo' 
                        title = 'Solo leveling' 
                        description = 'Welcome to the lore of Solo leveling' 
                        star = '4.5' 
                        price = 'Rs.700/ night' 
                        total = '$1500 total' 
                />
            </div>
        </div>
    )
}

export default SearchPage
