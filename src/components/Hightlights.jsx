import React from 'react'
import { highlightSecondVideo, rightImg, watchImg } from '../utils'
import gsap from'gsap'
import { useGSAP } from '@gsap/react'
import VideoCarosal from './VideoCarosal'
const Hightlights = () => {
    useGSAP(()=>{
        gsap.to("#title",{opacity:1,y:0,delay:2})
        gsap.to(".link",{opacity:1,y:0,duration:2,stagger:0.25,delay:2})
    },[])
  return (
    <section id="highlights" className='w-screen overflow-hidden h-full common-padding bg-zinc'>
       <div className="screen-max-width">
        <div className=" mb-12 w-full md:flex items-end justify-between">
            <h1 id="title" className='section-heading'>Get The Highlights.</h1>
            <div className="flex flex-wrap items-end gap-5">
               <p className='link'>Watch the flim
               <img  className='ml-2 pointer-events-none' src={watchImg} alt="" srcset="" />
               </p>
               <p className='link'>Watch the event
               <img  className='ml-2 pointer-events-none' src={rightImg} alt="" srcset="" />
               </p>
            
            </div>
        </div>
        <VideoCarosal/>
       </div>
    </section>
  )
}

export default Hightlights