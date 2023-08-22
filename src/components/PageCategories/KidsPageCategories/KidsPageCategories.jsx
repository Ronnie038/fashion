import React from 'react';
import kidsTop1 from '../../../assets/KidsTopCategories/img1.png';
import kidsTop2 from '../../../assets/KidsTopCategories/img2.png';
import kidsTop3 from '../../../assets/KidsTopCategories/img3.png';
import kidsTop4 from '../../../assets/KidsTopCategories/img4.png';
import kidsTop5 from '../../../assets/KidsTopCategories/img5.png';

const KidsPageCategories = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center py-20'>
                    <h3 className='text-3xl font-medium'>Top Categories</h3>
                </div>
                <div className=' grid xl:grid-cols-5 lg:grid-cols-4 xl:mx-0 lg:mx-5 md:mx-5 md:grid-cols-4 gap-5 justify-center'>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={kidsTop1} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={kidsTop2} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">Latest</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={kidsTop3} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">Pants</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={kidsTop4} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">T-shirt</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={kidsTop5} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">Perfume</h2>
                        </div>
                    </div>
                </div>
                <div className='flex text-end lg:justify-end md:justify-end justify-center xl:mr-0 lg:mr-5 md:mr-5 mt-10'>
                    <button className='bg-[#0C4E67] text-white py-4 px-10 text-2xl'>More</button>
                </div>
            </div>
        </div>
    );
};

export default KidsPageCategories;