import React from 'react';
import womanTop1 from '../../../assets/WomenTopCategories/img1.png';
import womanTop2 from '../../../assets/WomenTopCategories/img2.png';
import womanTop3 from '../../../assets/WomenTopCategories/img3.png';
import womanTop4 from '../../../assets/WomenTopCategories/img4.png';
import womanTop5 from '../../../assets/WomenTopCategories/img5.png';
import { Link } from 'react-router-dom';

const WomenPageCategories = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center py-20'>
                    <h3 className='text-3xl font-medium'>Top Categories</h3>
                </div>
                <div className=' grid xl:grid-cols-5 lg:grid-cols-4 xl:mx-0 lg:mx-5 md:mx-5 md:grid-cols-4 gap-5 justify-center'>
                    <Link to='/singleProductDetailsPage'>
                        <div className="w-full bg-base-100">
                            <figure className="">
                                <img className='w-full' src={womanTop1} alt="Shoes" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-medium">Jeans</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to='singleProductDetailsPage'>
                        <div className="w-full bg-base-100">
                            <figure className="">
                                <img className='w-full' src={womanTop2} alt="Shoes" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-medium">Latest</h2>
                            </div>
                        </div>
                    </Link>
                    <Link to='/singleProductDetailsPage'>
                        <div className="w-full bg-base-100">
                            <figure className="">
                                <img className='w-full' src={womanTop3} alt="Shoes" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="text-2xl font-medium">Pants</h2>
                            </div>
                        </div>
                    </Link>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={womanTop4} alt="Shoes" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-medium">T-shirt</h2>
                        </div>
                    </div>
                    <div className="w-full bg-base-100">
                        <figure className="">
                            <img className='w-full' src={womanTop5} alt="Shoes" />
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

export default WomenPageCategories;