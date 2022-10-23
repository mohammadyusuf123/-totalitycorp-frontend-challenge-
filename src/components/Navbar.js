import React from 'react';
import logo from '../assets/images/applelogo.png'

const navbar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <div class="navbar bg-secondary h-2    text-sm text-gray-300">
         
  <div class="navbar-start">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact bg-secondary  dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><a><button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button></a></li>
      <li><a>Store</a></li>
      <li><a>Mac</a></li>
      <li><a>ipad</a></li>
      <li><a>iphone</a></li>
      <li><a>Watch</a></li>
      <li><a>AirPods</a></li>
      <li><a>Tv & Home</a></li>
      <li><a>Only on Apple</a></li>
      <li><a>Accessories</a></li>
      <li><a>Support</a></li>  
      </ul>
    </div>
    
  </div>
  <div class="navbar-center hidden lg:flex">
  <div className=" pr-5">
  <img src={logo} alt="" className=' w-4' srcset="" />
  </div>
    <ul class="menu menu-horizontal p-0">
      <li><a>Store</a></li>
      <li><a>Mac</a></li>
      <li><a>ipad</a></li>
      <li><a>iphone</a></li>
      <li><a>Watch</a></li>
      <li><a>AirPods</a></li>
      <li><a>Tv & Home</a></li>
      <li><a>Only on Apple</a></li>
      <li><a>Accessories</a></li>
      <li><a>Support</a></li>
      <li><a><button class="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button></a></li>
    </ul>
  </div>
  <div class="navbar-end">
  
  </div>
</div>
        </div>
    );
};

export default navbar;