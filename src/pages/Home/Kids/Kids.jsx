import React from 'react';
import Banner from '../../../components/Banner/Banner';
import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';
import KidsPageCategories from '../../../components/PageCategories/KidsPageCategories/KidsPageCategories';
import KidsPageNewItems from '../../../components/PageNewItems/KidsPageNewItems/KidsPageNewItems';
import { Helmet } from 'react-helmet';

const Kids = () => {
    return (
        <div>
            <Helmet><title>UrbanUtopia | Kids</title></Helmet>
            <Banner></Banner>
            <KidsPageCategories></KidsPageCategories>
            <KidsPageNewItems></KidsPageNewItems>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default Kids;