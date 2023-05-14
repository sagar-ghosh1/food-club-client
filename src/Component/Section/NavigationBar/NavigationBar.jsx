import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GetContext } from '../../../providers/AuthProvider';
import logo from '../../../assets/food-club.png'
import LazyLoad from 'react-lazy-load';

const NavigationBar = () => {
    const { users, userLogOut } = useContext(GetContext);

    const handleLogOut = () => {
        userLogOut()
            .then()
            .catch(() => console.log(error));
    }

    return (
        <div>
            <div className="navbar bg-slate-200">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/chef">Chef</Link></li>
                            <li><Link to="/about">About</Link></li>
                        </ul>
                    </div>

                    <div className='flex items-center h-0'>
                        <LazyLoad>
                            <img className='w-20' src={logo} alt="" />
                        </LazyLoad>
                        <Link to="/" className="font-bold normal-case sm:text-3xl lg:text-3xl">Food Club</Link>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex text-[17px]">
                    <NavLink to="/" className='mr-5' style={({ isActive, isPending }) => {
                        return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#0081a7", };
                    }}> Home </NavLink>

                    <NavLink to="/blog" className='mr-5' style={({ isActive, isPending }) => {
                        return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#0081a7", };
                    }}> Blog </NavLink>

                    <NavLink to="/chef" className='mr-5' style={({ isActive, isPending }) => {
                        return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#0081a7", };
                    }}> Chef </NavLink>

                    <NavLink to="/about" style={({ isActive, isPending }) => {
                        return { fontWeight: isActive ? "bold" : "", color: isPending ? "red" : "#0081a7", };
                    }}> About </NavLink>
                </div>

                <div className="navbar-end">
                    {users &&
                        <div className="avatar tooltip tooltip-left" data-tip={users?.displayName}>
                            <div className="w-11 me-3 rounded-full ">
                                <LazyLoad>
                                    <img src={users?.photoURL} />
                                </LazyLoad>
                            </div>
                        </div>}

                    {users ?
                        <button onClick={handleLogOut} className='btn'>Log Out</button> :
                        <Link to="/login">
                            <button className='btn bg-green-600'>Log In</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;