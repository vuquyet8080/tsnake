import { Carousel } from "flowbite-react";
import Image from "next/image";
import React from "react";

export default function CarouselList() {
  return (
    <div className="h-32 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel slideInterval={5000}>
        <div className="relative w-full h-full ">
          <Image
            src="/banners/banner-1.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="banner"
          />
        </div>
        {/* <div className="relative w-full h-full">
          <Image
            src="/banners/banner-1.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="banner"
          />
        </div> */}
        <div className="relative w-full h-full">
          <Image
            src="/banners/banner-3.png"
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt="banner"
          />
        </div>
      </Carousel>
    </div>
  );
}
