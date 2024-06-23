import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo);

  useEffect(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to('#cta',{opacity:1,y:-50,delay:2})

    const handleResize = () => {
      if (window.innerWidth < 760 && videoSrc !== smallHeroVideo) {
        setVideoSrc(smallHeroVideo);
      } else if (window.innerWidth >= 760 && videoSrc !== heroVideo) {
        setVideoSrc(heroVideo);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [videoSrc]);

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 flex-col w-full flex-center">
        <p id="hero" className="hero-title">
          i phone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none " autoPlay muted playsInline key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div id="cta" className=" flex flex-col items-center opacity-0 translate-y-20">
        <a href="" id="highlights" className="btn">Buy</a>
        <p className=" font-normal text-xl">From  ₹ 5000/months or  ₹ 150000</p>
      </div>
    </section>
  );
};

export default Hero;
