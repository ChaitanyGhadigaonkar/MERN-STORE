import React from 'react'

const Size = () => {
    return (
        <div className="types">
            <h3 className="text-lg font-semibold">Size</h3>
            <div className="flex items-center gap-4 my-2">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " type="checkbox" name="all" id=""/>
                    <p className="ml-2 text-sm font-medium text-black">S</p>
            </div>
            <div className="flex items-center gap-4 my-2">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " type="checkbox" name="all" id=""/>
                    <p className="ml-2 text-sm font-medium text-black">M</p>
            </div>
            <div className="flex items-center gap-4 my-2">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " type="checkbox" name="all" id=""/>
                    <p className="ml-2 text-sm font-medium text-black">L</p>
            </div>
            <div className="flex items-center gap-4 my-2">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " type="checkbox" name="all" id=""/>
                    <p className="ml-2 text-sm font-medium text-black">XL</p>
            </div>
            <div className="flex items-center gap-4 my-2">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 " type="checkbox" name="all" id=""/>
                    <p className="ml-2 text-sm font-medium text-black">XXL</p>
            </div>
        </div>
  )
}

export default Size
