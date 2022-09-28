import React from 'react';
import { BiCodeBlock } from 'react-icons/bi'
import { MdOutlineBusinessCenter } from 'react-icons/md'
import { FaProductHunt } from 'react-icons/fa'
import { SiAntdesign } from 'react-icons/si'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { IoShareSocialSharp } from 'react-icons/io5'
import { BsSearch } from 'react-icons/bs'
import { GrMonitor } from 'react-icons/gr'

const OurService = () => {
    return (
        <>
            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <BiCodeBlock className='bg-[#7147c6] text-white p-2'
                        size={50}
                    />
                    <h2 className="card-title font-bold">Web Design and Development</h2>
                    <p>
                        Proactively seize installed baseapplications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <MdOutlineBusinessCenter className='bg-[#E2D2FE] p-2 text-blue-900'
                        size={50}
                    />
                    <h2 className="card-title font-bold">Business Developments</h2>
                    <p>
                        Proactively seize installed base
                        applications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <FaProductHunt className='bg-[#E2D2FE] p-2 text-blue-900'
                        size={50}
                    />
                    <h2 className="card-title font-bold">Product Managements</h2>
                    <p>
                        Proactively seize installed base
                        applications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <SiAntdesign className='bg-[#E2D2FE] p-2 text-blue-900'
                        size={50}
                    />
                    <h2 className="card-title font-bold">UI/UX <br /> Designs</h2>
                    <p>
                        Proactively seize installed base
                        applications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <FaMapMarkerAlt className='bg-[#E2D2FE] p-2 text-blue-900'
                        size={50}
                    />
                    <h2 className="card-title font-bold">Marketing And Communications</h2>
                    <p>
                        Proactively seize installed base
                        applications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <IoShareSocialSharp className='bg-[#E2D2FE] p-2 text-blue-900'
                        size={50}
                    />
                    <h2 className="card-title font-bold">Social <br /> Marketing</h2>
                    <p>
                        Proactively seize installed base
                        applications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <BsSearch className='bg-[#E2D2FE] p-2 text-blue-900'
                        size={50}
                    />
                    <h2 className="card-title font-bold">SEO & <br /> Content Writing</h2>
                    <p>
                        Proactively seize installed base
                        applications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>

            <div className="card bg-base-100 shadow-xl w-60">
                <div className="card-body">
                    <GrMonitor className='bg-[#E2D2FE] p-2 text-blue-900'
                        size={50}
                    />
                    <h2 className="card-title font-bold">Digital <br />Marketing</h2>
                    <p>
                        Proactively seize installed base
                        applications whereas .
                    </p>
                    <div className="card-actions justify-start">
                        <button className="text-secondary font-bold">Read More</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurService;