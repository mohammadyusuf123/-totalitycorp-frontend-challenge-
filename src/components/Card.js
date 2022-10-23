import React from 'react';
import iphone14 from'../assets/images/unnamed (2).jpg'
import iphone14Pro from'../assets/images/unnamed.jpg'
import watch1 from'../assets/images/unnamed (3).jpg'
import watch2 from'../assets/images/w3.jpeg'
import watchTheme from'../assets/images/wt3.png'
import watchTheme2 from'../assets/images/watch theme2.png'
import airpods from'../assets/images/unnamed (4).jpg'
import card from'../assets/images/card.png'
import Arrow from './Arrow';

const Card = () => {
    return (
        <div className=' grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 lg:gap-3 pt-3 sm:gap-1 pt-1 '>
             <div className='bg-black pt-5'>
             <div className=' flex-col text-center'>
                <div className='text-gray-200 '>
                <h2 class=" font-bold  text-4xl">iPhone 14 Pro</h2>
                    <p className='font-normal pt-3 text-2xl'>Pro.Beyond</p>
                <div class=" flex text-xl pt-3 justify-center items-center ">
      <button class="  text-blue-500 ">Learn more </button><Arrow/>
      <button class="pl-10  text-blue-500">Buy</button><Arrow/>
    </div>
               
                </div>
                
            </div>
            <div>
                <img src={iphone14} alt="" srcset="" className=''  width={'100%'}/>
            </div>
            
        </div>
             <div className='bg-gray-100 pt-5'>
             <div className=' flex-col text-center'>
                <div className='text-black-200 '>
                <h2 class=" font-bold  text-4xl">iPhone 14 Pro</h2>
                    <p className='font-normal pt-3 text-2xl'>Big and bigger</p>
                <div class=" flex text-xl pt-3 justify-center items-center ">
      <button class="  text-blue-500 ">Learn more </button><Arrow/>
      <button class="pl-10  text-blue-500">Buy</button><Arrow/>
    </div>
               
                </div>
                
            </div>
            <div>
                <img src={iphone14Pro} alt="" srcset="" className=''  width={'100%'}/>
            </div>
            
        </div>
             <div className='bg-white pt-5'>
             <div className=' flex-col text-center'>
                <div className='text-black-200 '>
                <div className=" flex items-center justify-center">
                <img src={watchTheme} alt="" className='h-14' srcset="" />
                </div>
                <p className='font-normal pt-3 text-xl'>Adventure awaits.</p>
                <div class=" flex text-xl pt-3 justify-center items-center ">
      <button class="  text-blue-500 ">Learn more </button><Arrow/>
      <button class="pl-5  text-blue-500">Buy</button><Arrow/>
    </div>
               
                </div>
                
            </div>
            <div className='pt-48'>
                <img src={watch2} alt="" srcset="" className=''  width={'100%'}/>
            </div>
            
        </div>
        <div className='bg-black pt-5'>
             <div className=' flex-col text-center '>
                <div className='text-gray-200 '>
                <div className=" flex items-center justify-center">
                <img src={watchTheme2} alt="" className='h-20' srcset="" />
                </div>
                <p className='font-normal  text-xl'>A healthy leap ahead.</p>
                <div class=" flex text-xl pt-3 justify-center items-center ">
      <button class="  text-blue-500 ">Learn more </button><Arrow/>
      <button class="pl-5  text-blue-500">Buy</button><Arrow/>
    </div>
               
                </div>
                
            </div>
            <div className='scale-75 translate-x-10  -rotate-180'>
                <img src={watch1} alt="" srcset="" className=''  width={'100%'}/>
            </div>
            
        </div>
        <div className='bg-black pt-5'>
             <div className=' flex-col text-center'>
                <div className='text-gray-200 '>
                <h2 class=" font-bold  text-4xl">AirPods Pro</h2>
                    <p className='font-normal pt-3 text-2xl'>Rebuilt from the sound up</p>
                <div class=" flex text-xl pt-3 justify-center items-center ">
      <button class="  text-blue-500 ">Learn more </button><Arrow/>
      <button class="pl-10  text-blue-500">Buy</button><Arrow/>
    </div>
               
                </div>
                
            </div>
            <div>
                <img src={airpods} alt="" srcset="" className=''  width={'100%'}/>
            </div>
            
        </div>

        <div className='bg-white pt-5'>
             <div className=' flex-col text-center'>
                <div className='text-black-200  '>
                <h2 class=" font-bold  text-4xl">Card</h2>
                    <p className='font-normal pt-3 text-2xl'>Get up to 3% Daily Cash back</p>
                    <p className='font-normal pt-3 text-2xl'>with every purchase</p>
                <div class=" flex text-xl pt-3 justify-center items-center ">
      <button class="  text-blue-500 ">Learn more </button><Arrow/>
      <button class="pl-10  text-blue-500">Buy</button><Arrow/>
    </div>
               
                </div>
                
            </div>
            <div className='pt-5 scale-75'>
                <img src={card} alt="" srcset="" className=''  width={'100%'}/>
            </div>
            
        </div>
             
        </div>
    );
};

export default Card;