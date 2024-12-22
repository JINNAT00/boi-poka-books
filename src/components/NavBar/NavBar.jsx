import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

    const links = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Listed Books</NavLink></li>
        <li><NavLink to="/">Pages to Read</NavLink></li>
        
    </>
    
    return (
        <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 #e5e7eb shadow space-x-3.5">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Boi Poka</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 #e5e7eb space-x-3.5">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-x-2">
          <a className="btn bg-[#23BE0A]">Sign In</a>
          <a className="btn bg-[#59C6D2]">Sign Up</a>
        </div>
      </div>
    );
};

export default NavBar;