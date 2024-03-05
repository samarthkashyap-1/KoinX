import React from 'react'
import poly from "../assets/Polygon.png"

const TrendingCoins = () => {
  return (
    <div className=" w-[379px] flex justify-between">
      <div className='flex gap-1'>
        <img src="https://assets.coingecko.com/coins/images/12493/standard/GALA-COINGECKO.png?1696512310" className=' size-6 ' alt="" />
        <p className='text-base font-medium '>Name</p>
        <p className='text-base font-medium '>(N)</p>
      </div>
      <div>
        <div className='flex bg-green-100 w-[84px] justify-evenly  rounded-md'>
            <img src={poly} className=' w-3 h-2 my-auto' alt="" />
            <p className=' leading-7  text-green-600 text-base font-medium'>8.21 %</p>
        </div>
      </div>
    </div>
  )
}

export default TrendingCoins
