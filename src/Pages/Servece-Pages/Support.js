import React from 'react';
import banner from '../../assets/output-onlinepngtools.png';

const Support = () => {
    return (
        <div className='py-10' style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", minHeight: '70vh' }}>
            <div className='text-center space-y-3'>
                <p className=' bg-base-300 inline p-3 text-primary font-semibold'>
                    Let's Support
                </p>
                <p className='text-4xl text-white font-bold'>
                    You need our support, to have <br />
                    any projects?
                </p>
                <p className='md:px-44 text-white font-semibold'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus veritatis laborum reiciendis sed totam cumque perspiciatis. Itaque magni fugit sequi quo vel voluptatibus atque fugiat repudiandae eius sunt omnis dolores odit facere neque nihil autem quisquam dignissimos, excepturi voluptatem. Labore delectus cumque neque vel quidem aspernatur a deserunt nulla fugit.
                </p>
                <div className='sm:space-x-2 flex justify-center flex-col md:flex-row'>
                    <div>
                        <button className='btn btn-ghost bg-primary text-white hover:bg-indigo-600 rounded-sm'>Get Free Quotes</button>
                    </div>
                    <div>
                        <button className='btn btn-ghost text-white border-white rounded-sm'>Get Free Quotes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;