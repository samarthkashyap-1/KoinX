import React from 'react'
import frame from "../assets/Frame.png"
import right from "../assets/arrow.png"

const Banner = () => {
  return (
    <div className=' w-[426px] h-[515px] bg-[#0052FE] rounded-lg'>
      <div className='px-12 py-8 text-white flex flex-col gap-6'>
      <div>
          <p className='text-2xl font-bold text-center'>Get Started with KoinX</p>
        <p className='text-2xl font-bold text-center mt-2'>for FREE</p>
      </div>
        <p className='text-sm text-center'>
            With our range of features that you can equip for free, KoinX allows you to be more educated and aware of your tax reports.
        </p>

        <img src={frame} alt="" className='mx-auto' />
        <button className='text-black bg-white py-2 font-semibold text-xl px-6 rounded-lg flex m-auto
        ' >Get Started for FREE
        <img src={right} alt="" className='m-auto scale-75 ml-2' /></button>
      </div>
    </div>
  )
}

export default Banner
