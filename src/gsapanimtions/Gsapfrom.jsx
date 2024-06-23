import React from 'react'
import gsap from'gsap'
import { useGSAP } from '@gsap/react'
const Gsapfrom = () => {
    useGSAP(()=>{
      gsap.from('#green-box',{
        x: 250,
        repeat:-1,
        yoyo:true,
        rotate:360,
        duration:2,
        ease:"expo"
      })
    },[])
  return (
    <div>
        <h1 className=' text-center'>gsapFrom</h1>
        <div>
      <p className=" mt-5 text-gray-500">
        the<code>gsap.from()</code>  method animate the
        element from new state to there current state
      </p>
      <p className=" mt-5 text-gray-500"><code>gsap.from()</code> method animate the
        element from new state to there current state
      </p>
      <p className=" mt-5 text-gray-500 ">
        the syntax of <code>gsap.to()</code> method is as follows
        <a
        href="https://gsap.com/docs/v3/GSAP/gsap.from()"
        >{""}method

        </a>
      </p>
      <div className="mt-20 ">
        <div id="green-box" className="w-20 h-20 bg-green-600 rounded-lg">

        </div>
      </div>
    </div>
    </div>
  )
}

export default Gsapfrom