import { Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import 'swiper/css'

import checkedShirts from '../../../assets/carousel-images/checked_shirts_same_size.png'
import embroideredShirt from '../../../assets/carousel-images/Hand-Embroidered Urban Elegance.png'
import jacquardShirt from '../../../assets/carousel-images/Jacquard Shirt Editorial Portrait.png'
import formalShirt from '../../../assets/carousel-images/Light Blue Formal Shirt Editorial.png'
import stripedShirt from '../../../assets/carousel-images/Striped Shirts, Tropical Style.png'
import printedShirt from '../../../assets/carousel-images/Bold Patterns, Endless Vibes.png'

const slides = [
  checkedShirts,
  formalShirt,
  embroideredShirt,
  stripedShirt,
  jacquardShirt,
  printedShirt,
]

const CarouselArrows = () => {
  const swiper = useSwiper()

  return (
    <>
      <button
        type="button"
        onClick={() => swiper.slidePrev(500)}
        aria-label="Previous collection"
        className="absolute left-2 top-1/2 z-10 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow transition hover:bg-white"
      >
        <ChevronLeft size={14} />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext(500)}
        aria-label="Next collection"
        className="absolute right-2 top-1/2 z-10 flex size-5 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-gray-900 shadow transition hover:bg-white"
      >
        <ChevronRight size={14} />
      </button>
    </>
  )
}

const CampaignCarousel = () => {
  return (
    <section aria-label="Featured collections" className="py-8">
      <Swiper
        modules={[Autoplay]}
        slidesPerGroup={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop
        speed={700}
      >
        <CarouselArrows />
        {slides.map((slide, index) => (
          <SwiperSlide key={slide}>
            <img
              src={slide}
              alt={`Featured collection ${index + 1}`}
              className="aspect-[4/5] w-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default CampaignCarousel
