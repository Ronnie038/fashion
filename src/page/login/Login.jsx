import React from 'react';
 
import './Login.css';


const Login = () => {
    return (
       
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
       <div className="card flex-shrink-0  py-20 px-20 shadow-2xl bg-base-100">
      <div className="card-body ">
        <div>
            <p className=' items-center text-black text-2xl font-semibold mb-2'>Welcome to</p>
            <div className='mb-4 heading-styles'>
                <p>Urban <span>Utopia</span></p>
            </div> 
        </div>
        <div className="form-control mt-14">
          <input type="text" placeholder="email" className=" border border-black ps-2 border-2  h-[80px]" />
        </div>
        <div className="form-control">
          <input type="text" placeholder="password" className="border border-black ps-2 border-2  h-[80px] " />
          <label className="label flex justify-end">
            <a hre="#" className="label-text-alt  link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className=" bg-black h-[80px] text-lg text-white">Login</button>
        </div>
        <div className='flex justify-center text-center mt-14'>
            <p>New Member ? <span>Registration Now</span> </p>
        </div>
          <div className="flex justify-center items-center flex-col w-1/2 mt-12  border-opacity-50 ">
           <div className="divider">OR</div>
        </div>
      </div>
    </div>
  </div>
</div>
    
    );
};

export default Login;