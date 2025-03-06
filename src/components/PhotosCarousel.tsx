import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

function PhotosCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const images = [
    "/assets/foto2.jpeg",
    "/assets/foto1.jpeg",
    "/assets/foto3.jpeg",
    "/assets/foto4.jpeg",
    "/assets/foto6.jpeg",
    "/assets/foto7.jpeg",
    "/assets/foto8.jpeg",
  ];

  return (
    <Carousel
      ref={carouselRef}
      className="w-full my-10"
      opts={{
        loop: true,
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((src, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-1">
                  <img
                    src={src}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

export default PhotosCarousel;
