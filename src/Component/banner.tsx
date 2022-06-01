import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BannerImg from '../assest/banner.svg'
import BannerMobImg from '../assest/bannerMobImg.svg'

export default function BannerCard() {
    return (
        <Box className="w-[100%] lg:h-[85vh] md:h-[100vh] sm:h-[60vh] h-[40vh] relative flex justify-center items-center md:mt-0 mt-5 relative">
            <Box className="">
                <img src={BannerImg} alt="" className="md:flex hidden w-[100%] h-[100%] absolute top-0 left-0 object-cover" />
                <img src={BannerMobImg} alt="" className="md:hidden flex absolute top-0 left-0" />
                <Box className="sm:w-[590px] md:pt-6 flex flex-col items-center z-50">
                    <Typography className="text-center">
                        <span className="lg:text-[56px] md:text-[32px] text-[14px] leading-tight text-[black] md:font-normal font-bold">Make the next <br /> <span className="text-[#2066C7]">viral</span> meme.</span>
                    </Typography>
                    <Typography sx={{ mt: 1 }}>
                        one does simply make cool memes.
                    </Typography>
                    <CardActions className="md:mt-4">
                        <Button className="btn colorBtn">Start Making Memes</Button>
                    </CardActions>
                </Box>
            </Box>
        </Box>
    );
}
