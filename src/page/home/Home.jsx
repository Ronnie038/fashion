import React from 'react';
import urban from '../../assets/UrbanUtopia.png'
import image1 from '../../assets/image 64.png'
import image2 from '../../assets/Frame 133.png'
import image3 from '../../assets/image 76.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container mx-auto '>
           <div className='flex justify-center items-center  mt-14'>
              <img src={urban} alt="" />
           </div>
         <div className='grid justify-center  grid-cols-1 lg:gap-5 md:gap-5 gap-5 lg:grid-cols-3  md:grid-cols-2  mt-14'>
          <Link>
          <div className="card w-[470px] h-[700px] card-side bg-base-100 shadow-xl">
             <figure><img src={image1} alt="Movie"/>
            </figure> 
        </div>
          </Link>
         <Link to="/man">
         <div className="card w-[470px] h-[700px] card-side bg-base-100 shadow-xl">
             <figure><img src={image2} alt="Movie"/>
            </figure>
        </div>
         </Link>
          <Link>
          <div className="card w-[470px] h-[700px]  card-side shadow-xl">
             <figure><img src={image3} alt="Movie"/>
            </figure>
        </div>
          </Link>
         </div>
      </div>
    );
};

export default Home;
