import React from 'react';
import manTop1 from '../../../assets/ManTopCategories/img1.png';
import manTop2 from '../../../assets/ManTopCategories/img2.png';
import manTop3 from '../../../assets/ManTopCategories/img3.png';
import manTop4 from '../../../assets/ManTopCategories/img4.png';
import manTop5 from '../../../assets/ManTopCategories/img5.png';

const MenPageCategories = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center py-20'>
                    <h3 className='text-3xl font-medium'>New items that you can't miss out on</h3>
                </div>
                <div className=' grid xl:grid-cols-5 lg:grid-cols-4 xl:mx-0 lg:mx-5 md:mx-5 md:grid-cols-4 grid-cols-1 gap-5 mx-5 justify-center'>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={manTop1} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={manTop2} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">Latest</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={manTop3} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">Pants</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={manTop4} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">T-shirt</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={manTop5} alt="Shoes" />
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

export default MenPageCategories;