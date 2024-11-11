"use client"
import React from "react"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import chi from '../assets/chi.jpg'
import chi2 from '../assets/chi2.jpg';
import chi3 from '../assets/chi3.jpg';
import chi4 from '../assets/chi4.jpg';
import chi5 from '../assets/chi5.jpg';
import chi6 from '../assets/chi6.jpg';
import chi7 from '../assets/chi7.jpg';
import chi8 from '../assets/chi8.jpg';



export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

    // Array of images
    const images = [chi, chi2, chi3, chi7, chi8, chi4, chi5, chi6];

  return (
    <div className="mx-auto">
      <h1 className="text-center chi-h1 text-2xl md:text-3xl text-black pb-3">Birthday Girl🎀😍</h1>
      <div className=" max-w-[200px] mb-5 md:mb-72  shadow-md h-fit"
      >
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className=''
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
  )
}

