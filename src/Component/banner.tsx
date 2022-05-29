import * as React from 'react';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BannerImg from '../assest/banner.svg'
import BannerMobImg from '../assest/bannerMobImg.svg'

export default function BannerCard() {
    return (
        <Box className="w-[100%] relative flex justify-center items-center md:mt-o mt-5">
            <Box className="relative">
                <img src={BannerImg} alt="" className="md:flex hidden" />
                <img src={BannerMobImg} alt="" className="md:hidden flex" />
                <Box className="w-[100%] sm:mt-14 flex flex-col items-center absolute lg:top-[100px] md:top-[50px] sm:top-[40px] top-[20px]">
                    <Typography className="text-center">
                        <span className="lg:text-[56px] md:text-[32px] text-[20px] leading-tight text-[black] md:font-normal font-bold">Make the next <br /> <span className="text-[#2066C7]">viral</span> meme.</span>
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
