import React from 'react'
import TrendingCoins from './TrendingCoins'

const Trending = () => {
  return (
    <div className=' w-[426px] h-56 rounded-lg bg-white ' >
      <div className=' p-6 flex flex-col gap-5'>
        <p className='text-2xl font-semibold'>Trending Coins (24h)</p>

        <div className='flex flex-col gap-5'>
            <TrendingCoins/>
            <TrendingCoins/>
            <TrendingCoins/>
        
        </div>
      </div>
    </div>
  )
}

export default Trending
