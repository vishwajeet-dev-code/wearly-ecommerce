import slideOne from '../../../../assets/carousel-images/slide-1.jpeg'
import slideTwo from '../../../../assets/carousel-images/slide-2.jpeg'
import slideThree from '../../../../assets/carousel-images/slide-3.jpeg'
import slideFour from '../../../../assets/carousel-images/slide-4.png'
import slideFifth from '../../../../assets/carousel-images/slide-5.png'

import { Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

const slides = [
    slideOne,
    slideTwo,
    slideThree,
    slideFour,
    slideFifth,
]

const CarouselArrows = () => {
  const swiper = useSwiper()

  return (
    <>
      <button
        type="button"
        onClick={() => swiper.slidePrev(500)}
        aria-label="Previous slide"
        className="absolute left-2 top-1/2 z-10 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow transition hover:bg-white"
      >
        <ChevronLeft size={14} />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext(500)}
        aria-label="Next slide"
        className="absolute right-2 top-1/2 z-10 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow transition hover:bg-white"
      >
        <ChevronRight size={14} />
      </button>
    </>
  )
}

const HeroCarousel = () => {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <Swiper
        className="h-full w-full"
        modules={[Autoplay]}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        speed={3000}
      >
        <CarouselArrows />
        {slides.map((slide) => (
          <SwiperSlide key={slide} className="h-full w-full">
            <img
              src={slide}
              alt=""
              className="h-full w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HeroCarousel