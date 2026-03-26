"use client";
import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Image from "next/image";
import enwongoPic from "../../assets/enwongo.jpg";

// Import Popover and Carousel normally
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
// import { CarouselPlugin } from "../../components/CarouselPlugin";

// Dynamic imports for client-only components
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
const Confetti = dynamic(() => import("react-confetti"), { ssr: false });

// Lottie animation JSONs
import bd1 from "../../assets/bd1.json";
import bd2 from "../../assets/bd2.json";
import bd3 from "../../assets/bd3.json";
import bd4 from "../../assets/bd4.json";
import bd5 from "../../assets/bd5.json";
import bd6 from "../../assets/bd6.json";
import bd7 from "../../assets/bd7.json";
import bd8 from "../../assets/bd8.json";

export default function Page() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [confettiActive, setConfettiActive] = useState(false);
  const [message, setMessage] = useState(
    "Happy birthday to you, my dear friend! I hope this year brings you all the happiness and success you deserve",
  );
  const [clickCount, setClickCount] = useState(0);
  const [showSecretButton, setShowSecretButton] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const messages = [
    "Today is all about you, Enwongo 💝",
    "Make a wish! ✨",
    "You deserve the whole world 🌍❤️",
    "More life, more blessings 🎉",
    "Keep shining, always 💫",
    "Eat cake! 🍰",
  ];

  const handleMagicClick = () => {
    const randomMsg = messages[Math.floor(Math.random() * messages.length)];
    setMessage(randomMsg);

    setConfettiActive(true);
    setTimeout(() => setConfettiActive(false), 2000);

    setClickCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 4) setShowSecretButton(true);
      return newCount;
    });
  };

  const fadeUpAudio = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;
    const fadeInterval = setInterval(() => {
      if (audio.volume < 0.3) audio.volume = Math.min(audio.volume + 0.02, 0.3);
      else clearInterval(fadeInterval);
    }, 100);
  };

  const fadeDownAudio = () => {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    const fadeInterval = setInterval(() => {
      if (audio.volume > 0.15) {
        audio.volume = Math.max(audio.volume - 0.02, 0.15);
      } else {
        clearInterval(fadeInterval);
      }
    }, 100);
  };

  // Audio setup
  useEffect(() => {
    const audio = new Audio("/music/happy-birthday.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    audio
      .play()
      .catch((error) => console.error("Audio playback failed:", error));

    let targetVolume = 0.3;
    let fadeDuration = 5000;
    let fadeStep = 0.01;
    let intervalTime = (fadeDuration * fadeStep) / targetVolume;

    const fadeInInterval = setInterval(() => {
      if (audio.volume < targetVolume)
        audio.volume = Math.min(audio.volume + fadeStep, targetVolume);
      else clearInterval(fadeInInterval);
    }, intervalTime);

    return () => {
      clearInterval(fadeInInterval);
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    if (showVideo) {
      fadeDownAudio(); // 🔉 reduce volume when video opens
    } else {
      fadeUpAudio(); // 🔊 restore when video closes
    }
  }, [showVideo]);

  // Window size (client-side only)
  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      const handleResize = () =>
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <div className="body-div mt-32 md:mt-80">
      {confettiActive && windowSize.width > 0 && (
        <Confetti width={windowSize.width} height={windowSize.height} />
      )}

      {/* Lottie Animations */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        viewport={{ once: true }}
      >
        <Lottie
          animationData={bd1}
          style={{
            position: "absolute",
            top: "5%",
            left: "25%",
            width: 100,
            height: 100,
          }}
        />
        <Lottie
          animationData={bd3}
          style={{
            position: "absolute",
            top: "5%",
            right: "25%",
            width: 100,
            height: 100,
          }}
        />
        <Lottie
          animationData={bd2}
          style={{
            position: "absolute",
            top: "35%",
            left: "23%",
            width: 100,
            height: 100,
          }}
        />
        <Lottie
          animationData={bd5}
          style={{
            position: "absolute",
            top: "40%",
            right: "23%",
            width: 100,
            height: 100,
          }}
        />
        <Lottie
          animationData={bd4}
          style={{
            position: "absolute",
            top: "64%",
            left: "23%",
            width: 100,
            height: 100,
          }}
        />
        <Lottie
          animationData={bd8}
          style={{
            position: "absolute",
            top: "65%",
            right: "23%",
            width: 100,
            height: 100,
          }}
        />
      </motion.div>

      {/* Birthday card */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="birthdayCard rounded shadow-md md:mt-11"
      >
        <div className="cardFront">
          <h3 className="happy">Happy Birthday 🎂</h3>
          <h4 className="text-center back visible md:invisible">tab to open</h4>
          <div className="balloons">
            <div className="balloon-1"></div>
            <div className="balloon-2"></div>
            <div className="balloon-3"></div>
            <div className="balloon-4"></div>
          </div>
        </div>
        <div className="cardInside">
          <h3 className="back">HAPPY BIRTHDAY</h3>
          <p className="name-p">
            Wishing you the most magical day filled with love and joy
          </p>
          <p className="name">Chuka</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="flex flex-col items-center mt-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
          className="text-6xl text-yellow-400 drop-shadow-[0_0_12px_rgba(250,204,21,0.9)] mt-10"
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Magic button */}
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex flex-col relative md:flex-row justify-center mt-40 gap-10 pb-20"
      >
        <div className="flex justify-center mt-6">
          <button
            onClick={handleMagicClick}
            className="bg-yellow-200 hover:bg-yellow-300 transition px-6 py-2 rounded-full shadow-md font-bold text-lg chi-h1 flex items-center gap-2"
          >
            🎂 Birthday Magic button 🎂
          </button>
        </div>

        {showSecretButton && (
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setShowVideo(true)}
              className="bg-pink-300 hover:bg-pink-400 transition px-6 py-2 rounded-full shadow-md font-bold text-lg chi-h1 animate-bounce"
            >
              💝 Open Special Message
            </button>
          </div>
        )}

        <div className="flex justify-center">
          <div className="flex justify-start items-center bg-white shadow-lg rounded-xl p-8 md:p-6 gap-4 md:gap-6 max-w-2xl mx-4 md:mx-auto">
            <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden shadow-md">
              <Image
                src={enwongoPic}
                alt="Enwongo"
                className="object-cover"
                fill
              />
            </div>
            <div className="flex-1">
              <p className="chi-h1 md:text-lg text-gray-800 font-medium">
                {message}
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Video overlay */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative bg-black rounded-xl p-3 shadow-2xl">
            <button
              onClick={() => {
                setShowVideo(false);
              }}
              className="absolute -top-3 -right-3 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center font-bold shadow-md"
            >
              ✕
            </button>

            <video
              src="/video/happy-birthday.mp4"
              controls
              className="w-[300px] md:w-[500px] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
