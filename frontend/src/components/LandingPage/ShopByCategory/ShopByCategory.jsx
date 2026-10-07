import CategoryCard from './CategoryCard'
import shirtImage from '../../../assets/category-images/shirtImage.png'
import trouserImage from '../../../assets/category-images/trouserImage.png'
import tshirtImage from '../../../assets/category-images/tshirtImage.png'
import jeansImage from '../../../assets/category-images/jeansImage.png'
import cargoImage from '../../../assets/category-images/cargoImage.png'
import poloShirtImage from '../../../assets/category-images/poloShirtImage.png'
import outerwearImage from '../../../assets/category-images/outerwearImage.png'
import shoesImage from '../../../assets/category-images/shoesImage.png'



const ShopByCategory = () => {
    const categories = [
        {
            title: "SHIRTS",
            image: shirtImage,
            imageClassName: "scale-90",
        },
        {
            title: "TROUSERS",
            image: trouserImage,
            imageClassName: "scale-80",
        },
        {
            title: "T-SHIRTS",
            image: tshirtImage,
            imageClassName: "scale-90",
        },
        {
            title: "JEANS",
            image: jeansImage,
            imageClassName: "scale-70",
        },
        {
            title: "CARGOS",
            image: cargoImage,
            imageClassName: "scale-70",
        },
        {
            title: "POLO",
            image: poloShirtImage,
            imageClassName: "scale-90",
        },
        {
            title: "OUTERWEAR",
            image: outerwearImage,
            imageClassName: "scale-90",
        },
        {
            title: "SHOES",
            image: shoesImage,
        },
    ]
    
  return (
    <section>
      <div className="relative
      w-full
      h-32
      py-6
      px-16
      after:absolute
      after:content-['']
      after:left-16
      after:bottom-3
      after:w-[300px]
      after:h-[3px]
      after:bg-[#e96b55]
    ">
      <h1 className="
        text-[40px]
        uppercase
        font-[300]
        tracking-tighter
        leading-9
      ">
        Shop by
        <span className="block font-bold tracking-normal">
          Category
        </span>
      </h1>
      
      </div>
      
      <div className="flex w-full flex-nowrap gap-6 overflow-x-auto overflow-y-hidden px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:gap-10 lg:px-16">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
            imageClassName={category.imageClassName}
          />
        ))}
        
      </div>
    </section>
  )
}

export default ShopByCategory