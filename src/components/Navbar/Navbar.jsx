import { Link } from "react-router-dom";
import logo from "../../assets/UrbanUtopia.png";
import cartIcon from "../../assets/icons/Vector.png";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="container mx-auto py-3 lg:px-5 md:px-5">
      <div className="lg:navbar md:navbar">
        <div className="flex-1 lg:w-48 w-60 py-5 mx-auto lg:h-14 ">
          <Link to="/" className="">
            <img className="w-full" src={logo} alt="" />
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
            <button className="border lg:w-[122px] font-medium md:w-20 text-2xl md:h-10 lg:h-10 bg-transparent px-3 border-black">
              login
            </button>
          </div>
          <div className="md:w-9">
            <Link><img className="w-full" src={cartIcon} alt="" /></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
