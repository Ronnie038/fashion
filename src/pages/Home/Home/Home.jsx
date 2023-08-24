import { Link } from "react-router-dom";
import logo from '../../../assets/logo/UrbanUtopia.png'
import category1 from '../../../assets/TopCategory/topCategory1.png'
import category2 from '../../../assets/TopCategory/topCategory2.png'
import category3 from '../../../assets/TopCategory/topCategory3.png'
import { Helmet } from "react-helmet";


const Home = () => {
    return (
        // home page 
        <div>
            <Helmet><title>UrbanUtopia | Home</title></Helmet>
            <div className='container mx-auto my-5'>
                <div className='flex justify-center items-center my-16'>
                    <Link to="/" className="">
                        <p className='logoFont text-[#03384D] text-5xl font-bold'><span className='text-[#3B95B0] logoFont'>Urban</span>Utopia</p>
                    </Link>
                </div>
                <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 md:mx-10 mx-10'>
                    <Link to='women'>
                        <div className="w-full">
                            <img className="w-full" src={category1} alt="UrbanUtopia" />
                        </div>
                    </Link>
                    <Link to='men'>
                        <div className="w-full">
                            <img className="w-full" src={category2} alt="UrbanUtopia" />
                        </div>
                    </Link>
                    <Link to='kids'>
                        <div className="w-full">
                            <img className="w-full" src={category3} alt="UrbanUtopia" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};


export default Home;