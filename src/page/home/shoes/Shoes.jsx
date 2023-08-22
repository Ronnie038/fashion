import React from 'react';
import image1 from '../../../assets/wepik-export-20230802092539rPGW.png'
import image2 from '../../../assets/wepik-export-202393.png'
import image3 from '../../../assets/wepik-export-20230802092644BiAD.png'
import image4 from '../../../assets/wepik-export-20230802093209mOtU 1.png'

const Shoes = () => {
    return (
        <div className='container mx-auto '>
        <h2 className='flex justify-center items-center text-black font-semibold mt-20 text-2xl'>New items that you can’t miss out on </h2>
 
        <div className='flex justify-center items-center text-black mt-8 gap-8'>
      <div className=" w-[325px] h-[457px] p-8 shadow-2xl ">
          <figure className=' pt-10 w-[285px] h-[186px]'>
            <img src={image1} alt="Shoes"/>
          </figure>
      <div className="card-body mt-24">
             <h2 className='font-semibold text-xl'>Shoes</h2>
             <p>Fitted long Strappy Shoes</p>
      </div>
    </div>
      <div className="w-[325px] h-[457px]  p-8  shadow-2xl">
          <figure className='pt-10 w-[285px] h-[186px]'>
            <img src={image2} alt="Shoes"/>
          </figure>
          <div className="card-body mt-24 ">
             <h2 className='font-semibold text-xl'>Shoes</h2>
             <p>Fitted long Strappy Shoes</p>
      </div>
    </div>
      <div className="w-[325px] h-[457px] p-8 shadow-2xl">
          <figure className='pt-10 w-[285px] h-[186px]'>
            <img src={image3} alt="Shoes"/>
          </figure>
          <div className="card-body mt-24">
             <h2 className='font-semibold text-xl'>Shoes</h2>
             <p>Fitted long Strappy Shoes</p>
      </div>
    </div>
      <div className="w-[325px] h-[457px] p-8 shadow-2xl">
          <figure className='pt-10 w-[285px] h-[186px]'>
            <img src={image4} alt="Shoes"/>
          </figure>
          <div className="card-body mt-24">
             <h2 className='font-semibold text-xl'>Shoes</h2>
             <p>Fitted long Strappy Shoes</p>
      </div>
    </div>
 </div>
 <div className='grid justify-items-end mt-6 '>
      <button className="btn btn-neutral">More</button>
      </div>

   </div>
    );
};

export default Shoes;