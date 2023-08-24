import React from 'react';
import Banner from '../../../components/Banner/Banner';
import DownloadMobile from '../../../components/DownloadMobile/DownloadMobile';
import WomenPageCategories from '../../../components/PageCategories/WomenPageCategories/WomenPageCategories';
import WomenPageNewItems from '../../../components/PageNewItems/WomenPageNewItems/WomenPageNewItems';
import { Helmet } from 'react-helmet';

const Women = () => {
    return (
        <div>
            <Helmet><title>UrbanUtopia | Women</title></Helmet>
            <Banner></Banner>
            <WomenPageCategories></WomenPageCategories>
            <WomenPageNewItems></WomenPageNewItems>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default Women;