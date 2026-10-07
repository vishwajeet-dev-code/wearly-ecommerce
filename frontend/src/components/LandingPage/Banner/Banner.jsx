import BannerImage from '../../../assets/images/bannerImage.png'

const Banner = ({
  image = BannerImage,
  alt = 'Banner Image',
  imageClassName = 'max-h-[420px] object-cover object-center',
}) => {
  return (
    <div className="w-full">
        <img
          src={image}
          alt={alt}
          className={`block w-full ${imageClassName}`}
        />
    </div>
  )
}

export default Banner