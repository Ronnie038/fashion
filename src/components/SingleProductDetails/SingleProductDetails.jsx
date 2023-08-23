import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import zomeImg1 from '../../assets/WomanNewItems/img1.png'
import zomeImg2 from '../../assets/WomanNewItems/img2.png'
import zomeImg3 from '../../assets/WomanNewItems/img3.png'
import zomeImg4 from '../../assets/WomanNewItems/img4.png'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const SingleProductDetails = () => {

    const images = [
        {
            original: `${zomeImg1}`,
            thumbnail: `${zomeImg1}`,
        },
        {
            original: `${zomeImg2}`,
            thumbnail: `${zomeImg2}`,
        },
        {
            original: `${zomeImg3}`,
            thumbnail: `${zomeImg3}`,
        },
        {
            original: `${zomeImg4}`,
            thumbnail: `${zomeImg4}`,
        },
    ];

    return (
        <div>
            <div className='container mx-auto'>
                <div className='w-3/12'>
                    <ImageGallery
                        showPlayButton={false}
                        slideOnThumbnailOver={true}
                        showFullscreenButton={false}
                        autoPlay={false}
                        slideDuration={1000}
                        items={images}
                    />


                    {/* <ReactImageMagnify {...{
                        hoverOffDelayInMs: 50,
                        isEnlargedImagePortalEnabledForTouch: true,
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: zomeImg,
                            
                            
                            
                        },
                        largeImage: {
                            src: zomeImg,
                            width: 991,
                            height: 448
                        }
                    }} /> */}
                </div>
            </div>
        </div>
    );
};

export default SingleProductDetails;