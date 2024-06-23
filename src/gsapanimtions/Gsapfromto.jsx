import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from'gsap'
const Gsapfromto = () => {
    useGSAP(()=>{
        gsap.fromTo('#pink-box',{
            x:0,
            rotate:0,
            borderRadius:"0%"
        },
            
            
            {
            x:250,
            repeat:-1,
            yoyo:true,
            rotate:360,
            duration:2,
            borderRadius:"100%",
            ease:'power1.inOut'   
        })
    },[]
    )
  return (
    <div>
        <h1>gsapfromto</h1>
      <p className=" mt-5 text-gray-500">
        the<code>gsap.to()</code> method is used to animate the element from
        there current state to new state
      </p>
      <p className=" mt-5 text-gray-500">
        the<code>gsap.fromto()</code> animate from newstate anto newstate{""}
        
      </p>
      <p className=" mt-5 text-gray-500 ">
        the syntax of <code>gsap.fromto()</code> method is as follows
        <a
        href="https://gsap.com/docs/v3/GSAP/gsap.to()"
        >{""}method

        </a>
      </p>
      <div className="mt-20 ">
        <div id="pink-box" className="w-20 h-20 bg-pink-600 rounded-lg">

        </div>
      </div>
    </div>
  );
};

export default Gsapfromto;
