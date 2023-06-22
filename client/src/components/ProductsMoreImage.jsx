

const ProductsMoreImage = ({image,setProductImage,productImage}) => {
    const handleMoreImageClick=()=>{
        setProductImage(image)
    }

  return (
    <div className={`w-44 flex items-center justify-center border-[2px]  ${image===productImage?"border-slate-400":"border-slate-200"} rounded-xl cursor-pointer md:h-32`} onClick={handleMoreImageClick}>
      <img className="w-56 h-28 object-contain " src={image} alt="more product image"  />
    </div>
  )
}

export default ProductsMoreImage
