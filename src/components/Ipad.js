import React from 'react';
import ipad from'../assets/images/ipad.jpeg'
import arrow from'../assets/images/arrow.png'

const Ipad = () => {
    return (
        
           <div class="pt-3">
            
  <div className=" card  bg-base-100 lg:flex items-center text-center md:flex-row sm:flex-col shadow-none">
  <figure class=" lg:pl-96 lg:pt-10 md:p-0">
    <img src={ipad} alt="Shoes" class="rounded-xl max-w-sm" />
  </figure>
  <div class="card-body lg:pr-96 pt-32  items-center text-center ">
    <h2 class="card-title font-medium text-6xl">iPad</h2>
    <p className='font-normal text-2xl '>Lovable.Drawable.Magical</p>
    <p className='font-normal text-xl  text-gray-500'>Available starting 10.26</p>
    <div class="card-actions flex text-xl ">
      <button class=" font-normal text-blue-500 ">Learn more  </button> <img src={arrow} alt="" className='w-4 pt-2' srcset="" />
      <button class="pl-5 font-normal text-blue-500">Order now </button><img src={arrow} alt="" className='w-4 pt-2' srcset="" />
    </div>
  </div>
  </div>
</div>
        
    );
};

export default Ipad;