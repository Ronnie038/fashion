import React from 'react';
import kidTop1 from '../../../assets/KidsTopCategories/img1.png'
import kidTop2 from '../../../assets/KidsTopCategories/img2.png'
import kidTop3 from '../../../assets/KidsTopCategories/img3.png'
import kidTop4 from '../../../assets/KidsTopCategories/img4.png'
import kidTop5 from '../../../assets/KidsTopCategories/img5.png'

const HoverKidsTopItems = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='bg-white mt-10'>
                <h1 className='text-2xl my-5'>Top Category</h1>
                <div className='flex gap-8'>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={kidTop1} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={kidTop2} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={kidTop3} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={kidTop4} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={kidTop5} alt="Shoes" />
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

export default HoverKidsTopItems;