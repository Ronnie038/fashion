import React from 'react';
// import ReactImageMagnify from 'react-image-magnify';
import zomeImg1 from '../../assets/WomanNewItems/img1.png'
import zomeImg2 from '../../assets/WomanNewItems/img2.png'
import zomeImg3 from '../../assets/WomanNewItems/img3.png'
import zomeImg4 from '../../assets/WomanNewItems/img4.png'

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Rating from 'react-rating';
import { Icon } from '@iconify/react';
import ProductCouter from '../ProductCouter/ProductCouter';
import { Helmet } from 'react-helmet';
import Discount50 from '../Discount50/Discount50';
import { Link } from 'react-router-dom';

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
            <Helmet><title>UrbanUtopia | Signle Product</title></Helmet>
            <div className='container mx-auto pt-36 pb-10 px-4 lg:px-0'>
                <div className='lg:flex justify-center relative'>
                    <div className='flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8 lg:gap-20 '>
                        <div className='w-full lg:w-6/12 md:w-6/12'>
                            <ImageGallery
                                showPlayButton={false}
                                slideOnThumbnailOver={true}
                                showFullscreenButton={false}
                                slideDuration={50}
                                items={images}
                            />
                        </div>
                        <div className='w-full lg:w-6/12 md:w-6/12'>
                            <div className='space-y-5'>
                                <div className='flex gap-3'>
                                    <div className='w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full'>
                                        <span className='prodcutSize text-3xl'>S</span>
                                    </div>
                                    <div className='w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full'>
                                        <span className='prodcutSize text-3xl'>M</span>
                                    </div>
                                    <div className='w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full'>
                                        <span className='prodcutSize text-3xl'>L</span>
                                    </div>
                                </div>
                                <h2 className='text-4xl font-semibold'>Nike Air Force 1</h2>
                                <p>Fitted Long Strappy Shoes</p>
                                <div className='flex gap-5'>
                                    <Rating
                                        readonly
                                        placeholderRating={4.5}
                                        emptySymbol={<Icon icon="ic:baseline-star-half" />}
                                        placeholderSymbol={<Icon icon="ic:baseline-star" />}
                                        fullSymbol={<Icon icon="ic:baseline-star" />}
                                        className='text-2xl text-[#40F223]'
                                    ></Rating>
                                    <span>7.5k Ratings</span>
                                </div>
                                <div className='lg:flex items-center  '>
                                    <div>
                                        <h2 className='text-5xl font-bold  my-8'>00.00$</h2>
                                        <div className='flex gap-5'>
                                            <ProductCouter></ProductCouter>
                                            <div className='flex justify-center items-center rounded-none w-52 h-12 text-2xl font-semibold bg-transparent border hover:bg-transparent hover:border-black border-black normal-case'>240$</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex md:flex-no-wrap flex-wrap gap-5 mt-20'>
                                    <Link to='/cart' className='btn rounded-none w-52 h-12 text-xl bg-transparent border hover:border-[#3B95B0] hover:text-[#3B95B0] hover:bg-transparent border-black normal-case'>Add to Cart</Link>
                                    <Link to='/productPurchasePage' className='btn rounded-none w-52 h-12 text-xl border-0 bg-[#0C4E67] hover:bg-[#3B95B0] text-white normal-case'>Purchase</Link>
                                </div>
                            </div>
                        </div>
                        <div className='absolute 2xl:top-32 2xl:right-64 xl:top-32 xl:right-32 lg:top-32 lg:right-0 md:top-28 md:right-0 -top-36 right-16'>
                            <Discount50></Discount50>
                        </div>
                    </div>
                </div>
            </div>
        </div>




        // <div>
        //     <div className='container mx-auto py-20'>
        //         <div className='flex justify-center'>
        //             <div className='lg:flex justify-between lg:flex-nowrap  md:justify-center gap-20 lg:mx-0 mx-5 relative'>
        //                 <div className='lg:w-6/12'>
        //                     <ImageGallery
        //                         showPlayButton={false}
        //                         slideOnThumbnailOver={true}
        //                         showFullscreenButton={false}
        //                         slideDuration={50}
        //                         items={images}
        //                     />
        //                 </div>
        //                 <div className='lg:w-full'>
        //                     <div className='space-y-5'>
        //                         <div className='flex gap-3'>
        //                             <div className='w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full'>
        //                                 <span className='prodcutSize text-3xl'>S</span>
        //                             </div>
        //                             <div className='w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full'>
        //                                 <span className='prodcutSize text-3xl'>M</span>
        //                             </div>
        //                             <div className='w-8 h-8 p-6 border border-black flex justify-center items-center rounded-full'>
        //                                 <span className='prodcutSize text-3xl'>L</span>
        //                             </div>
        //                         </div>
        //                         <h2 className='text-4xl font-semibold'>Nike Air Force 1</h2>
        //                         <p>Fitted Long Strappy Shoes</p>
        //                         <div className='flex gap-5'>
        //                             <Rating
        //                                 readonly
        //                                 placeholderRating={4.5}
        //                                 emptySymbol={<Icon icon="ic:baseline-star-half" />}
        //                                 placeholderSymbol={<Icon icon="ic:baseline-star" />}
        //                                 fullSymbol={<Icon icon="ic:baseline-star" />}
        //                                 className='text-2xl text-[#40F223]'
        //                             ></Rating>
        //                             <span>7.5k Ratings</span>
        //                         </div>
        //                         <div className='flex items-center lg:w-auto md:w-48 '>
        //                             <div>
        //                                 <h2 className='text-5xl font-bold  my-8'>00.00$</h2>
        //                                 <div className='flex gap-5'>
        //                                     <ProductCouter></ProductCouter>
        //                                     <div className='flex justify-center items-center rounded-none w-52 h-12 text-2xl font-semibold bg-transparent border hover:bg-transparent hover:border-black border-black normal-case'>240$</div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         <div className='flex gap-5 mt-20'>
        //                             <button className='btn rounded-none w-52 h-12 text-xl bg-transparent border hover:border-[#3B95B0] hover:text-[#3B95B0] hover:bg-transparent border-black normal-case'>Add to Cart</button>
        //                             <button className='btn rounded-none w-52 h-12 text-xl border-0 bg-[#0C4E67] hover:bg-[#3B95B0] text-white normal-case'>Purchase</button>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className='absolute xl:-right-36 lg:right-0 lg:top-32'>
        //                     <svg xmlns="http://www.w3.org/2000/svg" width="174" height="169" viewBox="0 0 174 169" fill="none">
        //                         <path d="M47.4741 3.00757V22.6667H20.6652V43.4859C22.225 40.7894 24.1959 38.6323 26.4289 37.1779C28.6619 35.7235 31.0984 35.0099 33.5541 35.0911C39.4973 35.0911 43.9869 37.4518 47.0229 42.1733C50.0733 46.9049 51.5771 55.9713 51.5771 69.4336V86.9253C51.6967 93.3292 51.4091 99.7353 50.7178 106.066C50.1059 110.203 48.81 114.075 46.9371 117.36C44.8386 121.022 42.0641 123.781 38.9244 125.328C34.8878 127.324 30.6303 128.265 26.3578 128.106C21.3128 128.256 16.3057 126.839 11.6859 123.954C7.72663 121.594 4.5157 117.248 2.66368 111.744C0.902201 106.279 0 97.8539 0 86.4064V79.7516H21.4815V87.4138C21.384 93.0543 21.5851 98.6973 22.083 104.295C22.1072 105.007 22.2319 105.704 22.4497 106.346C22.6676 106.987 22.974 107.56 23.3508 108.03C23.7275 108.5 24.1671 108.858 24.6431 109.081C25.1191 109.305 25.6218 109.39 26.1215 109.332C26.6028 109.36 27.0829 109.244 27.5307 108.992C27.9785 108.739 28.3839 108.356 28.7207 107.867C29.3178 107.058 29.6977 105.978 29.7948 104.814C29.7948 103.715 29.9022 98.8918 29.9666 90.3444V65.923C30.1366 62.7207 29.7914 59.5053 28.957 56.5208C28.622 55.6961 28.1295 55.0232 27.5363 54.5801C26.9432 54.1371 26.2738 53.942 25.6059 54.0176C24.6836 53.9726 23.7842 54.4314 23.0926 55.2997C22.4824 56.0343 22.0285 56.9964 21.7822 58.0776C21.5153 60.3462 21.4146 62.648 21.4815 64.9461H0.150386L1.05257 3.06859L47.4741 3.00757Z" fill="#FCC7BA" />
        //                         <path d="M109.899 44.5554V85.4917C110.044 92.3034 109.684 99.1179 108.825 105.822C108.049 110.241 106.53 114.326 104.4 117.728C102.231 121.328 99.4399 124.063 96.3012 125.665C92.8824 127.344 89.285 128.17 85.6679 128.107C81.3028 128.275 76.9481 127.419 72.779 125.573C69.5805 124.09 66.7478 121.335 64.616 117.636C62.6903 114.284 61.2322 110.44 60.3197 106.311C59.2897 100.114 58.8561 93.747 59.0308 87.3843V44.647C58.8135 36.1039 59.5383 27.565 61.179 19.3404C62.6329 13.5636 65.541 8.75681 69.342 5.84761C73.8657 2.30005 78.9784 0.549581 84.1427 0.780177C88.501 0.671534 92.8266 1.86767 96.8383 4.29077C100.089 6.13172 102.967 9.08949 105.216 12.8993C107.054 16.2693 108.338 20.1805 108.975 24.3468C109.736 31.0257 110.046 37.7928 109.899 44.5554ZM88.4176 34.2679C88.5861 30.1736 88.3621 26.0658 87.7516 22.0573C87.4976 21.214 87.0542 20.5141 86.4907 20.0668C85.9271 19.6194 85.2753 19.4499 84.6368 19.5846C83.9814 19.4789 83.3195 19.6737 82.7475 20.1405C82.1756 20.6073 81.7235 21.3217 81.4575 22.1794C80.7626 26.1697 80.5019 30.2876 80.6842 34.3901V94.2528C80.4853 98.5746 80.7314 102.914 81.4146 107.135C81.778 107.853 82.2612 108.431 82.8207 108.818C83.3802 109.205 83.9985 109.389 84.6203 109.352C85.242 109.316 85.8477 109.061 86.3829 108.61C86.9182 108.159 87.3664 107.526 87.6872 106.769C88.339 102.976 88.5852 99.0655 88.4176 95.1686V34.2679Z" fill="#FCC7BA" />
        //                         <path d="M142.744 20.1036C142.744 33.0164 137.008 39.7628 130.714 39.7628C124.098 39.7628 118.899 32.7417 118.899 21.1415C118.899 10.1214 123.647 1.7876 131.058 1.7876C138.469 1.7876 142.744 9.5719 142.744 20.1036ZM126.439 20.7752C126.439 27.2163 127.986 31.8869 130.929 31.8869C133.872 31.8869 135.225 27.7047 135.225 20.7752C135.225 14.6699 134.022 9.66348 130.929 9.66348C127.836 9.66348 126.439 14.6088 126.439 20.7752ZM131.251 65.5883L156.17 1.7876H161.648L136.665 65.5883H131.251ZM173.999 45.746C173.999 58.6588 168.264 65.3746 161.991 65.3746C155.719 65.3746 150.219 58.3535 150.155 46.7839C150.155 35.7638 154.902 27.3995 162.313 27.3995C169.725 27.3995 173.999 35.1838 173.999 45.746ZM157.781 46.3871C157.781 52.8587 159.242 57.4988 162.185 57.4988C165.128 57.4988 166.481 53.3166 166.481 46.3871C166.481 40.1291 165.342 35.3059 162.185 35.3059C159.027 35.3059 157.781 40.2207 157.781 46.3871Z" fill="#FCC7BA" />
        //                         <path d="M138.556 105.059C138.556 109.699 138.556 112.996 138.341 114.919C138.202 116.911 137.687 118.812 136.852 120.424C136.016 122.035 134.891 123.297 133.594 124.077C132.069 124.972 130.431 125.409 128.782 125.359C127.173 125.387 125.576 124.972 124.077 124.138C122.78 123.408 121.644 122.196 120.79 120.627C119.936 119.059 119.395 117.193 119.223 115.224C119.072 113.301 118.986 109.974 118.986 105.212V97.1527C118.986 92.5127 118.986 89.2158 119.223 87.2926C119.361 85.3715 119.858 83.5376 120.662 81.981C121.504 80.3531 122.64 79.0773 123.949 78.2873C125.48 77.3899 127.126 76.9533 128.782 77.0051C130.384 76.9775 131.974 77.3922 133.465 78.2262C134.763 78.9562 135.898 80.169 136.752 81.7374C137.606 83.3057 138.148 85.1718 138.32 87.14C138.47 89.0632 138.556 92.3906 138.556 97.1527V105.059ZM130.092 89.7958C130.142 88.4133 130.062 87.0276 129.856 85.6747C129.773 85.3838 129.625 85.1397 129.435 84.9798C129.245 84.8199 129.023 84.753 128.803 84.7894C128.605 84.7786 128.408 84.8403 128.231 84.9686C128.055 85.0968 127.904 85.2874 127.794 85.5221C127.465 86.8951 127.347 88.3527 127.45 89.7958V111.409C127.379 113.065 127.459 114.727 127.686 116.354C127.759 116.665 127.907 116.93 128.103 117.103C128.299 117.276 128.532 117.346 128.76 117.3C129.002 117.334 129.245 117.246 129.445 117.05C129.646 116.855 129.791 116.565 129.856 116.232C130.078 114.521 130.157 112.779 130.092 111.042V89.7958Z" fill="#FCC7BA" />
        //                         <path d="M141.714 77.981H155.999V87.139H150.135V95.9001H155.355V104.783H150.135V124.198H141.671L141.714 77.981Z" fill="#FCC7BA" />
        //                         <path d="M158.146 77.981H172.475V87.139H166.61V95.9001H171.83V104.783H166.61V124.198H158.146V77.981Z" fill="#FCC7BA" />
        //                         <path d="M13.3612 167.057C12.0499 167.835 10.6354 168.2 9.21527 168.125C8.16223 168.218 7.10741 167.988 6.12265 167.45C5.1379 166.912 4.24632 166.078 3.50847 165.007C2.77062 163.935 2.20385 162.65 1.84675 161.239C1.48964 159.828 1.35051 158.325 1.43892 156.831C1.37405 155.271 1.54138 153.709 1.92994 152.248C2.3185 150.786 2.91956 149.458 3.69393 148.349C4.46829 147.239 5.39855 146.375 6.42395 145.811C7.44936 145.248 8.54688 144.998 9.64486 145.078C10.9287 145.002 12.2075 145.347 13.3826 146.085L12.8886 148.436C11.9002 147.784 10.8203 147.46 9.73081 147.489C8.88527 147.421 8.03936 147.614 7.25167 148.056C6.46397 148.499 5.75332 149.179 5.16894 150.05C4.58456 150.921 4.14039 151.962 3.86726 153.101C3.59412 154.241 3.49851 155.451 3.58707 156.647C3.47737 157.837 3.55456 159.047 3.81311 160.189C4.07165 161.331 4.50513 162.378 5.08234 163.253C5.65956 164.129 6.36618 164.812 7.15136 165.254C7.93655 165.695 8.78078 165.883 9.62336 165.805C10.7612 165.833 11.8898 165.51 12.9315 164.859L13.3612 167.057Z" fill="#FCC7BA" />
        //                         <path d="M15.8955 145.446H18.0437V165.38H24.7459V167.792H16.0029L15.8955 145.446Z" fill="#FCC7BA" />
        //                         <path d="M35.0575 157.321H28.9353V165.38H35.7019V167.792H26.873V145.446H35.3582V147.858H28.9137V154.94H35.036L35.0575 157.321Z" fill="#FCC7BA" />
        //                         <path d="M40.9213 160.771L39.2888 167.792H37.1406L42.4895 145.446H44.9384L50.3087 167.792H48.1606L46.485 160.771H40.9213ZM46.0769 158.512L44.5517 152.071C44.2272 150.74 43.9547 149.384 43.7354 148.011C43.5206 149.323 43.2628 150.697 42.9621 152.04L41.4154 158.512H46.0769Z" fill="#FCC7BA" />
        //                         <path d="M52.6504 145.749C53.9407 145.423 55.2496 145.27 56.56 145.292C58.1838 145.05 59.8114 145.694 61.1141 147.093C61.5178 147.636 61.8358 148.296 62.0469 149.027C62.258 149.759 62.3574 150.546 62.3386 151.336C62.3514 152.617 62.0686 153.869 61.5332 154.9C60.9978 155.931 60.2394 156.684 59.3741 157.044C60.0057 157.433 60.5534 158.054 60.961 158.842C61.3686 159.631 61.6216 160.559 61.6941 161.532C61.971 163.612 62.3735 165.655 62.8971 167.637H60.7489C60.2664 165.914 59.9136 164.123 59.6964 162.295C59.2238 159.242 58.386 158.052 56.5386 157.96H54.6267V167.637H52.5859L52.6504 145.749ZM54.6911 155.915H56.8393C58.9874 155.915 60.3837 154.236 60.3837 151.672C60.3837 149.107 58.9015 147.52 56.7534 147.489C56.0822 147.47 55.4117 147.562 54.7556 147.764L54.6911 155.915Z" fill="#FCC7BA" />
        //                         <path d="M67.9243 160.771L66.2917 167.792H64.1436L69.471 145.446H71.9198L77.2902 167.792H75.1421L73.4665 160.771H67.9243ZM73.1014 158.512L71.5547 152.071C71.211 150.605 70.9747 149.293 70.7384 148.011C70.5021 149.323 70.2443 150.697 69.9436 152.04L68.3969 158.512H73.1014Z" fill="#FCC7BA" />
        //                         <path d="M79.6104 167.792V145.446H81.7585L86.7852 156.741C87.8438 159.07 88.7911 161.497 89.6207 164.006C89.4274 160.954 89.3844 158.298 89.3844 154.848V145.507H91.2963V167.853H89.4059L84.4007 156.527C83.3152 154.12 82.3324 151.623 81.4577 149.048C81.5651 151.887 81.6296 154.574 81.6296 158.206V167.761L79.6104 167.792Z" fill="#FCC7BA" />
        //                         <path d="M105.947 167.059C104.628 167.836 103.207 168.2 101.78 168.127C100.728 168.221 99.6735 167.991 98.6897 167.452C97.7059 166.914 96.8154 166.08 96.0792 165.008C95.3429 163.935 94.7783 162.65 94.4238 161.239C94.0692 159.828 93.9331 158.325 94.0248 156.833C93.9591 155.265 94.1281 153.695 94.5204 152.227C94.9128 150.758 95.5197 149.425 96.3012 148.315C97.0827 147.204 98.021 146.342 99.0542 145.784C100.087 145.226 101.192 144.986 102.295 145.08C103.579 145.007 104.857 145.352 106.033 146.087L105.539 148.438C104.522 147.78 103.412 147.466 102.295 147.522C101.451 147.458 100.608 147.655 99.8229 148.099C99.0378 148.543 98.3299 149.224 97.7479 150.094C97.1659 150.965 96.7238 152.005 96.4519 153.142C96.18 154.278 96.0848 155.486 96.173 156.68C96.0633 157.87 96.1405 159.079 96.399 160.221C96.6576 161.364 97.091 162.41 97.6683 163.286C98.2455 164.162 98.9521 164.845 99.7373 165.286C100.522 165.727 101.367 165.916 102.209 165.838C103.347 165.865 104.476 165.543 105.517 164.892L105.947 167.059Z" fill="#FCC7BA" />
        //                         <path d="M116.623 157.321H110.501V165.38H117.332V167.792H108.481V145.446H116.967V147.858H110.522V154.94H116.644L116.623 157.321Z" fill="#FCC7BA" />
        //                         <path d="M124.614 164.28C125.718 165.221 126.979 165.727 128.266 165.745C130.414 165.745 131.553 164.188 131.553 161.929C131.553 159.67 130.715 158.632 128.588 157.472C126.01 156.19 124.421 154.42 124.421 151.153C124.449 150.265 124.606 149.394 124.882 148.596C125.158 147.798 125.548 147.09 126.026 146.517C126.504 145.943 127.061 145.516 127.661 145.264C128.261 145.011 128.891 144.937 129.512 145.048C130.719 144.98 131.918 145.359 132.992 146.147L132.433 148.497C131.516 147.795 130.49 147.428 129.448 147.429C127.299 147.429 126.483 149.261 126.483 150.787C126.483 152.863 127.45 153.84 129.619 155.091C132.283 156.556 133.615 158.388 133.615 161.654C133.615 164.921 131.832 168.096 128.116 168.096C126.712 168.115 125.329 167.621 124.099 166.661L124.614 164.28Z" fill="#FCC7BA" />
        //                         <path d="M138.942 160.771L137.309 167.792H135.161L140.51 145.446H143.109L148.48 167.792H146.332L144.656 160.771H138.942ZM144.097 158.512L142.551 152.071C142.207 150.605 141.971 149.293 141.734 148.011C141.498 149.323 141.24 150.697 140.94 152.04L139.393 158.512H144.097Z" fill="#FCC7BA" />
        //                         <path d="M150.672 145.446H152.82V165.38H159.522V167.792H150.779L150.672 145.446Z" fill="#FCC7BA" />
        //                         <path d="M169.833 157.321H163.711V165.38H170.52V167.792H161.691V145.446H170.284V147.858H163.84V154.94H169.962L169.833 157.321Z" fill="#FCC7BA" />
        //                     </svg>
        //                 </div>
        //             </div>
        //         </div>

        //         {/* <ReactImageMagnify {...{
        //                 hoverOffDelayInMs: 50,
        //                 isEnlargedImagePortalEnabledForTouch: true,
        //                 smallImage: {
        //                     alt: 'Wristwatch by Ted Baker London',
        //                     isFluidWidth: true,
        //                     src: zomeImg1,



        //                 },
        //                 largeImage: {
        //                     src: zomeImg1,
        //                     width: 991,
        //                     height: 448
        //                 }
        //             }} /> */}

        //     </div>
        // </div>
    );
};

export default SingleProductDetails;