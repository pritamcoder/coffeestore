import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header className="paddingall pt-20 md:pt-0 bg-[#ccc9c9]  bg-right bg-no-repeat bg-contain h-screen flex justify-around lg:justify-between items-center  flex-col lg:flex-row ">
      <div className="capitalize flex items-center flex-col lg:block lg:w-[50%] text-center lg:text-left">
        <h1 >good coffee willl <br/> always find the <br/> audience.</h1>
        <p className="font-bold text-gray-500 mt-5 mb-5">we provide a variery of unique and best coffees.</p>
        <button className="capitalize ">order now</button>
      </div>
      <div className='lg:w-[50%]'>
        <Image src={"/mainbody/bgremove.png"} width={700} height={700}/>
        
      </div>
    </header>
  )
}

export default Header