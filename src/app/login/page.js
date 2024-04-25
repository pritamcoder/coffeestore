import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-[calc(100vh-30px)] flex justify-center items-center">
      <div className=" text-center rounded-md  p-3">
        <h1 className="text-5xl">login now</h1>
        <p className="text-red-700"></p>
        <form className="manf flex flex-col w-[280px] mt-5  gap-3 items-center " method='POST' >
          <input type='email' name='email' placeholder='email' required   />
          <input type='password' name='password' placeholder='password' required />
          <button type='submit' className="bg-[#ff7b00a9] uppercase">log in</button>
        </form>
        <div className="mt-3 text-right w-full text-sm text-blue-500"><Link href={"/forgotpassword"} >forgot password?</Link></div>
      </div>


    </div>
  )
}

export default page