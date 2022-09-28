import React from 'react';
import OurService from './OurService';

const OurServices = () => {
    return (
        <>
            <section className='text-center py-36'>
                <div className='mx-auto bg-base-200 inline p-3 text-primary font-semibold'>
                    What We Do
                </div>
                <h3 className='font-semibold text-4xl text-[#040741] my-4'>Our Services</h3>
                <p className='text-center md:px-44'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam deserunt sapiente deleniti culpa laboriosam provident labore, molestiae dolorem possimus nostrum, sint consequuntur dicta aliquid sit praesentium? Ratione explicabo doloribus reiciendis animi, officia ullam voluptatem.
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:px-36'>
                    <OurService />
                </div>
            </section>
        </>
    );
};

export default OurServices;