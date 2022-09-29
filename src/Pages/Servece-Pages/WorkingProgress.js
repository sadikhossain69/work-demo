import React from 'react';
import { DiGoogleAnalytics } from 'react-icons/di';
import { FaRegLightbulb } from 'react-icons/fa';
import { BsCloudDownload } from 'react-icons/bs';
import progress from '../../assets/06_Service-progress-bar-preview.png';

const WorkingProgress = () => {
    return (
        <>
            <section className='py-20 bg-[#F9F9FB] relative'>
                <div className='space-y-3 md:absolute left-40'>
                    <p className=' bg-base-200 inline p-3 text-primary font-semibold'>
                        How We Work
                    </p>
                    <p className='text-3xl text-[#040541] font-bold'>
                        Our Working Progress
                    </p>
                    <p>
                        Globally actualize premier testing procedures and user - centrice <br /> - business . Holisticly productivate cross - media core
                    </p>
                    <div>
                        <button className='px-5 py-3 bg-primary text-white font-semibold rounded'>
                            Learn More
                        </button>
                    </div>
                </div>

        <img className='text-center mx-auto w-full hidden md:block' src={progress} alt="" />

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-32 relative'>

                    <div className="card bg-base-100 shadow w-80 mx-auto rounded-none h-56">
                        <div className="card-body">
                            <DiGoogleAnalytics className='bg-[#7147c6] text-white p-2 rounded-full'
                                size={50}
                            />
                            <h2 className="card-title font-bold text-[#040541] text-2xl">Your Project Analysis</h2>
                            <p>
                                Intrinsicly create an expanded array of
                                strategic theme areas without build
                                ethical processes for.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow w-80 mx-auto rounded-none md:mt-[-100px] h-64">
                        <div className="card-body">
                            <FaRegLightbulb className='bg-[#7147c6] text-white p-2 rounded-full'
                                size={50}
                            />
                            <h2 className="card-title font-bold text-[#040541] text-2xl">Build Prowefull Solutions</h2>
                            <p>
                                Intrinsicly create an expanded array of
                                strategic theme areas without build
                                ethical processes for.
                            </p>
                        </div>
                    </div>

                    <div className="card bg-base-100 shadow w-80 mx-auto rounded-none md:mt-[-200px] h-64">
                        <div className="card-body">
                            <BsCloudDownload className='bg-[#7147c6] text-white p-2 rounded-full'
                                size={50}
                            />
                            <h2 className="card-title font-bold text-[#040541] text-2xl">Complete and Downlaod</h2>
                            <p>
                                Intrinsicly create an expanded array of
                                strategic theme areas without build
                                ethical processes for.
                            </p>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default WorkingProgress;