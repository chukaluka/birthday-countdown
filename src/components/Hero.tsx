"use client";
import React from "react";
import Link from 'next/link';
import Timer from "./Timer";
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <motion.main 
    initial={{opacity: 0, y: 75}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 1, delay: 0.25}}
    className="flex justify-center items-center mx-auto h-screen max-w-[330px] md:max-w-[900px]">
      <section className="w-full flex flex-row justify-between items-center">
        <div className='mx-auto'>
          <h1 className="text-center md:text-start text-4xl md:text-8xl chi-h1">It is </h1>

            <Timer launchDate="2024-11-11T00:00:00"/>

          <h1 className="mt-3 text-4xl font-medium chi-h1"> to <span className="bg-white px-2 py-1 font-semibold rounded shadow-md">Chi's</span> birthday </h1>
          <div className='border-b pt-3'></div>

          
          <button 
              className='bg-yellow-200 px-2 py-1 uppercase font-semibold rounded shadow-md mt-3'>
                <Link href='/birthday'>
                  Stay tuned!
                </Link>
          </button>
         
        </div>
      </section>
    </motion.main>
  )
}