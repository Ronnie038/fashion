import React from 'react';
import manNewItem1 from '../../../assets/ManNewItems/img1.png';
import manNewItem2 from '../../../assets/ManNewItems/img2.png';
import manNewItem3 from '../../../assets/ManNewItems/img3.png';
import manNewItem4 from '../../../assets/ManNewItems/img4.png';

const MenPageNewItems = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='text-center py-20'>
                    <h3 className='text-3xl font-medium'>New items that you can't miss out on</h3>
                </div>
                <div className=' grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 xl:mx-0 lg:mx-5 md:mx-5 mx-5 justify-center'>
                    <div className="w-full bg-base-100 drop-shadow-md">
                        <figure className="w-72 px-5 py-16 mx-auto">
                            <img className='w-full' src={manNewItem1} alt="Shoes" />
                        </figure>
                        <div className="card-body justify-start ">
                            <h2 className="text-2xl font-medium">Shoes</h2>
                            <p>Fitted long Strappy Shoes</p>
                        </div>
                    </div>
                    <div className="w-full bg-base-100 drop-shadow-md">
                        <figure className="w-72 px-5 py-16 mx-auto">
                            <img className='w-full' src={manNewItem2} alt="Shoes" />
                        </figure>
                        <div className="card-body justify-start ">
                            <h2 className="text-2xl font-medium">Shoes</h2>
                            <p>Fitted long Strappy Shoes</p>
                        </div>
                    </div>
                    <div className="w-full bg-base-100 drop-shadow-md">
                        <figure className="w-72 px-5 py-16 mx-auto">
                            <img className='w-full' src={manNewItem3} alt="Shoes" />
                        </figure>
                        <div className="card-body justify-start ">
                            <h2 className="text-2xl font-medium">Shoes</h2>
                            <p>Fitted long Strappy Shoes</p>
                        </div>
                    </div>
                    <div className="w-full bg-base-100 drop-shadow-md">
                        <figure className="w-72 px-5 py-16 mx-auto">
                            <img className='w-full' src={manNewItem4} alt="Shoes" />
                        </figure>
                        <div className="card-body justify-start ">
                            <h2 className="text-2xl font-medium">Shoes</h2>
                            <p>Fitted long Strappy Shoes</p>
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

export default MenPageNewItems;