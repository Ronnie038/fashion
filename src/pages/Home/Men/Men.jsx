import Banner from "../../../components/Banner/Banner";
import DownloadMobile from "../../../components/DownloadMobile/DownloadMobile";
import MenPageCategories from "../../../components/PageCategories/MenPageCategories/MenPageCategories";
import MenPageNewItems from "../../../components/PageNewItems/MenPageNewItems/MenPageNewItems";
import {Helmet} from 'react-helmet'


const Men = () => {
    return (
        <div>
            <Helmet><title>UrbanUtopia | Men</title></Helmet>
            <Banner></Banner>
            <MenPageCategories></MenPageCategories>
            <MenPageNewItems></MenPageNewItems>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default Men;