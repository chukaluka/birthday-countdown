"use client";
import React from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { CarouselPlugin } from '../../components/CarouselPlugin';
// import audio1 from '../../music/audio1.mp3'
import { useEffect } from 'react';



export default function Page() {

  useEffect(() => {
    const audio = new Audio('/music/audio1.mp3');
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
      {/* <audio src={audio1} autoPlay loop /> */}
      <div className="birthdayCard rounded shadow-md">
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
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-11 gap-10"> {/* Center content */}
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
      </div>
    </div>
  );
}
