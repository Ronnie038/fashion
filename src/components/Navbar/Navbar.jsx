import { Link } from "react-router-dom";
import logo from "../../assets/logo/UrbanUtopia.png";
import cartIcon from "../../assets/icons/Vector.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-3 xl:px-0 lg:px-2 md:px-5">
      <div className="lg:navbar md:navbar px-0">
        <div className="flex-1 lg:w-48 md:w-60 py-5 mx-auto lg:h-14 ">
          <Link to="/" className="text-center">
          <p className='logoFont text-[#03384D] text-5xl font-bold'><span className='text-[#3B95B0] logoFont'>Urban</span>Utopia</p>
          </Link>
        </div>
        <div className="flex items-center lg:gap-5 justify-center gap-3">
          <div className="form-control relative lg:w-80 md:w-60">
            <input
              type="text"
              placeholder="Search Products"
              className=" input input-bordered rounded-full border-black w-full h-10 md:w-auto"
            />
            <div className="absolute top-2 right-5 ">
              <Icon className="text-2xl" icon="circum:search" />
            </div>
          </div>
          <div>
            <Link to='/login' className="border lg:w-[122px] font-medium md:w-20 text-2xl md:h-10 lg:h-10 bg-transparent px-3 border-black">
              login
            </Link>
          </div>
          <div className="md:w-9">
            <Link to='/cart'><Icon className="w-full text-5xl" icon="fluent:cart-16-regular" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
