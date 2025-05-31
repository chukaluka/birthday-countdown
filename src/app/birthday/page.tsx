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
    <div className='body-div mt-72 md:mt-80'>

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
      className="birthdayCard rounded shadow-md mt-32 md:mt-11">
        <div className="cardFront">
          <h3 className="happy">Happy Birthday Zee ❤️</h3>
          <h4 className='text-center back visible md:invisible'>tab to open</h4>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY</h3>
          <p className="name-p">Zee, </p>
          <p className="name-p">
            The more you praise and celebrate your life, the more there is in life to celebrate. Happy birthday dear ❤️
          </p>
          <p className="name">Chuka</p>
        </div>
      </motion.div>

      
      <motion.div 
      initial={{opacity: 0, y: 75}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.25}}
      className="flex flex-col relative md:flex-row justify-center mt-40 gap-10"> {/* Center content */}
        {/* Carousel */}
        <div className="flex justify-center mr-0 md:mr-52">
          <CarouselPlugin />
        </div>

        {/* Popover */}
        <div className="flex justify-center ">
          <Popover>
            <PopoverTrigger className="mb-[30rem] md:mb-0 block md:absolute top-0 chi-h1 text-4xl">Click me</PopoverTrigger>
            <PopoverContent className='bg-yellow-300/70 open-letter text-xs'>
              Hey momma,<br/>
              To God be the glory. You're now 23.<br/>
              The beginning of something new, births a world of possibilities,<br/>
              Where dreams take flight and futures bloom.<br/>
              It's undeniable. Your growth is palpable, and it's clear for all to see.<br/>
              Still on the rise with your best chapters to come.<br/>
              May life offer bouquet of treasures, so you may bloom with ecstasy as the lilies.<br/>
              May happiness rainbow on you, so you may spread colors of cheer to all you meet.<br/>
              May God favour you, so you can become a channel of blessing.<br/>
              May the best of life always be yours.<br/>
              Cheers to your new age Ezinne Felizianna Nwaeze.<br/>
              <br/>
              PS: Make sure you eat all the cakes in Adamawa, don't worry, they'll understand it's your birthday.<br/>
            </PopoverContent>
          </Popover>
        </div>
      </motion.div>
    </div>
  );
}
