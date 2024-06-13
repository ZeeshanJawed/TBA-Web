'use client'
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMediaQuery } from 'react-responsive';


import certifiImg1 from './../public/certifiImg1.png';
import certifiImg2 from './../public/certifiImg2.png';

export default function CertificateSlider() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const settings = {
        // dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: isMobile ? 1 : 3,
        slidesToScroll: isMobile ? 1 : 3,
        arrows: false,

    };

    return (
        <div className="slider-container w-full p-6">
            <Slider {...settings}>



                <div>
                    <div className="flex w-[400px]">
                        <Image src={certifiImg1} alt="Logo" width={100} height={100} />

                        <div className="pl-5 flex flex-col items-start">
                            <div className="text-toolsText text-1xl">Make Intermediate Certificate</div>
                            <div className="mt-3">
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2">
                                    Automation
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2 ml-2">
                                    Data Structures
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2 ml-2">
                                    JSON
                                </button>

                            </div>

                            <div className="mt-3 text-xs text-toolsText">Provider: Make  .  Issued: April 2024</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex w-[400px]">
                        <Image src={certifiImg2} alt="Logo" width={100} height={100} />

                        <div className="pl-5 flex flex-col items-start">
                            <div className="text-toolsText text-1xl">Make Intermediate Certificate</div>
                            <div className="mt-3">
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2">
                                    Automation
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2 ml-2">
                                    Data Structures
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2 ml-2">
                                    JSON
                                </button>

                            </div>

                            <div className="mt-3 text-xs text-toolsText">Provider: Make  .  Issued: April 2024</div>
                        </div>

                    </div>
                </div>
                <div>
                    <div className="flex w-[400px]">
                        <Image src={certifiImg1} alt="Logo" width={100} height={100} />

                        <div className="pl-5 flex flex-col items-start">
                            <div className="text-toolsText text-1xl">Make Intermediate Certificate</div>
                            <div className="mt-3">
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2">
                                    Automation
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2 ml-2">
                                    Data Structures
                                </button>
                                <button className="bg-certificateBtn text-white rounded-full text-[10px] px-4 py-2 ml-2">
                                    JSON
                                </button>

                            </div>

                            <div className="mt-3 text-xs text-toolsText">Provider: Make  .  Issued: April 2024</div>
                        </div>

                    </div>

                </div>

            </Slider>
        </div>
    );
}