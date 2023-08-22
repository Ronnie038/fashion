import React from 'react';
import Navbar from '../../../components/Navbar/Navbar';
import Banner from '../../../components/Banner/Banner';
import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';
import Footer from '../../../components/Footer/Footer';
import KidsPageCategories from '../../../components/PageCategories/KidsPageCategories/KidsPageCategories';
import KidsPageNewItems from '../../../components/PageNewItems/KidsPageNewItems/KidsPageNewItems';

const Kids = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <KidsPageCategories></KidsPageCategories>
            <KidsPageNewItems></KidsPageNewItems>
            <DownloadMobile></DownloadMobile>
            <Footer></Footer>
        </div>
    );
};

export default Kids;