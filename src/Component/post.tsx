import React from 'react'
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import GiftBox from '../assest/giftbox.svg'
import Tabs from "./Tabs"

function Post() {
    return (
        <Box className="sm:w-[90%] w-[100%] py-10 md:px-14 sm:px-4 px-0 bg-white rounded-lg" style={{borderRadius:"20px !important"}}>
            <Box className="flex md:flex-row flex-col justify-between items-center">
                <Typography style={{fontWeight:"bold !important"}}><span className="text-[28px]">Recent & Notable</span></Typography>
                <Box className="sm:w-[384px] md:mt-0 mt-5 bg-[#2066C7] rounded-xl flex items-center px-2 pr-5 py-3 text-white">
                    <img src={GiftBox} alt="" />
                    <Typography className="text-center ml-2">Find something you like? Use the base as a template to create your own meme!</Typography>
                </Box>
            </Box>
            <Tabs/>
        </Box>
    )
}

export default Post
