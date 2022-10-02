import React from 'react';

const GetInTouch = () => {
    return (
        <>
            <section className='my-3'>
                <div className='md:w-2/3 bg-gray-100 mx-auto flex justify-around py-12 flex-col md:flex-row'>
                    <div className='space-y-1'>
                        <p>
                            We are 24/7 here to answer your questions
                        </p>
                        <div className='text-[#030642] font-bold text-4xl'>
                            You need our help?
                        </div>
                    </div>
                    <div>
                        <button className='btn btn-primary rounded'>Get In Touch</button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default GetInTouch;