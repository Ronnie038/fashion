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
             <h2 className='flex justify-center items-center text-black font-semibold text-2xl mt-14'>Top Categories</h2>
      
             <div className='flex justify-center items-center text-black mt-8 gap-8'>
           <div className="w-[253px] h-[341px] bg-base-100">
               <figure className=' pt-10'>
                 <img src={image1} alt="Shoes"/>
               </figure>
           <div className="card-body items-center text-center">
              <h2 className="card-title">Jeans</h2>
           </div>
         </div>
           <div className="w-[253px] h-[341px]  bg-base-100">
               <figure className='pt-10'>
                 <img src={image2} alt="Shoes"/>
               </figure>
           <div className="card-body items-center text-center">
              <h2 className="card-title">Latest </h2>
           </div>
         </div>
           <div className="w-[253px] h-[341px]  bg-base-100">
               <figure className='pt-10'>
                 <img src={image3} alt="Shoes"/>
               </figure>
           <div className="card-body items-center text-center">
              <h2 className="card-title">Pants </h2>
           </div>
         </div>
           <div className="w-[253px] h-[341px]  bg-base-100">
               <figure className='pt-10'>
                 <img src={image4} alt="Shoes"/>
               </figure>
           <div className="card-body items-center text-center">
              <h2 className="card-title">T-shirt </h2>
           </div>
         </div>
           <div className="w-[253px] h-[341px]  bg-base-100">
               <figure className='pt-10'>
                 <img src={image5} alt="Perfume"/>
               </figure>
           <div className="card-body items-center text-center">
              <h2 className="card-title">Perfume </h2>
           </div>
         </div>
      </div>
      <div className='grid justify-items-end mt-6 '>
           <button className="btn btn-neutral">More</button>
           </div>
            <div>
             <Shoes></Shoes>
            </div>
        </div>
    );
};

export default TopCategory;


            {/* <div className='flex justify-center items-center text-black mt-8 gap-8'>
              <div className="card w-[253px] h-[341px] card-side bg-base-100 ">
                <figure><img src={image1} alt="Movie"/>
                </figure> 
              </div>
              <div className="card w-[253px] h-[341px] card-side bg-base-100 ">
                <figure><img src={image2} alt="Movie"/>
                </figure> 
              </div>
              <div className="card w-[253px] h-[341px] card-side bg-base-100 ">
                <figure><img src={image3} alt="Movie"/>
                </figure> 
              </div>
              <div className="card w-[253px] h-[341px] card-side bg-base-100 ">
                <figure><img src={image4} alt="Movie"/>
                </figure> 
              </div>
              <div className="card w-[253px] h-[341px] card-side bg-base-100 ">
                <figure><img src={image5} alt="Movie"/>
                </figure> 
              </div>
            </div> */}

            