const Categories = ({title, image, imageClassName = ''}) => {
  return (
    <div className="w-44 shrink-0 pt-8 sm:w-52 lg:w-60">
      <h2 className="mt-3 text-left text-[26px] font-semibold tracking-tight">
        {title}
      </h2>
      <img
        alt={title}
        src={image}
        className={`-mt-10 aspect-[4/5] w-full object-contain ${imageClassName} cursor-pointer`}
      />
      
    </div>
  )
}

export default Categories