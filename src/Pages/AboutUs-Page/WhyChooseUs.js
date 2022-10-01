import React from 'react';
import { BsHeadphones, BsLightbulbFill } from 'react-icons/bs';
import { FaBitcoin } from 'react-icons/fa';
import pic1 from '../../assets/whychoose/pic-1.jpg';
import pic2 from '../../assets/whychoose/pic-2.jpg';

const WhyChooseUs = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:px-40 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className=' bg-base-200 inline p-3 text-primary font-bold uppercase mb-3'>
                            why choose us
                        </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 text-[#070424] font-bold">Exceptional solution for
                            {/* <br className="hidden lg:inline-block" /> */}
                            digital business model
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic.</p>

                        <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                            <div>
                                <BsLightbulbFill
                                    className='bg-[#E2D2FE] p-2 text-blue-900'
                                    size={50}
                                />
                            </div>
                            <div className=''>
                                <p className='font-bold text-[#070424] text-lg'>Creative Ideas</p>
                                <p className='text-sm '>Dynamically extend 24/365 human capital whereas premium opportunities. Continually evisculate,</p>
                            </div>
                        </div>

                        <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                            <div>
                                <FaBitcoin
                                    className='bg-[#E2D2FE] p-2 text-blue-900'
                                    size={50}
                                />
                            </div>
                            <div className=''>
                                <p className='font-bold text-[#070424] text-lg'>100% Moneyback Offer</p>
                                <p className='text-sm '>Collaborativety customize efficient initiatives whereas
cooperative synergy. Credibly promote ethical,
</p>
                            </div>
                        </div>

                        <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                            <div>
                                <BsHeadphones
                                    className='bg-[#E2D2FE] p-2 text-blue-900'
                                    size={50}
                                />
                            </div>
                            <div className=''>
                                <p className='font-bold text-[#070424] text-lg'>24/7 Live Support</p>
                                <p className='text-sm '>Seomlessly evisculate 82C supply choins rather than
stficient architectures. Rapidiously.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:relative">
                        <img className="object-cover object-center rounded" alt="hero" src={pic1} />
                        <img className="object-cover object-center rounded md:absolute md:left-28 md:top-44" alt="hero" src={pic2} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;