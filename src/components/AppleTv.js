import React from 'react';
import remot from '../assets/images/apple-tv.png'
import logo from '../assets/images/apple_tv_4k_logo_dark.png'
import tv from '../assets/images/tv.jpeg'
import arrow from'../assets/images/arrow.png'


const AppleTv = () => {
    return (
       <div className="pt-3">
         <div class="card bg-gray-100  flex items-center text-center rounded-none  ">
           
        
          <img src={tv} alt="Shoes" class="w-3/6  origin-bottom " />
           <img src={remot} alt="Shoes" class=" w-96 pt-5" />
            <img src={logo} alt="Shoes" class="w-40 " />
        
           
           <div className="">
           <p className='font-normal text-2xl pt-3'>The Apple experience. Cinematic in every sense</p>
    <p className='font-normal text-xl pt-3 text-gray-500'>Available starting 11.4</p>
           </div>
           <div class="card-actions flex text-xl pt-3 pb-5">
      <button class=" font-normal text-blue-500 ">Learn more </button> <img src={arrow} alt="" className='w-4 pt-2' srcset="" />
      <button class="pl-5 font-normal text-blue-500">Order now</button><img src={arrow} alt="" className='w-4 pt-2' srcset="" />
    </div>
         
</div>
       </div>
    );
};

export default AppleTv;