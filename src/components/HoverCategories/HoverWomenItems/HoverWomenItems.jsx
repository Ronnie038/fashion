import React from 'react';
import womenTop1 from '../../../assets/WomenTopCategories/img1.png'
import womenTop2 from '../../../assets/WomenTopCategories/img2.png'
import womenTop3 from '../../../assets/WomenTopCategories/img3.png'
import womenTop4 from '../../../assets/WomenTopCategories/img4.png'
import womenTop5 from '../../../assets/WomenTopCategories/img5.png'

const HoverWomenItems = () => {
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
                            <img src={womenTop2} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop3} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop4} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={womenTop5} alt="Shoes" />
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

export default HoverWomenItems;