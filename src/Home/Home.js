import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import Banner from './Banner/Banner'
import Card from './Card/Card'
const Home = () => {
    return (
        <div className='home'>
            <Banner/>  
            <div className="home__section">
                <Card  
                    src = 'https://c4.wallpaperflare.com/wallpaper/256/981/302/anime-solo-leveling-sung-jin-woo-hd-wallpaper-preview.jpg' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />               
                 <Card  
                    src = 'https://c4.wallpaperflare.com/wallpaper/256/981/302/anime-solo-leveling-sung-jin-woo-hd-wallpaper-preview.jpg' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />
                <Card 
                    src = 'https://images7.alphacoders.com/105/thumb-350-1055055.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />
                <Card 
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />
            </div>
            <div className="home__sectionProducts">
                <Card 
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />
                <Card
                    price='$10'
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others'
                    />   
                <Card 
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />            
                <Card
                    price='$10'
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others'
                    />                
                <Card
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    price='$10'
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others'
                    />
            </div>
            <div className="home__sectionProducts">
                <Card 
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />
                <Card
                    price='$10'
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others'
                    />   
                <Card 
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others' 
                   />            
                <Card
                    price='$10'
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others'
                    />                
                <Card
                    src = 'https://images6.alphacoders.com/106/thumb-350-1065654.png' 
                    price='$10'
                    title = 'New title ' 
                    description = 'This is a new product but have same price as others'
                    />
            </div>
        
        </div>
    )
}
// https://i.pinimg.com/236x/15/a4/ac/15a4ac57987dc216acc486f51d5ec443.jpg
export default Home
