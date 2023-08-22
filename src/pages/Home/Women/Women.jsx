import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Banner from '../../../components/Banner/Banner';
import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';
import Footer from '../../../components/Footer/Footer';
import WomenPageCategories from '../../../components/PageCategories/WomenPageCategories/WomenPageCategories';
import WomenPageNewItems from '../../../components/PageNewItems/WomenPageNewItems/WomenPageNewItems';

const Women = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <WomenPageCategories></WomenPageCategories>
            <WomenPageNewItems></WomenPageNewItems>
            <DownloadMobile></DownloadMobile>
            <Footer></Footer>
        </div>
    );
};

export default Women;