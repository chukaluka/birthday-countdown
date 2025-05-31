"use client";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import zee from "../assets/zee.jpg";
import zee2 from "../assets/zee2.jpg";
import zee3 from "../assets/zee3.jpg";
import zee4 from "../assets/zee4.jpg";
import zee5 from "../assets/zee5.jpg";
import zee7 from "../assets/zee7.jpg";
import zee8 from "../assets/zee8.jpg";
import zee9 from "../assets/zee9.jpg";

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  // Array of images
  const images = [zee, zee2, zee3, zee4, zee5, zee7, zee8, zee9];

  return (
    <div className="mx-auto">
      <h1 className="text-center chi-h1 text-2xl md:text-3xl text-black pb-3">
        Birthday Girl🎀😍
      </h1>
      <div className=" max-w-[200px] mb-5 md:mb-72  shadow-md h-fit">
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className=""
        >
          <CarouselContent>
            {images.map((image, index) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <CardContent className="">
                      <Image
                        src={image}
                        alt="Chi"
                        className="w-full h-48 object-cover rounded-md shadow-2xl" // Control height and fit
                        // style={{ height: '200px', width: '100%', objectFit: 'cover' }} // Adjust height to your preference
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
