import React from 'react';
import about1 from '../../assets/about/about-1.jpg';
import ceo from '../../assets/about/ceo.jpg';

const AboutSection = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 md:px-40 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <img className="object-cover object-center rounded" alt="hero" src={about1} />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                        <p className=' bg-base-200 inline p-3 text-primary font-bold uppercase mb-3'>
                            about us
                        </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 text-[#070424] font-bold">World best All for
                            <br className="hidden lg:inline-block" />your business
                        </h1>
                        <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
                        <div className='flex gap-5 mb-3'>
                            <div>
                                <img className='w-20' src={ceo} alt="" />
                            </div>
                            <div>
                                <p className='font-bold text-[#070424]'>Michel Richard</p>
                                <p className='text-sm'>CEO of Company</p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <button className='px-5 py-3 bg-primary text-white font-semibold rounded'>
                                About More
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutSection;