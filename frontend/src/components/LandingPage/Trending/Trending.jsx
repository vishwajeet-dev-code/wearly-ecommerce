import React, { useState } from 'react'

const Tranding = () => {
  const categories = [
  "ALL",
  "SHIRTS",
  "JEANS",
  "SUNGLASSES",
  "SWEATERS",
  "TROUSERS",
  "T-SHIRTS",
  "JACKETS",
  "PERFUMES",
];

  const [activeCategory, setActiveCategory] = useState("ALL");
  return (
    <div className='pt-16 px-16'>
      {/* Trending Heading */}
        <div>
            <h1 className='text-[40px] uppercase font-[700] tracking-tighter leading-4'>Trending</h1>
        </div>

        {/* Filters */}
        <div className="mt-7 flex items-center gap-7 border-b border-gray-200">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`
              relative pb-4 text-[16px]
              transition-colors duration-200 
              cursor-pointer
               ${
                activeCategory === category
                  ? "font-bold after:absolute after:content-[''] after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-black"
                  : "font-light"
              }
            `}
          >
            {category}

            {/* Active underline */}
            
          </button>
        ))}
      </div>

    </div>
  )
}

export default Tranding