import Link from 'next/link'
import React from 'react'


type Props = {}

function Header({}: Props) {
  return (
    <div> Header Components
        <nav className='flex justify-between'>

        
                 <div>
                    <h1> Church Logo section </h1>
                    
                    </div>

                    
            <div className='items-center flex space-x-9'>

                <p className='hidden md:inline-flex cursor-pointer font-bold'>Home</p>
                <p className='hidden md:inline-flex cursor-pointer font-bold'>Message directly</p>
                <p className='hidden md:inline-flex cursor-pointer font-bold'>Contact Us</p>
                <p className='hidden md:inline-flex cursor-pointer font-bold'>Tithes and Offerings</p>


                <button className='btns'>
                    Register as a Member
                </button>
                


 
            </div>  
            
            </nav>

            <div class="flex m-12 justify-center items-center w-10/12 bg-black min-h-[250px] relative rounded-[25px]">
         
         <div className='mt-12 max-w-2xl mx-auto p-4 bg-red-300 rounded-2xl'  >
            
<Link href="/ptagspage" >

<nav className='flex space-x-6 text-sm items-center'>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Branches</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Events</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Know your Pastors</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>Hot Sermons</p>
    <p className='md:inline-flex cursor-pointer font-bold hover:links'>About Us</p>


</nav>

</Link>

</div>



       
jwm</div>












    </div>
  )
}

export default Header