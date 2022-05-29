import React from 'react'
import BannerCard from './Component/banner'
import Navbar from './Component/navbar'
import Slider from './Component/slider'
import Box from '@mui/material/Box';
import Post from './Component/post'
import Footer from './Component/footer'

function App() {
    return (
        <Box className="mb-10">
            <Navbar />
            <BannerCard />
            <Box className="gradient flex flex-col items-center mb-10">
                <Slider />
                <Post />
            </Box>
            <Footer/>
        </Box>
    )
}

export default App
