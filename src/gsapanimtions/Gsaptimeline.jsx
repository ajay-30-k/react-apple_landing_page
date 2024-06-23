import React from "react";
import gsap from'gsap'
import { useGSAP } from "@gsap/react";
const Gsaptimeline = () => {
    const timeline=gsap.timeline({
        yoyo:true,repeat:-1,repeatDelay:1
    })
    useGSAP(()=>{
        timeline.to('#red-box',{
            x:250,
            rotate:360,
            duration:1,
            borderRadius:'100%',
            ease:'back.inOut'
        })
        timeline.to('#red-box',{
            x:500,
            scale:1,
            duration:2,
            rotate:360,
            borderRadius:'8px',
            ease:'back.inOut'
        })
        timeline.to('#red-box',{
            y:500,
            scale:2,
            duration:2,
            rotate:360,
            borderRadius:'8px',
            ease:'back.inOut'
        })
    })
  return (
    <div>
      <h1>Gsaptimeline </h1>
      <p className=" mt-5 text-gray-500">
        the<code>gsap.timeline()</code> method is used to create timeline
        instance that can be used to manage multipe elements animation
      </p>
      <button className=" bg-slate-400" onClick={()=>{
            if (timeline.paused()) {
                timeline.play();
                
            }else{
                timeline.pause(); 
            }

      }}>play/pause</button>
      <div className="mt-20 ">

        <div id="red-box" className="w-20 h-20 bg-red-600 rounded-lg">

        </div>
      </div>
    </div>
  );
};

export default Gsaptimeline;
