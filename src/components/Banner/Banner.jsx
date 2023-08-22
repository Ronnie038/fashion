import React from 'react';
import bannerText from '../../assets/Banner/bannerText.png'
import bannerMen from '../../assets/Banner/bannerMen.png'
import womenTop1 from '../../assets/WomenTopCategories/img1.png'
import womenTop2 from '../../assets/WomenTopCategories/img2.png'
import womenTop3 from '../../assets/WomenTopCategories/img3.png'
import menTop1 from '../../assets/MenTopCategories/img1.png'
import menTop2 from '../../assets/MenTopCategories/img2.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { NavLink } from 'react-router-dom';


const Banner = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div>
                        <div className="h-[880px]" style={{ backgroundImage: 'url(https://i.ibb.co/16Stkjh/BannerBG.png)' }}>
                            <div className='container mx-auto'>
                                <div className="pt-8 space-x-7">
                                    <div className="dropdown dropdown-right dropdown-hover">
                                        <label tabIndex={0} className="text-white text-2xl m-1 uppercase">Women</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <div className='bg-white'>
                                                <h1>Top Category</h1>
                                                <div className='flex'>
                                                    <div className="card w-96 bg-base-100">
                                                        <figure className="px-10 pt-10">
                                                            <img src={womenTop1} alt="Shoes" className="rounded-xl" />
                                                        </figure>
                                                        <div className="card-body items-center text-center">
                                                            <h2 className="card-title">Shoes!</h2>
                                                        </div>
                                                    </div>
                                                    <div className=''>
                                                        <div className="card w-96 bg-base-100">
                                                            <figure className="px-10 pt-10">
                                                                <img src={womenTop1} alt="Shoes" className="rounded-xl" />
                                                            </figure>
                                                            <div className="card-body items-center text-center">
                                                                <h2 className="card-title">Shoes!</h2>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover">
                                        <label tabIndex={0} className="text-white text-2xl m-1 uppercase">Men</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <div className=''>
                                                <h3>Top Categories</h3>
                                                <div className="card w-96 bg-base-100 shadow-xl">
                                                    <figure className="px-10 pt-10">
                                                        <img src={menTop1} alt="Shoes" className="rounded-xl" />
                                                    </figure>
                                                    <div className="card-body items-center text-center">
                                                        <h2 className="card-title">Shoes!</h2>
                                                    </div>
                                                </div>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover">
                                        <label tabIndex={0} className="text-white text-2xl m-1 uppercase">Kids</label>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <img src={bannerMen} alt="" />
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <div className='flex justify-end items-center'>
                                        <div className='lg:w-8/12'>
                                            <img className='w-full' src={bannerText} alt="" />
                                        </div>
                                        <div className=''>
                                            <img className='w-full' src={bannerMen} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;