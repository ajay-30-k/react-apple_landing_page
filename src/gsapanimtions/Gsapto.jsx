import { useGSAP } from "@gsap/react";
import React from "react";
import gsap from'gsap'
const Gsapto = () => {
    useGSAP(()=>{
        gsap.to('#blue-box',{
            x:250,
            repeat:-1,
            yoyo:true,
            rotate:360,
            duration:2,
            ease:'power1.inOut'   
        })
    },[]
    )
  return (
    <div>
      <p className=" mt-5 text-gray-500">
        the<code>gsap.to()</code> method is used to animate the element from
        there current state to new state
      </p>
      <p className=" mt-5 text-gray-500">
        the<code>gsap.to()</code> method is simmilar to{""}
        <code>gasap.from()</code>method,the diffrence is that the{""}
        <code>gsap.to()</code> method animate the element from there current
        state to new state,while the <code>gsap.from()</code> method animate the
        element from new state to there current state
      </p>
      <p className=" mt-5 text-gray-500 ">
        the syntax of <code>gsap.to()</code> method is as follows
        <a
        href="https://gsap.com/docs/v3/GSAP/gsap.to()"
        >{""}method

        </a>
      </p>
      <div className="mt-20 ">
        <div id="blue-box" className="w-20 h-20 bg-blue-600 rounded-lg">

        </div>
      </div>
    </div>
  );
};

export default Gsapto;
