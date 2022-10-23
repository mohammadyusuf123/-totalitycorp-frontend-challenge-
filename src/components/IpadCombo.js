import React from 'react';
import ipadcombo from'../assets/images/ipad combo.jpeg'
import m2 from'../assets/images/m2.png'
import arrow from'../assets/images/arrow.png'

const IpadCombo = () => {
    return (
        <div className='pt-5 relative bg-black '>
          <div className="absolute top-1/2 lg:pl-5 md:pl-3 sm:pl-0">
          <h1 className='text-gray-200 font-bold text-xl   mb-3'>
                <h2 class="card-title font-medium pl-5 md:text-4xl lg:text-6xl sm:text-xl">iPad Pro</h2>
                </h1>
                <div className='text-gray-200 '>
                    <div className="flex">
                    <p className='font-medium  md:text-xl lg:text-2xl sm:text-s pt-2'>Supercharged by </p>
                    <img src={m2} alt="" className='w-8' srcset="" />
                    </div>
                <p className='font-normal  lg:text-xl md:text-sm sm:text-sm lg:pl-5 md:pl-3 sm:pl-0 pt-3 text-gray-500'>Available starting 10.26</p>
                <div class="card-actions flex  md:text-xl lg:text-2xl sm:text-sm   pt-3">
      <button class=" font-normal  text-blue-500 ">Learn more </button><img src={arrow} alt="" className='w-4 pt-3 ' srcset="" />
      <button class="pl-5  font-normal text-blue-500">Order now</button> <img src={arrow} alt="" className='w-4 pt-3' srcset="" />
    </div>
                </div>
          </div>
                
                <div className=''>
                <img src={ipadcombo} alt="" srcset="" className=''  width={'100%'}/>
            </div>
           
            
        </div>
    );
};

export default IpadCombo;