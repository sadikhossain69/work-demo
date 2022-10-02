import React from 'react';
import team1 from '../../assets/team/team-1.png';
import team2 from '../../assets/team/team-2.jpg';
import team3 from '../../assets/team/team-3.jpg';
import team4 from '../../assets/team/team-4.jpg';

const TeamMembers = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-20 px-3 mb-5'>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={team1} alt="Shoes" className="rounded h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Moana</h2>
                        <p className='text-sm'>UI/Ux Designer</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={team2} alt="Shoes" className="rounded h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Shalini</h2>
                        <p className='text-sm'>QA Engineer</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={team3} alt="Shoes" className="rounded h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">John Smith</h2>
                        <p className='text-sm'>Web Developer</p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="">
                        <img src={team4} alt="Shoes" className="rounded h-40" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title font-bold">Eve</h2>
                        <p className='text-sm'>Digital Marketer</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;