import React from 'react';
import skill from '../../assets/ourskills/skill-1.jpg'

const OurSkills = () => {
    return (
        <>
            <section className="bg-gray-100 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <p className=' bg-base-200 inline p-3 text-primary font-semibold'>
                            Our Skills
                        </p>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#030642]">We are more than ever
                            <br className="hidden lg:inline-block" />creative on experience
                        </h1>
                        <p className="mb-8 leading-relaxed">Enthusiastically customize emerging e-services whereas cross functional
                            users, Creaibly productivate diverse manufactured products</p>
                        <div className="flex flex-col justify-start space-y-2">
                            <p className='text-[#030642] font-bold'>Digital Marketing</p>
                            <progress className="progress progress-primary w-60" value="100" max="100"></progress>
                            <p className='text-[#030642] font-bold'>Branding</p>
                            <progress className="progress progress-primary w-60" value="80" max="100"></progress>
                            <p className='text-[#030642] font-bold'>Social Media Strategy</p>
                            <progress className="progress progress-primary w-60" value="90" max="100"></progress>
                            <p className='text-[#030642] font-bold'>Business Development</p>
                            <progress className="progress progress-primary w-60" value="85" max="100"></progress>
                        </div>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 hidden md:block">
                        <img className="object-cover object-center rounded" alt="hero" src={skill} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurSkills;