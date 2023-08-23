import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';

const LoginPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className='bg-[#C8C2BF] py-20'>
                <div className="hero">
                    <div className=" flex-col lg:flex-row-reverse">

                        <div className="xl:max-w-full lg:max-w-3xl md:max-w-2xl max-w-sm flex-shrink-0 rounded-md shadow-md bg-white mx-5 md:mx-0 lg:mx-0 ">
                            <form className="card-body lg:px-28 space-y-5">
                                <div>
                                    <p >Welcome to</p>
                                    <Link to="" className="">
                                        <p className='logoFont mb-8 mt-3 text-[#03384D] lg:text-5xl text-3xl font-bold'><span className='text-[#3B95B0] logoFont'>Urban</span>Utopia</p>
                                    </Link>
                                </div>
                                <div className="form-control">
                                    <input type="email" required placeholder="Email" className="input input-bordered h-16 rounded-none border-black text-black text-xl" />
                                </div>
                                <div className="form-control">
                                    <input type="password" required placeholder="Password" className="input h-16 rounded-none input-bordered border-black text-black text-xl" />
                                </div>
                                <div className="form-control mt-10">
                                    <input type="submit" value='Log in' className='btn bg-[#0C4E67] text-white mt-4 text-xl h-16 rounded-none hover:bg-[#3B95B0]' />
                                    <label className="label flex justify-end">
                                        <Link href="#" className="label-text-alt link link-hover text-[18px] my-3 text-[#1877F2]">Forgot password?</Link>
                                    </label>
                                </div>
                                <div className='text-center px-20'>
                                    <p className='text-[18px]'>New Member? <Link className=' text-[#1877F2]'>Registration Now</Link></p>
                                    <div className="divider w-10/12 mx-auto text-black pt-8">Or</div>
                                </div>
                                <div className='flex flex-wrap gap-5 justify-between  my-8'>
                                    <Link className='btn bg-transparent rounded-none w-full lg:w-auto border border-black'>
                                        <div className='flex items-center gap-2'>
                                            <Icon icon="entypo-social:google" className='text-white bg-red-600 rounded-full p-2 text-3xl' />
                                            <span className='normal-case'>Sing Up with Google</span>
                                        </div>
                                    </Link>
                                    <Link className='btn bg-transparent border-1 rounded-none w-full lg:w-auto border border-black'>
                                        <div className='flex items-center gap-2'>
                                            <Icon icon="ic:baseline-facebook" className='text-3xl text-[#1877F2]' />
                                            <span className='normal-case'>Sing Up with Facebook</span>
                                        </div>
                                    </Link>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
            <DownloadMobile></DownloadMobile>
            <Footer></Footer>
        </div>
    );
};

export default LoginPage;