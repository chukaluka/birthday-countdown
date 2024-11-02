"use client";
import React, { useState, useEffect} from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CarouselPlugin } from '../../components/CarouselPlugin';
import Lottie from 'lottie-react';
import bd1 from '../../assets/bd1.json'
import bd2 from '../../assets/bd2.json'
import bd3 from '../../assets/bd3.json'
import bd4 from '../../assets/bd4.json'
import bd5 from '../../assets/bd5.json'
import bd6 from '../../assets/bd6.json'
import bd7 from '../../assets/bd7.json'
import bd8 from '../../assets/bd8.json'
import { motion } from 'framer-motion';


export default function Page() {

  useEffect(() => {
    const audio = new Audio('/music/chi.mp3');
    audio.loop = true; // Set to true if you want the music to loop
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });

    return () => {
      audio.pause(); // Pause the audio when the component unmounts
      audio.currentTime = 0; // Reset the audio to the start
    };
  }, []);

  
  return (
    <div className='body-div mt-56'>

            {/* Lottie Animations scattered around */}
    <motion.div
          initial={{opacity: 0, y: 75}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5, delay: 0.25}}
          viewport={{once: true}}
    >
    <Lottie animationData={bd1} style={{ position: 'absolute', top: '5%', left: '25%', width: 100, height: 100 }}/>
   
    <Lottie animationData={bd3} style={{ position: 'absolute', top: '5%', right: '25%', width: 100, height: 100 }}/>
    <Lottie animationData={bd2} style={{ position: 'absolute', top: '35%', left: '23%', width: 100, height: 100 }}/>
    <Lottie animationData={bd5} style={{ position: 'absolute', top: '40%', right: '23%', width: 100, height: 100 }}/>
    <Lottie animationData={bd4} style={{ position: 'absolute', top: '64%', left: '23%', width: 100, height: 100 }}/>
    <Lottie animationData={bd8} style={{ position: 'absolute', top: '65%', right: '23%', width: 100, height: 100 }}/>
    {/* <Lottie animationData={bd7} style={{ position: 'absolute', top: '95%', left: '10%', width: 100, height: 100 }}/>
    <Lottie animationData={bd6} style={{ position: 'absolute', top: '29%', left: '7%', width: 100, height: 100 }}/> */}
     </motion.div>

      <motion.div
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.25}}
      className="birthdayCard rounded shadow-md">
        <div className="cardFront">
          <h3 className="happy">Happy Birthday Chi ❤️</h3>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY</h3>
          <p className="name-p">Ore mi,</p>
          <p className="name-p">
            To you, I wish the best of days ahead. Nothing's going to stop you cause you're set. Happy birthday my love
          </p>
          <p className="name">Chuka</p>
        </div>
      </motion.div>

      
      <motion.div 
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.25}}
      className="flex flex-col relative md:flex-row items-center justify-center mt-24 gap-10"> {/* Center content */}
        {/* Carousel */}
        <div className="flex justify-center mr-0 md:mr-52">
          <CarouselPlugin />
        </div>

        {/* Popover */}
        <div className="flex justify-center">
          <Popover>
            <PopoverTrigger className="mb-32 md:mb-0">Open</PopoverTrigger>
            <PopoverContent className='bg-yellow-300/70'>Place content for the popover here.</PopoverContent>
          </Popover>
        </div>
      </motion.div>
    </div>
  );
}
