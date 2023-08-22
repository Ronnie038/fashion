import React from 'react';
import womenTop1 from '../../assets/WomenTopCategories/img1.png'
import womenTop2 from '../../assets/WomenTopCategories/img2.png'
import womenTop3 from '../../assets/WomenTopCategories/img3.png'
import menTop1 from '../../assets/MenTopCategories/img1.png'
import menTop2 from '../../assets/MenTopCategories/img2.png'

const HoverTopItems = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='bg-white mt-10'>
                <h1 className='text-2xl my-5'>Top Category</h1>
                <div className='flex gap-8'>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop1} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop1} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop1} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop1} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop1} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HoverTopItems;