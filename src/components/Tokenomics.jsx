import React from 'react'
import circle from "../assets/tokenomics.png"

const Tokenomics = () => {
  return (
    <div className=' w-[881px] h-[539px] bg-white p-6 gap-6 flex flex-col rounded-lg' >
        <p className='font-medium text-2xl'>Tokenomics</p>
        <p className='font-semibold text-xl'>Initial Distribution</p>
        <div className='flex  gap-7'>
            <img src={circle} alt="" />
            <div className='my-auto'>
                <div className='flex gap-2 '>
                <p className='bg-[#FAA002] my-auto size-3 rounded-full'></p>
                <p className='my-auto text-base '>Crowdsale investors: 80%</p>
            </div>
            <div className='flex gap-2 '>
                <p className='bg-[#0082ff] my-auto size-3 rounded-full'></p>
                <p className='my-auto text-base' >Foundation: 20%</p>
            </div>
            </div>
        </div>
        <p className='text-base font-medium'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dolores enim dolor aperiam vitae incidunt natus? Quibusdam perferendis eaque cumque sed iste ipsam blanditiis, doloribus nostrum amet cupiditate obcaecati ipsa rerum quod omnis recusandae quia soluta eum autem vel quas. Atque molestias temporibus doloribus fuga hic soluta eligendi optio ut ipsam reiciendis officiis deleniti asperiores illum minus expedita tempora, vero nihil! Dolores aliquam laudantium debitis mollitia assumenda dignissimos voluptate suscipit inventore quas temporibus odio doloremque blanditiis</p>
      
    </div>
  )
}

export default Tokenomics
