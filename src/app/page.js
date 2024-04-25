"use client"
import React, { useState } from 'react'
import Header from '@/components/Header'
import Cardsection from '@/components/Cardsection'
import Manuitem from '@/components/Manuitem'
import Image from 'next/image'

const page = () => {
  const [inputvalue, setinputvalue] = useState("")
  return (
    <>
      <div>
        <Header id="home" />

        {/* about section */}

        <div className="paddingall bg-black text-white pb-5 pt-20" id='about'>
          <div className="flex justify-between flex-col md:flex-row items-center">
            <div className="offeryou">
              <div>
                <Image src={"/cup.png"} height={50} width={50} alt='cup' />
              </div>
              <div className='offertext'>
                <p>awesomae aroma</p>
                <p>the coffee is brewed by first roasring the green coffee beans</p>
              </div>
            </div>
            <div className="offeryou">
              <div>
                <Image src={"/madel.png"} height={50} width={50} alt='madle' />
              </div>
              <div className='offertext'>
                <p>high quality</p>
                <p>he coffee is brewed by first roasring the green coffee beans</p>
              </div>
            </div>
            <div className="offeryou">
              <div>
                <Image src={"/been.png"} height={50} width={50} alt='been' />
              </div>
              <div className='offertext'>
                <p>pure grades</p>
                <p>he coffee is brewed by first roasring the green coffee beans</p>
              </div>
            </div>
            <div className="offeryou">
              <div>
                <Image src={"/milk.png"} height={35} width={35} alt='milk' />
              </div>
              <div className='offertext'><p>proper roasting</p>
                <p>he coffee is brewed by first roasring the green coffee beans</p>
              </div>
            </div>
          </div>

          <div className="flex gap-5 md:flex-row flex-col text-center md:text-left items-center  mt-5">
            <div className="md:w-[50%] w-full">
              <Image src={"/mainbody/aboutimage.png"} width={500} height={600} alt='about image' className="rounded-xl"/>
            </div>
            <div className="md:w-[50%] w-full">
              <h1>best coffee fouse in your home town</h1>
              <p className="text-gray-400 mt-4 mb-4 font-medium md:pr-10">Our incredibly rate come from humble beginnings in yemen, where decades of political turmoil once forced local farmers to start growing khat, a narcotic native to the Arabian Peninsula.<br />

                The Dawoodi Bohara Community changed this, removing all the khat plants and replacing them with coffee, bringing this humble brew black to its roots.</p>
              <button className="bg-orange-600">read more</button>
            </div>
          </div>
        </div>

        <div className="md:pl-12 pl-5 md:pr-12 pr-5 pt-10 pb-10 bg-black " id='coffee'>
          <h1 className="text-white mb-10 text-center">our special coffee</h1>

          <Cardsection key={"coffey"} catagoryfilter={"coffee tea & chai"} />

        </div>

        <div className="md:pl-12 pl-5 md:pr-12 pr-5 pt-10 pb-10 bg-black" id='meanu'>
          <h1 className="text-white mb-10 text-center">our other breakfast item</h1>
          <Manuitem />
        </div>

        <div className='lg:h-screen h-[50vh] paddingall pt-10 pb-10 bg-black' id='news'>
          <div className="bg-white flex flex-col lg:items-end items-center h-full rounded-xl justify-center lg:pr-20">
            <h1 className="text-center">subscribe to get <br /> news</h1>
            <form className='flex items-center mt-10' onSubmit={(e) => { e.preventDefault() }}>
              <input type='email' placeholder='enter your email' required value={inputvalue} onChange={(e) => {
                setinputvalue(e.target.value)
              }} className='bg-black text-white h-10 md:w-72 w-40 rounded-xl rounded-r-none pl-4 ' />

              <button className='h-10 md:w-[122px] w-20 rounded-l-none '>subscribe</button>
            </form>
          </div>

        </div>


      </div>
    </>
  )
}

export default page