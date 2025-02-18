import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

function PhotosCarousel() {
  const images = [
    "/assets/foto2.jpeg",
    "/assets/foto1.jpeg",
    "/assets/foto3.jpeg",
    "/assets/foto4.jpeg",
    "/assets/foto6.jpeg",
  ];

  return (
    <Carousel className="w-full max-w-xl my-10">
      <CarouselContent>
        {
          images.map((src, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-1">
                    <img src={src} className="w-full h-full object-cover rounded-lg" />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))
        }
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default PhotosCarousel;
