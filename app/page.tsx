import React from 'react'
import Image from 'next/image';
import { IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import type { NextPage } from 'next';
import { FaCheck } from "react-icons/fa6";
import { PiHamburgerLight } from "react-icons/pi";
import { PiCookieLight } from "react-icons/pi";
import { TbGlassFull } from "react-icons/tb";





const app:React.FC = () => {
  return (
    <div>
      <HomeSection />
      <About />
      <FoodCategory />
      <Stats/>
      <Menu_chef />
    </div>
  )
}
export default app;
function HomeSection() {
  return (
    <div className="w-xl h-xl bg-[url('/bg.png')] bg-cover bg-center  flex flex-col justify-center items-center">
      <div className='absolute w-xl h-xl bg-black bg-opacity-75'></div>
    

      <div className='flex justify-center items-center z-10 '>
        <div className='flex flex-col gap-10'>
          <Image src={"/side.png"} alt='#' height={492} width={31.28} className='absolute left-48 top-48'/>
          <Image src={"/Q&A.png"} alt='#' height={40} width={249}/>
          <h1 className='text-6xl font-bold text-white'><span className='text-amber-500'>Th</span>e Art of speed <br/>food Quality</h1>
          <p className='text-base text-gray-300'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, cumque. <br /> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit, architecto.
          </p>
          <button className='w-48 h-14 flex items-center justify-center bg-amber-500 rounded-3xl text-white'>See Menu</button>
        </div>
        <div className='relative left-20'>
          <Image src={"/dish.png"} alt='#' height={670} width={878}/>
        </div>
      </div>
    </div>

  )
}
;

function About(){
  return(
    <div className='bg-zinc-950 h-xl w-xl flex justify-center items-center gap-20'>
      <div className='flex flex-col gap-7'>
        <Image src={"/about.png"} alt='#' height={40} width={91}/>
        <h1 className='text-6xl font-bold text-white'><span className='text-amber-500'>We</span> create the best <br/>foody product</h1>
        <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam <br />  consequuntur sint quibusdam asperiores possimus eveniet et! Provident <br /> possimus ipsum, sapiente deleniti voluptatem doloremque facere labore excepturi, animi <br /> dolor numquam vero quibusdam. Deleniti voluptas tedolores corrupti odio maxime voluptatibus <br /> ullam. Iusto rerum quidem nam officia dolorem iste?
        </p>
        <div className='flex items-center text-white gap-6'>
          <FaCheck size={24} />
          <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quaerat.</p>
        </div>
        <div className='flex items-center text-white gap-6'>
          <FaCheck size={24} />
          <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quaerat.</p>
        </div>
        <div className='flex items-center text-white gap-6'>
          <FaCheck size={24} />
          <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, quaerat.</p>
        </div>
        <button className='w-48 h-14 flex items-center justify-center bg-amber-500 rounded-3xl text-white'>See Menu</button>
      </div>

      <div className='flex flex-col gap-4 relative'>
        <Image src={"/about_1.png"} alt='#' width={660} height={330}/>
        <div className='flex gap-4'>
        <Image src={"/about_2.png"} alt='#' width={322} height={194}/>
        <Image src={"/about_3.png"} alt='#' width={322} height={194}/>
        </div>
      </div>
    </div>
  )
}


function FoodCategory(){
  return(
    <div className='flex flex-col h-xxl w-xl bg-zinc-950 items-center gap-28 overflow-hidden'>
      <div className='flex flex-col items-center'>
        <Image src={"/Food Category.png"} alt='#' height={40} width={177} className='pb-2'/>
        <h1 className='text-6xl font-bold text-white'><span className='text-amber-500'>Ch</span>oose Food Item</h1>
        <div className='flex gap-6 pt-10'>
          <Image src={"/fc1.png"} alt='#' height={329} width={306}/>
          <Image src={"/fc2.png"} alt='#' height={329} width={306}/>
          <Image src={"/fc3.png"} alt='#' height={329} width={306}/>
          <Image src={"/fc4.png"} alt='#' height={329} width={306}/>
        </div>
      </div>

      <div className='flex items-center relative left-60  '>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-3'>
            <div><Image src={"/wc1.png"} alt='#' height={356} width={362}/></div>
            <div className='flex items-end'><Image src={"/wc2.png"} alt='#' height={231} width={281}/></div>
          </div>
          <div className='flex gap-3'>
            <div><Image src={"/wc3.png"} alt='#' height={306} width={244}/></div>
            <div><Image src={"/wc4.png"} alt='#' height={226} width={221}/></div>
            <div className='flex flex-col gap-3'>
              <div><Image src={"/wc5.png"} alt='#' height={168} width={161}/></div>
              <div><Image src={"/wc6.png"} alt='#' height={168} width={161}/></div>
            </div>
          </div>
         </div>

      <div className='flex flex-col gap-7 relative left-28'>
        <Image src={"/wych.png"} alt='#' height={40} width={175}/>
        <h1 className='text-6xl font-bold text-white'><span className='text-amber-500'>Ex</span>tra Ordinary Taste <br />And Experince</h1>
        <p className='text-base text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem magnam <br />  consequuntur sint quibusdam asperiores possimus eveniet et! Provident <br /> possimus ipsum, sapiente deleniti voluptatem doloremque facere labore excepturi, animi <br /> dolor numquam vero quibusdam. Deleniti voluptas tedolores corrupti odio maxime voluptatibus <br /> ullam. Iusto rerum quidem nam officia dolorem iste?
        </p>
        <div className='flex flex gap-4'>
          <div className='flex flex-col items-center'>
            <div className='w-24 h-20 bg-amber-500 rounded-md flex justify-center items-center'>
              <PiHamburgerLight size={50} color='white' />
            </div>
            <p className='text-base text-gray-300'>Fast Food</p>
         </div>

         <div className='flex flex-col items-center'>
            <div className='w-24 h-20 bg-amber-500 rounded-md flex justify-center items-center'>
              <TbGlassFull  size={50} color='white' />
            </div>
            <p className='text-base text-gray-300'>Lunch</p>
         </div>

         <div className='flex flex-col items-center'>
            <div className='w-24 h-20 bg-amber-500 rounded-md flex justify-center items-center'>
              <PiCookieLight size={50} color='white' />
            </div>
            <p className='text-base text-gray-300'>Dinner</p>
         </div>
        </div>
        <Image src={"/year.png"} alt='#' height={93} width={374}/>

      </div>
      <Image src={"/leaf.png"} alt='#' height={532.3} width={444.1} className='relative right-36 bottom-96'/>
    </div>
      
  </div>
  )
}

function Stats(){
  return(
    <div className='w-xl h-l bg-black flex flex-col justify-center '>
        <Image src={"/st_bg.png"} alt='#' height={384} width={1920} className='absolute opacity-15'/> 
      <div className='z-10 flex justify-center gap-44'>
        <div className='flex flex-col items-center gap-4'>
          <Image src={"/st1.png"} alt='#' height={120} width={120}/>
          <p className='text-white text-bold text-2xl'>Professional Chefs</p>
          <p className='text-white text-bold text-4xl'>420</p>
        </div>
        <div className='flex flex-col items-center gap-4 '>
          <Image src={"/st2.png"} alt='#' height={120} width={120}/>
          <p className='text-white text-bold text-2xl'>Items of Food</p>
          <p className='text-white text-bold text-4xl'>320</p>
        </div>
        <div className='flex flex-col items-center gap-4 '>
          <Image src={"/st3.png"} alt='#' height={120} width={120}/>
          <p className='text-white text-bold text-2xl'>Years of Experience</p>
          <p className='text-white text-bold text-4xl'>30+</p>
        </div>
        <div className='flex flex-col items-center gap-4'>
          <Image src={"/st4.png"} alt='#' height={120} width={120}/>
          <p className='text-white text-bold text-2xl'>Happy Customers</p>
          <p className='text-white text-bold text-4xl'>220</p>
        </div>
      </div>
    </div>
  )
}

function Menu_chef(){
  return(
    <div className='w-xl h-vl bg-zinc-950 flex flex-col items-center gap-44'>
      <div className='flex flex-col items-center gap-10 pt-16'>
        <Image src={"/C&P.png"} alt='#' height={40} width={144}/>
        <h1 className='text-6xl font-bold text-white'><span className='text-amber-500'>Fr</span>om Our Menu</h1>
        <ul className='flex gap-28'>
          <li className='text-white'>BreakFast</li>
          <li className='text-white'>Lunch</li>
          <li className='text-white'>Dinner</li>
          <li className='text-white'>Desert</li>
          <li className='text-white'>Drink</li>
          <li className='text-white'>Snacks</li>
          <li className='text-white'>Soups</li>
        </ul>
        <div className='flex items-center gap-44'>
          <div className='flex'>
            <Image src={"/m1.png"} alt='#' height={362} width={366} className='z-10'/>
            <Image src={"/leaf2.png"} alt='#' height={406} width={515} className='absolute left-72'/>
          </div>

          <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div>
            <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div> <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div> <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div>
            <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div> <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div> <div className='flex gap-2'>
              <Image src={"/m2.png"} alt='#' height={79} width={80} className=''/>  
              <div className='flex flex-col gap-1'>
                <p className='text-white'>Lettuce Leaf</p>
                <p className='text-white text-xs'>Lorem ipsum dolor sit amet.</p>
                <p className='text-amber-500'>12.5$</p>
             </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center gap-10   '>
        <Image src={"/chefs.png"} alt='#' height={40} width={56} className=''/>  
        <h1 className='text-6xl font-bold text-white'><span className='text-amber-500'>Me</span>et Our Chef</h1>
          <div className='flex gap-4'>
            <Image src={"/ch1.png"} alt='#' height={312} width={391}/>  
            <Image src={"/ch2.png"} alt='#' height={312} width={391}/>  
            <Image src={"/ch3.png"} alt='#' height={312} width={391}/>  
            <Image src={"/ch4.png"} alt='#' height={312} width={391}/>  
         </div>
         <button className='w-48 h-14 flex items-center justify-center bg-zinc-950 border border-amber-500 rounded-3xl text-white'>See More</button>
      </div>
    </div>
  )
}
