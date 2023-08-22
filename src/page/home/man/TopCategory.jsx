import React from 'react';
import image1 from '../../../assets/image 68.png'
import image2 from '../../../assets/image 69.png'
import image3 from '../../../assets/image 70.png'
import image4 from '../../../assets/image 72.png'
import image5 from '../../../assets/image 74.png'
import Shoes from '../shoes/Shoes';

const TopCategory = () => {

    return (
        <div className='container mx-auto'>
           <h2 className='text-center text-black font-semibold text-2xl mt-14'>Top Categories</h2>
            <div className='grid  lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-1 text-black mt-8 gap-8'>
                  <div>
                     <img className='w-full object-contain' src={image1} alt="" />
                     <h1 className='text-center font-semibold mt-2 text-2xl'>Jeans</h1>
                  </div>
                  <div>
                     <img className='w-full object-contain' src={image2} alt="" />
                     <h1 className='text-center font-semibold mt-2 text-2xl'>Jeans</h1>
                  </div>
                  <div>
                     <img className='w-full object-contain' src={image3} alt="" />
                     <h1 className='text-center font-semibold mt-2 text-2xl'>Jeans</h1>
                  </div>
                  <div>
                     <img className='w-full object-contain' src={image4} alt="" />
                     <h1 className='text-center font-semibold mt-2 text-2xl'>Jeans</h1>
                  </div>
                  <div>
                     <img className='w-full object-contain' src={image5} alt="" />
                     <h1 className='text-center font-semibold mt-2 text-2xl'>Jeans</h1>
                  </div>
            </div>
            <div className='flex text-end lg:justify-end md:justify-end justify-center xl:mr-0 lg:mr-5 md:mr-5 mt-10'>
            <button className="bg-[#0C4E67] text-white py-4 px-10 text-2xl">More</button>
           </div>
            
                 <Shoes></Shoes>
             
        </div>
    );
};

export default TopCategory;