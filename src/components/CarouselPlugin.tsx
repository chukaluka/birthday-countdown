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




export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )

    // Array of images
    const images = [chi, chi2];

  return (
    <div className=" max-w-[200px] mb-24"
    >
      <h1 className="text-center">Birthday Girl</h1>
      <Carousel
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
        {images.map((image, index) => (
            <CarouselItem key={index}>
              <div>
                <Card>
                  <CardContent className="">
                    <Image
                    src={image}
                    alt={`Birthday Image ${index + 1}`}
                    className=""
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
  )
}

