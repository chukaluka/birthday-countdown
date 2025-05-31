"use client";
import React from "react";
import Link from "next/link";
import Timer from "./Timer";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.main
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: 0.25 }}
      className="flex justify-center items-center mx-auto h-screen max-w-[330px] md:max-w-[900px]"
    >
      <section className="w-full flex flex-row justify-between items-center">
        <div className="mx-auto">
          <h1 className="text-center md:text-start text-4xl md:text-8xl chi-h1">
            It is{" "}
          </h1>

          <Timer launchDate="2025-06-01T00:00:00" />

          <h1 className="mt-3 text-4xl font-medium chi-h1">
            {" "}
            to{" "}
            <span className="bg-white px-2 py-1 font-semibold rounded shadow-md">
              Zee😍's
            </span>{" "}
            birthday{" "}
          </h1>
          <div className="border-b pt-3"></div>

          <button
            className="bg-yellow-200 px-2 py-1 uppercase font-bold rounded shadow-md mt-3 chi-h1"
            // onClick={() => {
            //   const response = window.prompt(
            //     "Are you Zee? Don't you dare lie, Type yes, if so"
            //   );
            //   // Optionally, you can handle the response here
            //   if (response && response.toLowerCase() === "yes") {
            //     alert(
            //       "Welcome Zee! 🎉, BUT YOU'LL HAVE TO WAIT TILL IT'S YOUR BIRTHDAY TO SEE THE CONTENT 🤗"
            //     );
            //   }
            // }}
          >
            <Link href="/birthday">🎉Click me birthday girl🎉</Link>
          </button>
        </div>
      </section>
    </motion.main>
  );
}
