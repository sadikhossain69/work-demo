import React from 'react';
import { GrAchievement } from 'react-icons/gr';
import { GiAchievement } from 'react-icons/gi';
import pic1 from '../../assets/achievement/pic-1.jpg'
import { BsCup, BsFillEmojiSmileFill } from 'react-icons/bs';

const Achievement = () => {

    const [matches, setMatches] = React.useState(window.matchMedia("(min-width: 768px)").matches);

    React.useEffect(() => {
        window
            .matchMedia("(min-width: 768px)")
            .addEventListener('change', e => setMatches(e.matches));
    }, []);

    return (
        <>
            {matches && (
                <section
                    className='flex justify-around items-center'
                    style={
                        {
                            backgroundImage: `url(${pic1})`,
                            height: '50vh',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }
                    }
                >
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <GrAchievement
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-[#070424] text-4xl'>8K+</p>
                            <p className='text-sm '>Project Completed
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <GiAchievement
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-black text-4xl'>1.2K</p>
                            <p className='text-sm '>Active Clients
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <BsCup
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-black text-4xl'>625</p>
                            <p className='text-sm '>Cup of Coffee
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <BsFillEmojiSmileFill
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-black text-4xl'>7K</p>
                            <p className='text-sm '>Happy Clients
                            </p>
                        </div>
                    </div>
                </section>
            )}
            {!matches && (
                <section
                    className='grid grid-cols-2'
                    style={
                        {
                            backgroundImage: `url(${pic1})`,
                            height: '100vh',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }
                    }
                >
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <GrAchievement
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-[#070424] text-4xl'>8K+</p>
                            <p className='text-sm '>Project Completed
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <GiAchievement
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-black text-4xl'>1.2K</p>
                            <p className='text-sm '>Active Clients
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <BsCup
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-black text-4xl'>625</p>
                            <p className='text-sm '>Cup of Coffee
                            </p>
                        </div>
                    </div>
                    <div className='flex gap-5 mb-3 md:flex-row flex-col items-center'>
                        <div>
                            <BsFillEmojiSmileFill
                                className='bg-[#E2D2FE] p-2 text-blue-900'
                                size={50}
                            />
                        </div>
                        <div className=''>
                            <p className='font-bold text-black text-4xl'>7K</p>
                            <p className='text-sm '>Happy Clients
                            </p>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Achievement;