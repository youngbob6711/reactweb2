import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from './jwm-logo.jpg'








type Props = {}

function Header({}: Props) {
  return (
    <div> Header Components
        <nav className='flex justify-between'>

        
                 <div className='h-28 w-38 ml-9 sm:w-28 md:w-44 flex-shrink-0'>
                  <Link href='/homelink '>
                    <Image className="w-full h-full object-contain"
                    src={logo}
                    width={80}
                    height={100}
                    className='border-none'/>
                    <h1> Church Logo section </h1>
                    </Link>
                    </div>

                    
            <div className='items-center flex space-x-9'>

                <p className='hidden md:inline-flex cursor-pointer font-bold'>Home</p>
                <p className='hidden md:inline-flex cursor-pointer font-bold'>Contact Us</p>
                <p className='hidden md:inline-flex cursor-pointer font-bold'>Tithes and Offerings</p>


                <button className='btns'>
                    Register as a Member
                </button>
                


 
            </div>  
            
            </nav>

            <div class="flex m-9 mx-auto justify-center items-center w-[72rem]  bg-sky-400 opacity-20 min-h-[250px] relative rounded-[25px]"> Jesus Winner Ministry</div>
         
         <div className='w-[32rem] mx-auto p-4 bg-red-300 rounded-2xl'  >
            
<Link href="/ptagspage"  >

<nav className='flex space-x-6 text-sm'>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Branches</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Events</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Know your Pastors</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Hot Sermons</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>About Us</p>


</nav>

</Link>

</div>


<div className='ml-4 space-x-5 inline-flex border-2 border-blue-600 rounded-[12px] p-2 sm:px-5 flex-1'> 
<h1>Search Icon</h1> 
<input placeholder='Enter here' className='outline-none flex-1'/>
   </div >
       












    </div>
  )
}

export default Header