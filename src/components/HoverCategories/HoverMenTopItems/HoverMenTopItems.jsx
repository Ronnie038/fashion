import React from 'react';
import menTop1 from '../../../assets/ManTopCategories/img1.png'
import menTop2 from '../../../assets/ManTopCategories/img2.png'
import menTop3 from '../../../assets/ManTopCategories/img3.png'
import menTop4 from '../../../assets/ManTopCategories/img4.png'
import menTop5 from '../../../assets/ManTopCategories/img5.png'

const HoverMenTopItems = () => {
    return (
        <div className='container mx-auto my-10'>
            <div className='bg-white mt-10'>
                <h1 className='text-2xl my-5'>Top Category</h1>
                <div className='flex gap-8'>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={menTop1} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={menTop2} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={menTop3} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={menTop4} alt="Shoes" />
                        </figure>
                        <div className="flex justify-center my-5">
                            <h2 className="text-2xl font-medium">Jeans</h2>
                        </div>
                    </div>
                    <div className="w-40 bg-base-400">
                        <figure className="">
                            <img src={menTop5} alt="Shoes" />
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

export default HoverMenTopItems;