"use client"

import { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { Data2 } from '@/utility/Data'


const Cardsection = ({  catagoryfilter }) => {
    const scrooll = useRef()
    const filtercard = Data2.filter(datatype => datatype.caragory === catagoryfilter)
    const [scrollvalue, setscrollvalue] = useState(412)

    useEffect(() => {
        const wind = window.innerWidth
        if (wind <= 1000) {
            setscrollvalue(306)
        }
        else {
            setscrollvalue(412)
        }
        const handleresize = () => {
            const wind = window.innerWidth

            if (wind <= 1000) {
                setscrollvalue(306)
            }
            else {
                setscrollvalue(412)
            }
            
        }
        window.addEventListener("resize", handleresize)
        return () => {
            window.removeEventListener("resize", handleresize)
        }


    }, [])




    return (
        <>
            <div className='w-full h-fit flex justify-between items-center gap-1 md:gap-5 cardsection '>
                <div className='iaftercartscrooll relative z-10 after:left-0' onClick={() => {
                    scrooll.current.scrollLeft -= scrollvalue
                }}><i className="bi bi-arrow-left"></i></div>
                <div ref={scrooll} className='scrollbar overflow-x-scroll scroll-smooth'>
                    <div key={"hhhhh"} className='flex gap-14  lg:gap-28 items-center justify-between  w-fit'>

                        {filtercard.map((data) => (
                            <>

                                <Card key={data.id} id={data} image={data.image} heading={data.heading} description={data.description} price={data.price} />

                            </>
                        ))}
                    </div>
                </div>
                <div className='iaftercartscrooll relative z-10' onClick={() => {
                    scrooll.current.scrollLeft += scrollvalue

                }}><i className="bi bi-arrow-right"></i></div>


            </div>
        </>
    )
}

export default Cardsection