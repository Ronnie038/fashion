import React from 'react';
import bannerText from '../../assets/Banner/bannerText.png'
import bannerMen from '../../assets/Banner/bannerMen.png'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import { Link, NavLink } from 'react-router-dom';
import HoverManTopItems from '../HoverCategories/HoverMenTopItems/HoverMenTopItems';
import HoverMenTopItems from '../HoverCategories/HoverMenTopItems/HoverMenTopItems';
import HoverWomenItems from '../HoverCategories/HoverWomenItems/HoverWomenItems';
import HoverKidsTopItems from '../HoverCategories/HoverKidsTopItems/HoverKidsTopItems';



const Banner = () => {
    return (
        // banner 
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
                    <div className=''>
                        <div className="xl:h-[880px] lg:h-[650px] md:h-[550px] h-[600px] bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/16Stkjh/BannerBG.png)' }}>
                            <div className='container mx-auto'>
                                <div className="pt-8 xl:mx-2 lg:mx-4 md:mx-7 mx-4 space-x-8">
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/women'>
                                            <label tabIndex={0} className="text-white text-2xl uppercase">Women</label>
                                        </NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 ml-52">
                                            <div className='px-10 object-center hover:object-top'>
                                                <HoverWomenItems></HoverWomenItems>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/men'><span tabIndex={0} className="text-white text-2xl uppercase">Men</span></NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 ml-28">
                                            <div className='px-10'>
                                                <HoverMenTopItems></HoverMenTopItems>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/kids'><label tabIndex={0} className="text-white text-2xl uppercase">Kids</label></NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 ml-5">
                                            <div className='px-10'>
                                                <HoverKidsTopItems></HoverKidsTopItems>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='text-[#CCCCCC] space-y-3 xl:mx-2 lg:mx-5 md:mx-7 mx-5 mt-10 text-xl w-2/12'>
                                    <li><Link to='/'>Newest</Link></li>
                                    <li><Link to=''>Trending</Link></li>
                                    <li><Link to=''>Cosmetics</Link></li>
                                    <li><Link to=''>Best Rated</Link></li>
                                </div>

                                <div className="absolute lg:top-0 top-36 md:left-36 md:top-0 lg:right-24 z-0">
                                    <div className='flex justify-end items-center'>
                                        <div className='xl:w-6/12 lg:w-10/12 md:w-11/12 w-11/12'>
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
                <SwiperSlide>
                    <div className=''>
                        <div className="xl:h-[880px] lg:h-[650px] md:h-[550px] h-[600px] bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/16Stkjh/BannerBG.png)' }}>
                            <div className='container mx-auto'>
                                <div className="pt-8 xl:mx-2 lg:mx-4 md:mx-7 mx-4 space-x-8">
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/women'>
                                            <label tabIndex={0} className="text-white text-2xl uppercase">Women</label>
                                        </NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 ml-52">
                                            <div className='px-10 object-center hover:object-top'>
                                                <HoverWomenItems></HoverWomenItems>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/men'><span tabIndex={0} className="text-white text-2xl uppercase">Men</span></NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 ml-28">
                                            <div className='px-10'>
                                                <HoverMenTopItems></HoverMenTopItems>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/kids'><label tabIndex={0} className="text-white text-2xl uppercase">Kids</label></NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 ml-5">
                                            <div className='px-10'>
                                                <HoverKidsTopItems></HoverKidsTopItems>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='text-[#CCCCCC] space-y-3 xl:mx-2 lg:mx-5 md:mx-7 mx-5 mt-10 text-xl w-2/12'>
                                    <li><Link to='/'>Newest</Link></li>
                                    <li><Link to=''>Trending</Link></li>
                                    <li><Link to=''>Cosmetics</Link></li>
                                    <li><Link to=''>Best Rated</Link></li>
                                </div>

                                <div className="absolute lg:top-0 top-36 md:left-36 md:top-0 lg:right-24 z-0">
                                    <div className='flex justify-end items-center'>
                                        <div className='xl:w-6/12 lg:w-10/12 md:w-11/12 w-11/12'>
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
                <SwiperSlide>
                    <div className=''>
                        <div className="xl:h-[880px] lg:h-[650px] md:h-[550px] h-[600px] bg-no-repeat bg-cover" style={{ backgroundImage: 'url(https://i.ibb.co/16Stkjh/BannerBG.png)' }}>
                            <div className='container mx-auto'>
                                <div className="pt-8 xl:mx-2 lg:mx-4 md:mx-7 mx-4 space-x-8">
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/women'>
                                            <label tabIndex={0} className="text-white text-2xl uppercase">Women</label>
                                        </NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu shadow bg-base-100 ml-52">
                                            <div className='px-10 object-center hover:object-top'>
                                                <HoverWomenItems></HoverWomenItems>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/men'><span tabIndex={0} className="text-white text-2xl uppercase">Men</span></NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 ml-28">
                                            <div className='px-10'>
                                                <HoverMenTopItems></HoverMenTopItems>
                                            </div>
                                        </ul>
                                    </div>
                                    <div className="dropdown dropdown-right dropdown-hover z-40">
                                        <NavLink to='/kids'><label tabIndex={0} className="text-white text-2xl uppercase">Kids</label></NavLink>
                                        <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 ml-5">
                                            <div className='px-10'>
                                                <HoverKidsTopItems></HoverKidsTopItems>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                <div className='text-[#CCCCCC] space-y-3 xl:mx-2 lg:mx-5 md:mx-7 mx-5 mt-10 text-xl w-2/12'>
                                    <li><Link to='/'>Newest</Link></li>
                                    <li><Link to=''>Trending</Link></li>
                                    <li><Link to=''>Cosmetics</Link></li>
                                    <li><Link to=''>Best Rated</Link></li>
                                </div>

                                <div className="absolute lg:top-0 top-36 md:left-36 md:top-0 lg:right-24 z-0">
                                    <div className='flex justify-end items-center'>
                                        <div className='xl:w-6/12 lg:w-10/12 md:w-11/12 w-11/12'>
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
                
            </Swiper>
        </div>
    );
};

export default Banner;