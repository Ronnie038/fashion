import React from 'react';
import { FaGoogle, FaFacebook, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
    return (
         
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="card grid-shrink-0 grid-cols-1 lg:gap-4 md:gap-4 gap-4 py-12 px-12 lg:grid-cols-3 shadow-2xl bg-base-100 md:grid-cols-2">
      <div className="card-body ">
        <div>
            <p className=' items-center text-black text-2xl font-semibold mb-2'>Welcome to</p>
            <div className='mb-4 heading-styles'>
                <p>Urban <span>Utopia</span></p>
            </div> 
        </div>
        <div className="form-control mt-6">
          <input type="text" placeholder="Full Name*" className=" border border-black ps-2 border-2  h-[60px]" />
        </div>
        <div className="form-control mt-6">
          <input type="text" placeholder="Mobile Number*" className=" border border-black ps-2 border-2  h-[60px]" />
        </div>
        <div className="form-control mt-6">
          <input type="text" placeholder="email" className=" border border-black ps-2 border-2  h-[60px]" />
        </div>
        <div className="form-control relative mt-2">
           <input type="text" placeholder="password"  className="border border-black ps-2 border-2  h-[60px] " />
             <span className='flex  absolute text-xl right-4 top-5'><FaEyeSlash></FaEyeSlash></span>
        </div>
        <div className="form-control relative mt-2">
           <input type="text" placeholder="confirm password"  className="border border-black ps-2 border-2  h-[60px] " />
             <span className='flex  absolute text-xl right-4 top-5'><FaEyeSlash></FaEyeSlash></span>
        </div>
        <div className="form-control mt-6">
          <button className=" bg-black h-[60px] text-lg text-white hover:bg-cyan-400">Sign Up</button>
        </div>
        <div>
           <label className="label flex justify-end">
            <a hre="#" className="label-text-alt link link-hover text-[#1877F2]">Forgot password?</a>
          </label>
           </div>
        <div className='flex justify-center text-center mt-8'>
            <p>New Member ? <span className='text-[#1877F2]'>Registration Now</span> </p>
        </div>
          <div className="flex mx-auto flex-col w-[60%] mt-5  border-opacity-50 ">
           <div className="divider">OR</div>
        </div>
            <div className='flex text-center mt-4 gap-4'>
                  <button className='flex grid-cols-1 lg:gap-4 border lg:grid-cols-2 md:border-black md:gap-2 md:grid-cols-2 py-3 px-8'><FaGoogle className='text-xl text-red-500'></FaGoogle>  <span>Sing Up with Google</span></button>
                  <button className='flex grid-cols-1  md:gap-2 lg:grid-cols-2 lg:gap-4 border border-black md:grid-cols-2  py-3 px-8'> <span className='text-xl text-blue-600'><FaFacebook></FaFacebook></span> Sing Up with Facebook</button>
           </div>
      </div>
    </div>
  </div>
</div>
    );
};

export default SignUp;