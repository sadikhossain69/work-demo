import React from 'react';

const OurTeam = () => {
    return (
        <div>
            <div className='flex-col flex justify-between md:flex-row py-8'>
                <div className='space-y-2'>
                    <p className=' bg-base-200 inline p-3 text-primary font-semibold'>
                        Testimonial
                    </p>
                    <h1 className='text-4xl font-bold text-[#070424]'> Meet Our Team</h1>
                    <p>
                        interactively whiteboard interdependent expertise
                        vis-a-vis process-centric vortale,
                    </p>
                </div>
                <div className='space-y-2'>
                    <p className='text-xl font-bold text-[#070424]'>
                        Become a Team Member With Our Company
                    </p>
                    <div className='flex justify-center md:justify-end'>
                        <button className='px-5 py-3 bg-primary text-white font-semibold rounded'>
                            View All Team Member
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTeam;