import Banner from "../../../components/Banner/Banner";
import DownloadMobile from "../../../components/DownloadMobile/DownloadMobile";
import Footer from "../../../components/Footer/Footer";
import Navbar from "../../../components/Navbar/Navbar";
import MenPageCategories from "../../../components/PageCategories/MenPageCategories/MenPageCategories";


const Men = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <MenPageCategories></MenPageCategories>
            <DownloadMobile></DownloadMobile>
            <Footer></Footer>
        </div>
    );
};

export default Men;