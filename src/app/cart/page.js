"use client"
import { removeid } from '@/lib/counterSlice'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const page = () => {
  const carddata2 = useSelector((state) => state.counter.id)
  const despatch=useDispatch()
  const [isdata, setisdata] = useState(false)


  useEffect(() => {

    if (carddata2.length > 0) {
      setisdata(true)
      
    } else {
      setisdata(false)
    }
  }, [carddata2])


  return (
    <div className='paddingall pt-14 min-h-screen'>
      {isdata ? (
        carddata2.map((carddata2) => (
          <>

            <div className='flex items-center w-full justify-between mt-5'>
              <div className=' flex gap-5 items-center'>
                <div className='h-fit w-fit '>
                  <Image src={carddata2.image} width={200} height={200} alt='image'/>
                </div>
                <div>
                  <h2>{carddata2.heading}</h2>
                  <p>{carddata2.description}</p>
                  <h2>${carddata2.price}</h2>
                </div>
              </div>
              <i className="bi bi-trash text-2xl w-fit" onClick={()=>despatch(removeid(carddata2.id))}></i>
            </div>
          </>
        ))) : (
          <div className='h-screen flex items-center justify-center'>
            <h1>add product in cart..</h1> 
          </div>
        
      )}




    </div>
  )
}

export default page