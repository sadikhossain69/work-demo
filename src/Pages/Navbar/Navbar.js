import React from 'react';

const Navbar = () => {
    return (
        <>
            <section>
                <div className="navbar bg-base-100 md:px-10">
                    <div className="navbar-start">
                        <div className="dropdown md:hidden">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                            </label>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Homepage</a></li>
                                <li><a>Portfolio</a></li>
                                <li><a>About</a></li>
                            </ul>
                        </div>
                        <div className='font-bold text-3xl'>
                            Dalky
                        </div>
                    </div>
                    <div className="navbar-center hidden md:block">
                        <div className="dropdown dropdown-center">
                            <label tabIndex={0} className="btn btn-ghost normal-case text-lg">
                                <div className="rounded-full">
                                    <p>Home</p>
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <p className="btn btn-ghost normal-case text-lg">About Us</p>
                        <div className="dropdown dropdown-center">
                            <label tabIndex={0} className="btn btn-ghost normal-case text-lg">
                                <div className="rounded-full">
                                    <p>Services</p>
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <p className="btn btn-ghost normal-case text-lg">Blogs</p>
                        <p className="btn btn-ghost normal-case text-lg">Contact Us</p>

                    </div>
                    <div className="navbar-end md:space-x-3">
                        <button className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        </button>
                        <div className='hidden md:block'>
                            <button className='px-3 py-4 bg-primary text-white rounded'>Let's Talk Us</button>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://placeimg.com/80/80/people" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Navbar;