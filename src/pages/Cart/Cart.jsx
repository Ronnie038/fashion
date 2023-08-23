import React from 'react';
import Banner from '../../components/Banner/Banner';
import WomenPageNewItems from '../../components/PageNewItems/WomenPageNewItems/WomenPageNewItems';
import DownloadMobile from '../../components/DownloadMobile/DownloadMobile';
import CartPageSection from '../../components/CartPageSection/CartPageSection';

const Cart = () => {
    return (
        <div>
            <Banner></Banner>
            <CartPageSection></CartPageSection>
            <WomenPageNewItems></WomenPageNewItems>
            <DownloadMobile></DownloadMobile>
        </div>
    );
};

export default Cart;