const limit = 5;

export const pagination =(products, pageNo)=>{
    const startIndex = (pageNo -1) * limit;
    const endIndex = pageNo * limit;

    const remainingProducts =  products.slice(startIndex, endIndex)
    console.log(remainingProducts)
    return remainingProducts;
}



