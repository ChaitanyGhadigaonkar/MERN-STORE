
export function filterBasedOnCategory(products, category) {
    const newArray =products.filter(product=>{
        return product.category === category
    })
    return newArray
}