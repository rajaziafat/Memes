import React from 'react'
import Box from '@mui/material/Box';
import Pagination from './pagination'
import Typography from '@mui/material/Typography';
import PostingCard from './posting';
import Button from '@mui/material/Button';

const tabs = ["#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "#bffs", "More"]


const Latest =()=> {
    return (
        <Box className="w-[100%]">
            <Box className="overflow-x-auto verticalScroll">
                <Box className="h-[48px] w-[1100px] flex justify-between">
                    {tabs && tabs.map((buttonList:string, index) => {
                        return <Button className="flex items-center cursor-pointer w-[110px] h-[48px] text-[#3720C7] flex justify-center items-center category" style={{ borderRadius: "10px" }}>
                            {buttonList}
                        </Button>
                    })}
                </Box>
            </Box>
            <Box className="flex md:flex-row flex-col items-center justify-end mt-3 ">
                <Typography className="pr-7 md:pb-0 pb-3"><span className="text-[gray]">1 - 12 of 456</span></Typography>
                <Pagination />
            </Box>
            <PostingCard/>
        </Box>
    )
}

export default Latest
