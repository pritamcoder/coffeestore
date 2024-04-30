"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Nave = () => {
  const [active, setactive] = useState(1)
  const [toggleulbar, settoggleulbar] = useState(false)
  const carddata = useSelector((state) => state.counter.value)




  return (
    <>
      <div className="overflow-hidden w-[100vw]">
        <nav className="paddingall z-10 flex justify-between pt-3 items-center  fixed w-[100vw] ">
          <h1 className="text-2xl capitalize font-bold font-sans">cof<span className="text-orange-500">fee</span></h1>
          <ul className="lg:flex justify-between items-center gap-4 shadow-xl bg-slate-50 pl-6 pr-6 rounded-full h-10 md:flex hidden">
            <li key={1}><Link href={'/#home'} onClick={() => setactive(1)} className={` ${active === 1 ? "text-orange-600" : "text-black"}`}>home</Link></li>
            <li key={2}><Link href={'/#about'} onClick={() => setactive(2)} className={`${active === 2 ? "text-orange-600" : "text-black"}`}>about</Link></li>
            <li key={3}><Link href={'/#coffee'} onClick={() => setactive(3)} className={`${active === 3 ? "text-orange-600" : "text-black"}`}>coffee</Link></li>
            <li key={4}><Link href={'/#menu'} onClick={() => setactive(4)} className={`${active === 4 ? "text-orange-600" : "text-black"}`}>menu</Link></li>
            <li key={5}><Link href={'/#news'} onClick={() => setactive(5)} className={`${active === 5 ? "text-orange-600" : "text-black"}`}>news</Link></li>
          </ul>
          <div className="flex gap-5 items-center">
            <Link href={"/cart"}> <i data-content={`${carddata}`} className={`bi bi-cart4 text-2xl text-black after:content-[attr(data-content)]`}></i></Link>
            <button className="lg:block md:block hidden w-24 bg-orange-400"><Link href={"/login"}>login</Link></button>
            <div className='md:hidden cursor-pointer' onClick={() => (settoggleulbar(!toggleulbar))}>
              <Image src={"/threeline.svg"} height={30} width={30} alt='three line' />
            </div>
          </div>
        </nav>

        <div className={`w-56 h-[60%] bg-white  fixed  ${toggleulbar ? "right-0" : "-right-full"} top-16 z-20 pt-5 pl-5 rounded-tl-lg rounded-bl-lg transition-all shadow-xl md:hidden`}>
          <ul className=' flex flex-col justify-between h-[30%]'>
            <li key={1}><Link href={'/#home'} onClick={() => setactive(1)} className={` ${active === 1 ? "text-orange-600" : "text-black"}`}>home</Link></li>
            <li key={2}><Link href={'/#about'} onClick={() => setactive(2)} className={`${active === 2 ? "text-orange-600" : "text-black"}`}>about</Link></li>
            <li key={3}><Link href={'/#coffee'} onClick={() => setactive(3)} className={`${active === 3 ? "text-orange-600" : "text-black"}`}>coffee</Link></li>
            <li key={4}><Link href={'/#meanu'} onClick={() => setactive(4)} className={`${active === 4 ? "text-orange-600" : "text-black"}`}>menu</Link></li>
            <li key={5}><Link href={'/#news'} onClick={() => setactive(5)} className={`${active === 5 ? "text-orange-600" : "text-black"}`}>news</Link></li>
          </ul>
          <button className=" w-24 bg-orange-400"><Link href={"/login"}>login</Link></button>
        </div>

      </div>
    </>
  )
}

export default Nave