
import { BsFilterRight } from "react-icons/bs"
import { AiOutlinePlus } from "react-icons/ai"
import { useState } from "react"
import ProductRow from "../components/product/ProductRow"
import AddProductModal from "../components/modals/product/AddProductModal"

const product = {
  "_id": "64931a7e1f36ceddda500b31",
  "name": "DUDEME Developer",
  "slug": "dudeme-developer-s",
  "imageUrl": [
    "https://m.media-amazon.com/images/I/519tzhwc9aL._UX522_.jpg",
    "https://m.media-amazon.com/images/I/51+04pSkqFL._UX425_.jpg",
    "https://m.media-amazon.com/images/I/61skyMwcmhL._UX522_.jpg",
    "https://m.media-amazon.com/images/I/51o3JyFB19L._UX425_.jpg"
  ],
  "description": "DudeMe's combed cotton t-shirts are softer and stronger than regular cotton t-shirts. The cottons we use are made by further treating it after it's been picked, then spun into yarn to remove short fibers, which are prone to breakage. This process helps us deliver the best quality t-shirts without impurities or short protruding threads. \n All our t-shirts are tailored to be regular fit for men and women. We always want to make you feel wearing dudeme's creations to be an awesome feel & we work towards tailoring the perfect stitch that never let's you down.",
  "category": "tshirt",
  "quantity": 10,
  "size": [
    "S",
    "M",
    "L",
    "XL",
    "XXL"
  ],
  "price": 599,
  "createdAt": "2023-06-21T15:42:54.909Z",
  "updatedAt": "2023-06-21T15:42:54.909Z",
  "__v": 0
}

const Products = ({setModalChildren, setModalOpen}) => {
  const [showFilter, setShowFilter] = useState(false)
  const handleFilterClick = () => {
    setShowFilter(prev => !prev)
  }

  const handleAddProductClick =()=>{
    setModalOpen(true)
    setModalChildren(<AddProductModal/>)
  }

  return (
    <div className='my-10 mx-5 overflow-x-auto' id="admin-products-container">
      <div className="top flex items-center">
        <h3 className="font-[600] ml-2 ">Products</h3>
      </div>
      <div className="table w-full px-4 bg-slate-50 rounded-md my-5 relative">
        <div className="top  py-5 flex items-center justify-between ">
          <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg px-3 py-2 mr-5 w-96 outline-none" placeholder="Search" required="" />
          <button className="flex items-center w-max gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2 mx-2" onClick={handleAddProductClick}><AiOutlinePlus className="" />Add Product</button>
          <button className="flex items-center gap-2 text-sm rounded-md bg-blue-500 text-white px-3 py-2" onClick={handleFilterClick}><BsFilterRight /> Filters</button>

          {/* filter list */}
          {showFilter &&
          <div className="absolute right-2 top-16 px-4 py-4 bg-white z-30">
            <p className="text-sm font-semibold ">Choose Category</p>
            <div className="">
              <div className="flex gap-2 items-center px-2 py-1">
                <input type="checkbox" name="tshirt" id="tshirt" />
                <p className="text-sm">Tshirt</p>
              </div>
              <div className="flex gap-2 items-center px-2 py-1">
                <input type="checkbox" name="hoodie" id="hoodie" />
                <p className="text-sm">Hoodie</p>
              </div>
              <div className="flex gap-2 items-center px-2 py-1">
                <input type="checkbox" name="cap" id="cap" />
                <p className="text-sm">Cap</p>
              </div>
            </div>
          </div>}

        </div>


        <table className="w-full my-5 border-collapse border rounded-sm">
          <thead className="bg-slate-100">
            <tr className="">
              <th className="text-sm py-2 text-left pl-2">PRODUCT NAME</th>
              <th className="text-sm py-2 text-left pl-2">CATEGORY</th>
              <th className="text-sm py-2 text-left pl-2">SIZE</th>
              <th className="text-sm py-2 text-left pl-2">PRICE</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
                <ProductRow product={product} setModalChildren={setModalChildren} setModalOpen={setModalOpen}/>
                <ProductRow product={product} setModalChildren={setModalChildren} setModalOpen={setModalOpen}/>
                <ProductRow product={product} setModalChildren={setModalChildren} setModalOpen={setModalOpen}/>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Products
