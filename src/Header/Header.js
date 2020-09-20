import React from 'react'
import './Header.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
// import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import LanguageRoundedIcon from '@material-ui/icons/LanguageRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import {Avatar} from '@material-ui/core'
const Header = () => {
    return (
        <div className='header'>
            <img
                className="header__icon"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/1200px-Airbnb_Logo_B%C3%A9lo.svg.png"
                alt="airbnb logo"
            />
            <div className='header__center'>
                <input type="text"/>
                <SearchRoundedIcon/>
                
            </div>
            <div className='header__right'>
                 <Avatar/>
                 <LanguageRoundedIcon/>
                 <ExpandMoreRoundedIcon/>
            </div>
        </div>
    )
}

export default Header
