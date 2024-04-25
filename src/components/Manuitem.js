"use client"
import React, { useState } from 'react'
import Card from './Card'
import Cardsection from './Cardsection'
import { useSelector, useDispatch } from 'react-redux'
import { increment } from '../lib/counterSlice'

const Manuitem = () => {
  const [indexss, setindexss] = useState(1)
  const [navetext, setnavetext] = useState("")
  const [ouertext, setouertext] = useState("soups")
  const dispatch = useDispatch()


  return (
    <div className=''>
      <div className='flex md:justify-center justify-end mb-7'>
        <div className="manunav hidden md:flex text-white gap-5 items-center justify-center border-b pl-5 pr-5">
          {
            [
              [1, "soups"], [2, "indian food"], [3, "sandwices"], [4, "smoathie & frappes"], [5, "doughnuts & pastries"], [6, "cookies"], [7, "coffee tea & chai"]
            ].map(([e, content]) => (
              <p className={`text-gray-200  pb-1 pl-3 pr-3 rounded-t-lg cursor-pointer ${e === indexss ? "bg-orange-600" : "bg-transparent"}`}
                key={e}
                onClick={() => {
                  setindexss(e)
                  setouertext(content)

                }}>{content}</p>
            ))
          }
        </div>

          <select onChange={(e)=>{setouertext(e.target.value)}} className="w-36 h-8 rounded-md pl-3 pr-3 md:hidden">

            {
              [
                [1, "soups"], [2, "indian food"], [3, "sandwices"], [4, "smoathie & frappes"], [5, "doughnuts & pastries"], [6, "cookies"], [7, "coffee tea & chai"]
              ].map(([e, content]) => (
                <option key={e} className="rounded-md active:bg-orange-400">{content}</option>
              ))
            }
          </select>
        
      </div>
      <Cardsection key={133}  catagoryfilter={ouertext} />

    </div>
  )
}

export default Manuitem