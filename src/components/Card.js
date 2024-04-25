"use client"
import { addid, increment } from '@/lib/counterSlice'
import Image from 'next/image'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Card = ({image,heading,description,price,id}) => {
    const incrementvalue=useDispatch()
    
    return (
        <div  className="h-[350px] w-[250px] lg:h-[400px] lg:w-[300px] bg-white pl-5 pr-5 pt-2.5 pb-2.5 rounded-lg">
            <div className="md:h-[65%] h-[60%]">
              {image && <Image src={image} height={350} width={350} alt='foot image' className='w-full h-full object-cover object-center'/>}
                

            </div>
            <div className="md:h-[35%] h-[40%]">
                <div >
                    <h2>{heading}</h2>
                    <p className='mt-2 text-sm'>{description}</p>
                </div>
                <div className="flex justify-between mt-2">
                    <p className="font-bold text-2xl">${price}</p>
                    <button onClick={()=>{
                        incrementvalue(increment())
                        incrementvalue(addid(id))
                    }}>add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Card