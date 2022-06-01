import React from 'react'
import Box from '@mui/material/Box';
import Img1 from '../assest/slider (1).svg'
import Img2 from '../assest/slider (2).svg'
import Img3 from '../assest/slider (3).svg'
import Img4 from '../assest/slider (4).svg'
import Img5 from '../assest/post1.svg'
import Img6 from '../assest/post2.svg'
import Img7 from '../assest/post3.svg'
import Img8 from '../assest/post4.svg'
import Trending from '../assest/trending.svg'
import Typography from '@mui/material/Typography';

const sliderData = [
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
]
const LargestScreen = [
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
    { Img: Img5, name: "#freakingout" },
    { Img: Img6, name: "#freakingout" },
    { Img: Img7, name: "#freakingout" },
    { Img: Img8, name: "#freakingout" },
    { Img: Img1, name: "#freakingout" },
    { Img: Img2, name: "#freakingout" },
    { Img: Img3, name: "#freakingout" },
    { Img: Img4, name: "#freakingout" },
]

function Slider() {
    return (
        <Box className="flex lg:flex-row flex-col lg:items-start items-center lg:my-10 my-5 w-[100%] overflow-x-hidden h-auto">
            <Box className="lg:w-[400px] flex justify-center items-center">
                <Box className="lg:w-[100%] w-[100%] relative flex flex-col justify-center items-center">
                    <img src={Trending} className="h-[180px] xl:h-[250px]" alt="" />
                    <Box className="pl-10 mt-[-40px]">
                        <Typography>
                            <span className="font-bold xl:text-[28px] lg:text-[18px]">
                                Trending
                            </span>
                            <span className="text-[#2066C7] font-bold ml-1 xl:text-[28px] lg:text-[18px]">
                                Tags
                            </span>
                        </Typography>
                        <Typography sx={{ fontSize: 14, mt: 1 }}>
                            The most viewed, most loved.
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box className="xl:w-[100%] lg:w-[950px] w-[100%] overflow-x-hidden pt-20">
                <Box className="special-slider w-[100%] overflow-hidden relative h-[229px]">
                    <Box className="slids w-[2120px] flex gap-x-10 xl:hidden">
                        {sliderData && sliderData.map((list, index) => {
                            return <Box className="slid relative w-[265px]" key={index}>
                                <img src={list.Img} className="absolute top-0 left-0 z-30" alt="" />
                                <Box className="h-[40px] w-[100%] absolute bottom-0 left-0 text-white rounded-b-lg flex items-center pl-3 z-40" style={{ background: "rgba(0,0,0,.6)" }}>{list.name}</Box>
                            </Box>
                        })}
                    </Box>
                    <Box className="slidsLarge w-[3000px] hidden gap-x-10 xl:flex">
                        {LargestScreen && LargestScreen.map((list, index) => {
                            return <Box className="slid relative w-[265px] h-[200px]" key={index}>
                                <img src={list.Img} className="h-[100%] w-[100%] z-30" alt="" />
                                <Box className="h-[40px] w-[100%] absolute bottom-0 left-0 text-white rounded-b-lg flex items-center pl-3 z-40" style={{ background: "rgba(0,0,0,.6)" }}>{list.name}</Box>
                            </Box>
                        })}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Slider
