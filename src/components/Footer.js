import React from 'react'

const Footer = () => {
  return (
    <footer className="paddingall  pb-4 ">
        <div className="flex justify-between pt-5 md:flex-row flex-col text-center md:text-left gap-5 md:gap-0">
        <div>
            <h1>coffee</h1>
            <p>the managing director & cluster head <br/> in india at kolkata newtown</p>
        </div>
        <div>
            <h2>contact us</h2>
            <p>address:kolkata india</p>
            <p>phine number:(91)87654321</p>
            <p>email:coffee@gmail.com</p>
        </div>
        <div>
            <h2>viewer guides</h2>
            <p>home</p>
            <p>about</p>
            <p>coffee</p>
            <p>help & support</p>
        </div>
        <div>
            <h2>recent news</h2>
            <p>best smell of americano coffee trins</p>
            <p>best smell of americano coffee trins</p>
        </div>
        </div>
        <hr className="mb-6 mt-6"/>
        <p className="text-center">pritam haldar. all rights reserved</p>
    </footer>
  )
}

export default Footer