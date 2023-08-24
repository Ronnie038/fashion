import React from 'react';
import bannerWomenText from '../../../assets/Banner/Women/BannerWomenText.png'
import bannerWomen from '../../../assets/Banner/Women/BannerWomen.png'
import { Fade } from 'react-awesome-reveal';

const BannerWomen = () => {
    return (
        <>
            <div className="absolute lg:top-0 top-36 md:left-36 md:top-0 lg:right-24 z-0">
                <Fade>
                    <div className='flex justify-end items-center'>
                        <div className='xl:w-6/12 lg:w-10/12 md:w-11/12 w-11/12'>
                            <img className='w-full' src={bannerWomenText} alt="" />
                        </div>
                        <div className=''>
                            <img className='w-full' src={bannerWomen} alt="" />
                        </div>
                    </div>
                </Fade>
            </div>
        </>
    );
};

export default BannerWomen;