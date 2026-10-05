import Navbar from '../Navbar/Navbar'
import Hero from '../LandingPage/Hero/Hero'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import Banner from './Banner/Banner'
import CampaignCarousel from './Carousel/CampaignCarousel'
import bigBannerImage from '../../assets/images/Never Out of Style.png'
const LandingPage = () => {
  return (
    <>
    <div className='px-3'>
      <Navbar />
      <Hero />
      <ShopByCategory />
      <Banner/>
      <CampaignCarousel />
      <Banner
        image={bigBannerImage}
        alt="Dress differently fashion editorial"
        imageClassName="h-auto object-contain"
      />
    </div>
    </>
  )
}

export default LandingPage