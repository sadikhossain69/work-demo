import React from 'react';
import CustomerFeedbacks from './CustomerFeedbacks';

const Testimonial = () => {
    return (
        <div>
            <div className='text-center'>
                <p className=' bg-base-200 inline p-3 text-primary font-semibold'>
                    Testimonial
                </p>
            </div>
            <h3 className='font-semibold text-4xl text-[#040741] my-4 text-center'>Our Customers Feedback</h3>
            <p className='text-center md:px-44'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam totam deserunt sapiente deleniti culpa laboriosam provident labore, molestiae dolorem possimus nostrum, sint consequuntur dicta aliquid sit praesentium? Ratione explicabo doloribus reiciendis animi, officia ullam voluptatem.
            </p>
            <CustomerFeedbacks />
        </div>
    );
};

export default Testimonial;